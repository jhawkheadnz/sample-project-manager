<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;


use App\Models\Project;

class ProjectController extends Controller
{
    //
    public function index(){

        $projects = Project::all();

        return Inertia::render("projects/index", [
            'projects' => $projects
        ]);

    }

    public function store(Request $request) : RedirectResponse {

        $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'start_date' => 'required|string'
        ]);

        $project = Project::create([
            'name' => $request->name,
            'description' => $request->description,
            'start_date' => $request->start_date,
            'user_id' => Auth::id(),
            'completed' => false
        ]);

        return to_route("projects");

    }

}
