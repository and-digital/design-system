import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import cleanCSS from 'gulp-clean-css';
import rename from "gulp-rename";

const reload = browserSync.reload;

const dir = {
  sass: 'scss',
  dist: 'dist',
  base: './'
};

gulp.task('default', ['gen-sass', 'serve', 'watch']);
gulp.task('build', ['gen-sass', 'minify']);

gulp.task('serve', () => {
  browserSync.init({
    server: { baseDir: dir.base }
  });
});

gulp.task('gen-sass', () => {
  gulp.src(`${dir.sass}/brand.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dir.dist))
    .pipe(reload({ stream: true }));

  gulp.src(`${dir.sass}/brand-components.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dir.dist))
    .pipe(reload({ stream: true }));
});

gulp.task('minify', () => {
  gulp.src(`${dir.sass}/brand.css`)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename(`brand.min.css`))
    .pipe(gulp.dest(dir.dist));

  gulp.src(`${dir.sass}/brand-components.css`)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename(`brand-components.min.css`))
    .pipe(gulp.dest(`${dir.src}/dist`));
});

gulp.task('watch', () => {
  gulp.watch(`${dir.sass}/**/*.scss`, ['gen-sass']);
});
