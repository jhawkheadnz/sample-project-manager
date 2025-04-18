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
use App\Models\Task;

class TaskController extends Controller
{
    public function index(){
        $tasks = Task::all();
        return Inertia::render("tasks/index", ['tasks' => $tasks,]);
    }

    public function create(int $project_id){

        $project = Project::find($project_id);

        return Inertia::render("tasks/create", [
            'project' => $project
        ]);
    }

    public function store(Request $request) : RedirectResponse {

        $request->validate([
            'name' => 'required|string',
            'description' => 'required|string'
        ]);

        $task = Task::create([
            'name' => $request->name,
            'description' => $request->description,
            'completed' => false,
            'progress' => 0,
            'user_id' => Auth::id(),
            'project_id' => $request->project
        ]);

        return to_route("projects.view", ['project' => $request->project]);

    }


}
