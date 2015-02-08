<?php namespace App\Providers;

use Illuminate\Support\ServiceProvider, Illuminate\Auth\EloquentUserProvider, App\Services\Guard;
use App;

class AuthServiceProvider extends ServiceProvider {

    public function boot() {
        $this->app['auth']->extend('ironQuestAuth', function()
        {
            $hasher = App::make('hash');
            return new App\Services\Guard(
                new EloquentUserProvider($hasher, 'App\User'),
                App::make('session.store')
            );
        });
    }

    public function register()
    {

    }
}