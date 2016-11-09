'use strict';

var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

var config = {
  jsFiles: [
    'src/assets/js/modernizr.touch.js',
    'src/assets/js/jquery.min.js',
    'src/assets/js/owl.carousel.min.js',
    'src/assets/js/jquery.validate.min.js',
    'src/assets/js/jquery.waypoints.min.js',
    'src/assets/js/scripts.js'
  ]
};

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

gulp.task('js', function() {
  return gulp.src(config.jsFiles)
    .pipe(sourcemaps.init())
    .pipe(uglify().on('error', function(error){
      console.log(error);
    }))
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('src/dist/js'));
});

// Watch task
gulp.task('watch', function() {
    gulp.watch('src/assets/css/***/**/*.css', ['css']);
    gulp.watch('src/assets/css/**/*.scss', ['css']);
    gulp.watch('src/assets/fonts/*', ['fonts']);
    gulp.watch('src/assets/js/*.js', ['js']);
});

gulp.task('default', ['fonts', 'css', 'js', 'watch']);
