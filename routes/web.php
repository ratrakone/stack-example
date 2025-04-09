<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('home');
})->name('home');
Route::get('/foo', fn() => inertia('foo'))->name('foo');
Route::get('/bar', fn() => ['bar' => 'baz'])->name('bar');
