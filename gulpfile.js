const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const pug = require('gulp-pug');

function css() {
return src('./src/css/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('./build'))
}

function html() {
return src('./src/*.pug')
    .pipe(pug())
    .pipe(dest('build'))
}

function js() {
return src('./src/*.js', { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(dest('build/js', { sourcemaps: true }))
}


exports.js = js;
exports.css = css;
exports.html = html;
exports.default = parallel(html, css, js);