var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    open = require('gulp-open');
var reload = browserSync.reload;

gulp.task('default', ['gen-sass', 'serve', 'watch']);

gulp.task('serve', function () {
  browserSync.init({
    server: { baseDir: './' }
  });
});

gulp.task('gen-sass', function () {
  gulp.src('brand.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(''))
    .pipe(reload({ stream: true }));
});

gulp.task('watch', function () {
  gulp.watch('**/*.scss', ['gen-sass']);
});
