<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');


    // Project routes
    Route::get("projects", function(){
        return Inertia::render("projects/index");
    })->name('projects');

    Route::get("projects/create", function(){
        return Inertia::render("projects/create");
    })->name('projects');

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
