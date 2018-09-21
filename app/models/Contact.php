<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;
use App\models\User;

class Contact extends Model
{
    protected $fillable = ['name', 'phone'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
