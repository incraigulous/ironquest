var elixir = require('laravel-elixir');
require('laravel-elixir-bower');

elixir(function(mix) {
    mix.bower('vendor.css', 'resources/css', 'vendor.js', 'resources/js');

    mix.scripts([
        "vendor.js",
        "plugins/jquery.laraveldelete.js",
        "plugins/jquery.flexslider.js",
        "plugins/jquery.masonry.js",
        "plugins/jquery.sequence.js",
        "plugins/jquery.waypoints.js",
        "plugins/jquery.waypoints-sticky.js",
        "quatro/contact.js",
        "quatro/quatro.js",
        "preloader.js",
        "main.js"
    ]);

    mix.styles([
        "fonts/font-awesome.css",
        "vendor.css",
        "quatro/quatro.css",
        "base/base.css",
        "form/form.css"
    ]);

    mix.version(["css/all.css", "js/all.js"]);
});