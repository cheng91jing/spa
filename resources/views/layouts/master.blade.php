<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name') }}</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/customize.css') }}">
</head>
<body>

<div id="app">
        <nav class="navbar {{--fixed-top--}} sticky-top navbar-expand-lg navbar-dark bg-dark mb-3">
            <div class="container">
            <router-link class="navbar-brand mb-0 h1" to="/">{{ config('app.name') }}</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    {{--<li class="nav-item">--}}
                        {{--<router-link class="nav-link" to="/about">About</router-link>--}}
                    {{--</li>--}}
                    {{--<router-link to="/about" tag="li" class="nav-item">--}}
                        {{--<a class="nav-link">About</a>--}}
                    {{--</router-link>--}}
                </ul>
                <div class="navbar-nav ml-auto">
                    <router-link to="/about" class="nav-item nav-link">About</router-link>
                </div>
                {{--<span class="navbar-text">--}}
                    {{--Navbar text with an inline element--}}
                {{--</span>--}}
            </div>
            </div>
        </nav>

    <router-view></router-view>
</div>

<script src="{{ asset('js/app.js') }}"></script>
<script src="{{ asset('js/vue.js') }}"></script>
</body>
</html>
