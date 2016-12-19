'use strict';

const del = require('del');
const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const server = require('browser-sync').create();
const mqpacker = require('css-mqpacker');
const minify = require('gulp-csso');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const webpack = require('gulp-webpack');
const mocha = require('gulp-mocha');
require('babel-register');

gulp.task('style', function () {
  gulp.src('sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        browsers: [
          'last 1 version',
          'last 2 Chrome versions',
          'last 2 Firefox versions',
          'last 2 Opera versions',
          'last 2 Edge versions'
        ]
      }),
      mqpacker({sort: true})
    ]))
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream())
    .pipe(minify())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'));
});

gulp.task('scripts', function () {
  return gulp.src('js/**/*.js')
    .pipe(plumber())
    .pipe(webpack({
      devtool: 'source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
          }
        ]
      },
      output: {
        filename: 'main.js'
      }
    }))
    .pipe(gulp.dest('build/js/'));
});

gulp.task('test', function () {
  return gulp
    .src(['js/**/*.test.js'], { read: false })
    .pipe(mocha({
      compilers: {
        js: 'babel-register' // Включим поддержку "import/export" в Mocha
      },
      reporter: 'spec'       // Вид в котором я хочу отображать результаты тестирования
    }));
});

gulp.task('imagemin', ['copy'], function () {
  return gulp.src('build/img/**/*.{jpg,png,gif}')
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest('build/img'));
});


gulp.task('copy-html', function () {
  return gulp.src('*.html')
    .pipe(gulp.dest('build'))
    .pipe(server.stream());
});

gulp.task('copy', ['copy-html', 'scripts', 'style'], function () {
  return gulp.src([
    'fonts/**/*.{woff,woff2}',
    'img/*.*'
  ], {base: '.'})
    .pipe(gulp.dest('build'));
});

gulp.task('clean', function () {
  return del('build/**/*');
});

gulp.task('serve', ['assemble'], function () {
  server.init({
    server: './build',
    notify: false,
    open: true,
    port: 3501,
    ui: false
  });

  gulp.watch('sass/**/*.{scss,sass}', ['style']);
  gulp.watch('*.html', ['copy-html']);
  gulp.watch('js/**/*.js', ['scripts']).on('change', server.reload);
});

gulp.task('assemble', ['clean'], function () {
  gulp.start('copy', 'style');
});

gulp.task('build', ['assemble', 'imagemin']);
