@extends('layouts.darkForm')

@section('content')
<section id="contact" class="parallax-bg light-typo padding-top-bottom " data-parallax-background="/images/contact-bg.jpg" data-stellar-background-ratio=".1">

            <h1 class="section-title">Login</h1>

            <div class="row">
            @if (count($errors) > 0)
                <div class="alert alert-danger">
                    <strong>Whoops!</strong> There were some problems with your input.<br><br>
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <form class="col-sm-4 col-sm-offset-4" role="form" method="POST" action="/auth/login">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">

                <div class="form-group">
                        <input type="email" class="form-control" name="email" placeholder="Username or Email" value="{{ old('email') }}">
                </div>

                <div class="form-group">
                        <input type="password" class="form-control" name="password" placeholder="Password">
                </div>

                <div class="form-group">
                    <div class="col-md-6 col-md-offset-4">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="remember"> Remember Me
                            </label>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                <p class="text-center">
                        <button type="submit" class="btn btn-quattro">
                            Login
                        </button>
                        </p>
                </div>
                <div class="row">
                <p class="text-center">
                    <a href="/password/email">Forgot Your Password?</a>
                </p>
                </div>
            </form>
     </div>
</section>
@stop
