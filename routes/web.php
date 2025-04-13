<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\Project\ProjectController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get("projects", [ProjectController::class, "index"])
        ->name("projects");
        
    Route::get("projects/create", function(){
        return Inertia::render("projects/create");
    })->name('projects.create');
    
    Route::post("projects/store", [ProjectController::class, "store"])
        ->name('projects.store');

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
