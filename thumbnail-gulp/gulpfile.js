// skeleton responsible for build process
var gulp = require('gulp');
// console.logs output of build process
var gutil = require('gulp-util');
// throws text files from one part of build process to another
var source = require('vinyl-source-stream');
// responsible for figuring out dependencies and making sure files are loaded in the correct order
var browserify = require('browserify');
// auto reruns gulp file whenever gulp file changes
var watchify = require('watchify');
// converts JSX to JS
var reactify = require('reactify');

gulp.task('default', function() {
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  };
  build();
  bundler.on('update', build);
});
