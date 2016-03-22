<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="{{ elixir('css/app.css') }}">
    <link rel="stylesheet" href="{{ elixir('css/all.css') }}">
</head>
<body>
<div class="container">
    @yield('content')
</div>
<script src="{{ elixir('js/all.js') }}"></script>
@yield('scripts')
</body>
</html>

