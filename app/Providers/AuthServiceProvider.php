<?php
/**
 * Created by PhpStorm.
 * User: craigwann1
 * Date: 2/6/15
 * Time: 11:49 PM
 */

namespace App\Providers;

use Illuminate\Auth\EloquentUserProvider;
use App\Services\Guard;
use App;

class AuthServiceProvider {

    public function boot() {
        $this->app['auth']->extend('ironQuestAuth', function()
        {
            $hasher = App::make('hash');
            return new Guard(
                new EloquentUserProvider($hasher, 'App\User'),
                App::make('session.store')
            );
        });
    }
}