const {mix} = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('app-fe/sass/app.scss', 'public/css');

mix.scripts([
    // Dependencies
    './node_modules/underscore/underscore.js',
    './node_modules/angular/angular.js',
    './node_modules/angular-animate/angular-animate.js',
    './node_modules/angular-messages/angular-messages.js',
    './node_modules/angular-resource/angular-resource.js',
    './node_modules/angular-ui-router/release/angular-ui-router.js',
    './node_modules/angular-toastr/dist/angular-toastr.js',
    './node_modules/angular-toastr/dist/angular-toastr.tpls.js',
    './node_modules/satellizer/dist/satellizer.js',
    './node_modules/angular-aria/angular-aria.js',
    './node_modules/angular-material/angular-material.js',
    './node_modules/restangular/dist/restangular.js',
    './node_modules/moment/moment.js',
    './node_modules/angular-moment/angular-moment.js',
], 'public/js/vendor.js').version();

mix.scripts([
    // Application
    'app-fe/config/app.js',
    'app-fe/config/app.config.js',
    'app-fe/config/app.module.js',
    'app-fe/js/**/*.js'
], 'public/js/app.js').version();

mix.copy('app-fe/js/**/*.html', 'public/templates/');
