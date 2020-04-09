const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const pug = require('gulp-pug');
const imagemin = require('gulp-imagemin');

function css() {
return src('./src/styles/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('build/styles'))
}

function html() {
return src('./src/*.html')
    .pipe(dest('build'))
}

function js() {
return src('./src/js/**/*.js', { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(dest('build/js', { sourcemaps: true }))
}

function images() {
    return src('src/images/**')
    .pipe(dest('build/images'))
}

function bootstrap() {
    return src('./src/bootstrap/css/**')
    .pipe(dest('build/bootstrap/css'))
}

function jQuery() {
    return src('./src/bootstrap/js/**')
    .pipe(dest('build/bootstrap/js'))
}

exports.jQuery = jQuery;
exports.bootstrap = bootstrap;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.default = parallel(css,html,js,images,bootstrap,jQuery);