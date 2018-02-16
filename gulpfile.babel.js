import 'babel-polyfill';
import babelify from 'babelify';
import browserify from 'browserify';
import browserSync from 'browser-sync';
import buffer from 'vinyl-buffer';
import cleanCSS from 'gulp-clean-css';
import gulp from 'gulp';
import plugins from 'gulp-load-plugins';
import postCss from 'gulp-postcss';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import sassLint from 'gulp-sass-lint';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';

const reload = browserSync.reload;

const dir = {
  sass: 'scss',
  scripts: 'js',
  dist: 'dist',
  base: './'
};

const autoprefixerOptions = {
  browsers: ['last 2 versions', 'ie > 7']
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
  },

  postCssPlugins: [
    require('autoprefixer')(autoprefixerOptions)
  ]
};

gulp.task('serve', ['lint:dev'], () => {
  browserSync.init({
    server: options.server
  });
});

gulp.task('sass', () => {
  gulp.src([
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
    .pipe(gulp.dest(dir.dist));
});

gulp.task('scripts', () => {
  return browserify({
      debug: true,
      entries: ['node_modules/babel-polyfill', `${dir.scripts}/main.js`],
      transform: [
        babelify.configure({
          presets: ['es2015']
        })
      ]
    })
    .bundle()
    .on('error', (err) => console.log(err))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(plugins().sourcemaps.init({'loadMaps': true}))
    .pipe(plugins().sourcemaps.write('.'))
    .pipe(gulp.dest(`${dir.dist}/`))
    .pipe(reload({ stream: true }));
});

gulp.task('sass:lint', () => {
  gulp.src([
      `${dir.sass}/*.scss`
    ])
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

gulp.task('sass:minify', ['sass'], () => {
  return gulp.src([
      `${dir.dist}/*.css`,
      `!${dir.dist}/*.min.css`
    ])
    .pipe(cleanCSS(options.cleanCSS))
    .pipe(rename(options.rename))
    .pipe(gulp.dest(dir.dist));
});

gulp.task('default', ['serve', 'lint:dev']);
gulp.task('build', ['sass:minify', 'scripts']);

gulp.task('sass:watch', ['sass'], () => {
  gulp.watch(`${dir.sass}/**/*.scss`, ['sass']);
});

gulp.task('scripts:watch', ['scripts'], () => {
  gulp.watch(`${dir.scripts}/**/*.js`, ['scripts']);
});

gulp.task('lint:watch', ['sass:lint'], () => {
  gulp.watch(`${dir.sass}/**/*.scss`, ['sass:lint']);
});

gulp.task('lint:dev', ['sass:lint', 'sass', 'scripts'], () => {
  gulp.watch(`${dir.sass}/**/*.scss`, ['sass:lint', 'sass']);
  gulp.watch(`${dir.scripts}/**/*.js`, ['scripts']);
});
