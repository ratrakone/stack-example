<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('home', [
        'list' => [
            ['name' => 'John Doe', 'age' => 30],
            ['name' => 'Jane Smith', 'age' => 25],
            ['name' => 'Alice Johnson', 'age' => 28],
        ]
    ]);
})->name('home');
Route::get('/foo', fn() => inertia('foo'))->name('foo');
Route::get('/bar', fn() => ['bar' => 'baz'])->name('bar');
