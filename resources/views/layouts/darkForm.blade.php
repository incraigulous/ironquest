<!DOCTYPE html>
<html lang="en-US" class="no-js">

@include('elements.head')

<body data-spy="scroll" data-target="#main-nav" data-offset="400">

@include('elements.menu')

@yield('breadcrumbs')

<div id="alert-container">
    @if(Session::has('message'))
        <div @if(Session::has('context')) class="alert alert-{{ Session::get('context') }} no_bottom" @else class="alert" @endif role="alert">
            {{ Session::get('message') }}
        </div>
    @endif
</div>

@yield('content')

@include('elements.footer')

</body>

</html>