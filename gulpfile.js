var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
    //mix.copy('node_modules/vue/dist/vue.min.js', 'resources/assets/js/vue.min.js');
    //mix.copy('node_modules/bootstrap-sass/assets/fonts', 'resources/assets/fonts');
    //mix.copy('node_modules/font-awesome/fonts', 'resources/assets/fonts');

    //mix.copy('resources/assets/fonts','public/build/fonts');

    mix.sass(['app.scss'])
        .styles([
            'app.css'
        ])
        .scripts([
            'vue.min.js',
            'app.js'
        ]);

    mix.version([
        'css/app.css',
        'css/all.css',
        'js/all.js'
    ])
});
