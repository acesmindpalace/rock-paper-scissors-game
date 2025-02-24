<?php

use App\Http\Controllers\GameController;
use Illuminate\Support\Facades\Route;

Route::post('/play', [GameController::class, 'play']);
Route::get('/moves', [GameController::class, 'moves']);
