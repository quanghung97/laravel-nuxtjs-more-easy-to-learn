<?php

namespace App\Repositories;

use DB;
use App\Repositories\Contracts\BaseInterface;

abstract class BaseRepository implements BaseInterface
{
    protected $model;
    public static $singletonModel = null;

    public function __construct($model)
    {
        if (!static::$singletonModel) {
            static::$singletonModel = $model;
        }
        $this->model = static::$singletonModel;
    }

    public function getModelInstance()
    {
        return $this->model;
    }

    public function all()
    {
        return $this->model->all();
    }

    public function lists($column, $key = null)
    {
        return $this->model->pluck($column, $key);
    }

    public function paginate($limit = null, $columns = ['*'], $pageName = 'page', $page = null)
    {
        $limit = is_null($limit) ? config('setting.paginate') : $limit;

        return $this->model->paginate($limit, $columns, $pageName, $page);
    }

    public function find($id, $columns = ['*'])
    {
        return $this->model->find($id, $columns);
    }

    public function findBy($column, $value)
    {
        return $this->model->where($column, $value)->first();
    }

    public function findOrFail($id, $columns = ['*'])
    {
        return $this->model->findOrFail($id, $columns);
    }

    public function whereIn($column, $values)
    {
        $values = is_array($values) ? $values : [$values];
        return $this->model->whereIn($column, $values);
    }

    public function orWhere($column, $operator = null, $value = null)
    {
        return $this->model->orWhere($column, $operator, $value);
    }

    public function where($conditions, $operator = null, $value = null)
    {
        return $this->model->where($conditions, $operator, $value);
    }

    public function create($input)
    {
        return $this->model->create($input);
    }

    public function firstOrCreate($input)
    {
        return $this->model->firstOrCreate($input);
    }

    public function multiCreate($input)
    {
        return $this->model->insert($input);
    }

    public function update($id, $input)
    {
        $model = $this->model->findOrFail($id);
        $model->fill($input);
        $model->save();

        return $model;
    }

    public function multiUpdate($column, $value, $input)
    {
        $value = is_array($value) ? $value : [$value];

        return $this->model->whereIn($column, $value)->update($input);
    }

    public function delete($ids)
    {
        if (empty($ids)) {
            return true;
        }

        $ids = is_array($ids) ? $ids : [$ids];

        return $this->model->whereIn('id', $ids)->delete();
    }

    public function truncate()
    {
        return $this->model->truncate();
    }

    public function join(...$params)
    {
        return $this->model->join(...$params);
    }

    public function getListRecord($ids)
    {
        return $ids ? $this->whereIn('id', $ids)->get() : $this->model->get();
    }

    public function filters($data)
    {
        $results = $this->model;
        foreach ($data as $index => $value) {
            $results = (empty($value) ? $results : $results->where($index, $value));
        }
        return $results;
    }

    public function findInSet($column, $values)
    {
        $values = is_array($values) ? $values : [$values];
        $valuesString = implode(',', $values);
        return $this->model->whereIn('id', $values)
            ->orderByRaw("FIND_IN_SET($column, '$valuesString')");
    }

    /**
     * Call method not exist in object
     * @return mixed
     */
    public function __call($method, $args)
    {
        if (strpos(' ' . $method, 'findBy')) {
            return $this->model
                ->where(camelToSnake(substr($method, strlen('findBy'))), $args)
                ->first();
        }
        return call_user_func_array([$this->model, $method], $args);
    }
}
