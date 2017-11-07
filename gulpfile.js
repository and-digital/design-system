var gulp = require('gulp'),
  sass = require('gulp-sass'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps'),
  rename = require('gulp-rename'),
  connect = require('gulp-connect'),
  open = require('gulp-open');

gulp.task('default', function () {
  gulp.start([
    'gen-sass',
    'serve'
  ]);
});

gulp.task('build', ['default'], function () {
  gulp.start([
    'uglify'
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

gulp.task('uglify', ['default'], function () {
  gulp.src('brand.css')
    .pipe(uglify())
    .pipe(rename('brand.min.css'))
    .pipe(gulp.dest(''));
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