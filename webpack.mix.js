/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-08-29 10:13:20
 * @LastEditors: fangn
 * @LastEditTime: 2019-08-30 20:26:00
 */
const mix = require('laravel-mix');

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

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .version();
