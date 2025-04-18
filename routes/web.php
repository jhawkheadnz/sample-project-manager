<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\Project\ProjectController;
use App\Http\Controllers\Project\TaskController;
use App\Http\Controllers\DashboardController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get("dashboard", [DashboardController::class, "index"])
        ->name("dashboard");

    Route::get("projects", [ProjectController::class, "index"])
        ->name("projects");

    Route::get("tasks", [TaskController::class, "index"])
        ->name("tasks");    

    Route::get("tasks/{project}/create", [TaskController::class, "create"])
        ->name("tasks.create");

    Route::get("projects/create", function(){
        return Inertia::render("projects/create");
    })->name('projects.create');

    Route::post("projects/store", [ProjectController::class, "store"])
        ->name('projects.store');

    Route::get("projects/{project}/view", [ProjectController::class, "show"])
        ->name("projects.view");

    Route::get("projects/{project}/edit", [ProjectController::class, "edit"])
        ->name("projects.edit");

    Route::post("projects", [ProjectController::class, "update"])
        ->name("projects.update");

    Route::post("tasks/store", [TaskController::class, "store"])
        ->name("tasks.store");

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
