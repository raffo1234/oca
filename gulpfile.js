'use strict';

var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var cleanCss = require('gulp-clean-css');

gulp.task('css', function () {
  gulp.src('src/assets/css/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCss({compatibility: 'ie8'}))
    .pipe(rename({
      basename: "styles",
      suffix: ".min",
      extname: ".css"
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('src/dist/css'));
})

//Copy fonts to dist/fonts
gulp.task('fonts', function() {
  gulp.src('src/assets/fonts/*')
    .pipe(gulp.dest('src/dist/fonts'));
})

// Watch task
gulp.task('watch', function() {
    gulp.watch('src/assets/css/***/**/*.css', ['css']);
    gulp.watch('src/assets/css/**/*.scss', ['css']);
    gulp.watch('src/assets/fonts/*', ['fonts']);
});

gulp.task('default', ['fonts', 'css', 'watch']);
