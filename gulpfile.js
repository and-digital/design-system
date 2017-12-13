var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    open = require('gulp-open'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename");

var reload = browserSync.reload;

gulp.task('default', ['gen-sass', 'serve', 'watch']);
gulp.task('build', ['gen-sass', 'minify']);

gulp.task('serve', function () {
  browserSync.init({
    server: { baseDir: './' }
  });
});

gulp.task('gen-sass', function () {
  gulp.src('scss/brand.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
    .pipe(reload({ stream: true }));

  gulp.src('scss/brand-components.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
    .pipe(reload({ stream: true }));
});

gulp.task('minify', function () {
  gulp.src('scss/brand.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('brand.min.css'))
    .pipe(gulp.dest('dist'));

  gulp.src('scss/brand-components.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('brand-components.min.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', ['gen-sass']);
});
