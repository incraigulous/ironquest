var elixir = require('laravel-elixir');
require('laravel-elixir-bower');

elixir(function(mix) {
    mix.bower('vendor.css', 'resources/css', 'vendor.js', 'resources/js');

    mix.scripts([
        "vendor.js",
        "main.js"
    ]);

    mix.styles([
        "vendor.css",
        "base/base.css"
    ]);

    mix.version(["css/all.css", "js/all.js"]);
});