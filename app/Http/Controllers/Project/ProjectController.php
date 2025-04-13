<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Http\Requests\Project\StoreProjectRequest;
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

    public function store(StoreProjectRequest $request) : RedirectResponse {

        $validated = $request->validated();

        $validated = $request->safe()->only(['name', 'description', 'start_date']);
        $validated = $request->safe()->except(['name', 'description', 'start_date']);

        return redirect("/projects");

    }

}
