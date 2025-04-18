<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use App\Models\Task;

class Project extends Model
{
    //
    protected $guarded = [];

    public function tasks(){

        return $this->hasMany(Task::class);

    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
