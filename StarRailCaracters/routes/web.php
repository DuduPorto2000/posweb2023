<?php

use App\Http\Controllers\PersonagensController;
use Illuminate\Support\Facades\Route;

Route::get('/', PersonagensController::class . '@index')->name('index');

Route::get('/personagem/create', PersonagensController::class . '@create')->name('create');
Route::post('/personagem/create', PersonagensController::class . '@store')->name('store');

Route::get('/personagem/show/{id}', PersonagensController::class . '@show')->name('show');

Route::get('/personagem/edit/{id}', PersonagensController::class . '@edit')->name('edit');
Route::post('/personagem/edit/{id}', PersonagensController::class . '@update')->name('update');

Route::get('/personagem/delete/{id}', PersonagensController::class . '@delete')->name('delete');
Route::post('/personagem/delete/{id}', PersonagensController::class . '@destroy')->name('destroy');