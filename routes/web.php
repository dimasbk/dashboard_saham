<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PortofolioBeliController;
use App\Http\Controllers\PortofolioJualController;
use App\Http\Controllers\ReportBeliController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::resource('portobeli',PortofolioBeliController::class);
Route::get('/portofoliobeli/{user_id}', [PortofolioBeliController::class, 'getData']);
Route::post('/portofoliobeli/addbeli', [PortofolioBeliController::class, 'insertData']);
Route::get('/portofoliobeli/edit/{user_id}', [PortofolioBeliController::class, 'getEdit']);
Route::post('/portofoliobeli/editbeli', [PortofolioBeliController::class, 'editData']);


Route::get('/portofoliojual/{user_id}', [PortofolioJualController::class, 'getdata']);
Route::post('/portofoliojual/addjual', [PortofolioJualController::class, 'insertData']);


Route::get('/reportbeli/{user_id}', [ReportBeliController::class, 'getData']);

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
