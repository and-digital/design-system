import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import sassLint from 'gulp-sass-lint';
import postCss from 'gulp-postcss';

const reload = browserSync.reload;

const dir = {
  sass: 'scss',
  dist: 'dist',
  base: './'
};

const autoprefixerOptions = {
  browsers: ['last 2 versions', 'ie > 7']
}

const options = {
  server: {
    baseDir: dir.base
  },

  cleanCSS: {
    compatibility: 'ie8'
  },

  rename: {
    suffix: '.min'
  },

  postCssPlugins: [
    require('autoprefixer')(autoprefixerOptions)
  ]
};


gulp.task('default', ['serve', 'lint:dev']);
gulp.task('build', ['minify']);

gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server: options.server
  });
});

gulp.task('sass:lint', () => {
  return gulp.src([
      `${dir.sass}/*.scss`
    ])
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

gulp.task('sass', () => {
  return gulp.src([
      `${dir.sass}/*.scss`
    ])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', function (err) {
      if(process.env.CI) {
        console.log(err);
        return process.exit(1)
      }

      return sass.logError;
    }))
    .pipe(postCss(options.postCssPlugins))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dir.dist))
    .pipe(reload({ stream: true }));
});

gulp.task('minify', ['sass'], () => {
  return gulp.src([
      `${dir.dist}/*.css`,
      `!${dir.dist}/*.min.css`
    ])
    .pipe(cleanCSS(options.cleanCSS))
    .pipe(rename(options.rename))
    .pipe(gulp.dest(dir.dist));
});

gulp.task('sass:watch', ['sass'], () => {
  gulp.watch(`${dir.sass}/**/*.scss`, ['sass']);
});

gulp.task('lint:watch', ['sass:lint'], () => {
  gulp.watch(`${dir.sass}/**/*.scss`, ['sass:lint']);
});

gulp.task('lint:dev', ['sass:lint', 'sass'], () => {
  gulp.watch(`${dir.sass}/**/*.scss`, ['sass:lint', 'sass']);
});
