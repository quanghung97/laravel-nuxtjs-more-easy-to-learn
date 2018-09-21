<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Contact extends Model
{
    protected $fillable = ['name', 'phone'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
