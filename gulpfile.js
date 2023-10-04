'use strict';

const gulp = require('gulp');
const {watch, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

// const sass = require('gulp-sass')(require('sass'));

function browsersync() {
  browserSync.init({
    server: {baseDir: '.'},
    notify: true,
    online: true
  })
}

// function buildStyles() {
//   return gulp.src('./sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// };


function startWatch() {
  watch(['./index.html', './css/*.css', './js/*.js'])
    .on('change', browserSync.reload);
}

exports.browsersync = browsersync;
exports.startWatch = startWatch;

// exports.buildStyles = buildStyles;

// exports.watch = function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
//   console.log('watch');
// };

exports.default = parallel(browsersync, startWatch);


