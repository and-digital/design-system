var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    connect = require('gulp-connect'),
    open = require('gulp-open');

gulp.task('default', function () {
  gulp.start([
    'gen-sass',
    'serve'
  ]);
});

gulp.task('serve', function () {
  connect.server({
    root: './',
    livereload: true
  });

  gulp.src('./brand.html')
    .pipe(open());
});

gulp.task('gen-sass', function () {
  gulp.src('brand.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(''));
});

gulp.task('watch', ['default'], function () {
  gulp.watch('*.scss', ['gen-sass']);
});
