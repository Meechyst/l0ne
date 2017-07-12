<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\StatusUpdateController;
use App\Http\Controllers\UserController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//
//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::group(['middleware' => 'guest'], function () {
    Route::post('auth/login', [ 'as' => 'login', 'uses' => 'AuthController@login']);
    Route::post('auth/signup',  'AuthController@signup');

    Route::post('auth/twitter', 'AuthController@twitter');
    Route::post('auth/facebook', 'AuthController@facebook');
    Route::post('auth/google', 'AuthController@google');
});

Route::group(['middleware' => 'auth'], function () {

    Route::get('/user', 'UserController@getUser');
    Route::get('api/me', 'UserController@getUser');
    Route::put('api/me', 'UserController@updateUser');
//    Route::get('api/chech/{displayname}', 'UserController@chechUser');

});

