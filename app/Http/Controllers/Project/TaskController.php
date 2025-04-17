<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\User;
use App\Models\Project;

class TaskController extends Controller
{
    public function index(){
    
        $tasks = Task::all();

        return Inertia::render("tasks/index", ['tasks' => $tasks,]);

    }

    public function create(){

        return Inertia::render("tasks/create");

    }


}
