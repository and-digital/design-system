import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';

const reload = browserSync.reload;

const dir = {
  sass: 'scss',
  dist: 'dist',
  base: './'
};

const options = {
  server: {
    baseDir: dir.base
  },

  cleanCSS: {
    compatibility: 'ie8'
  },

  rename: {
    suffix: '.min'
  }
};


gulp.task('default', ['gen-sass', 'serve', 'watch']);
gulp.task('build', ['minify']);

gulp.task('serve', () => {
  browserSync.init({
    server: options.server
  });
});

gulp.task('gen-sass', () => {
  return gulp.src([
      `${dir.sass}/*.scss`
    ])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dir.dist))
    .pipe(reload({ stream: true }));
});

gulp.task('minify', ['gen-sass'], () => {
  return gulp.src([
      `${dir.dist}/*.css`,
      `!${dir.dist}/*.min.css`
    ])
    .pipe(cleanCSS(options.cleanCSS))
    .pipe(rename(options.rename))
    .pipe(gulp.dest(dir.dist));
});

gulp.task('watch', () => {
  gulp.watch(`${dir.sass}/**/*.scss`, ['gen-sass']);
});
