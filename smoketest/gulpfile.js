var gulp = require('gulp');
//var mocha = require('gulp-mocha');
var webpack = require('webpack-stream');
//var Karma = require('karma').Server;
var eslint = require('gulp-eslint');


gulp.task('webpack:dev', function() {
  return gulp.src('./app/js/client.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('staticfiles:dev', function() {
  return gulp.src('./app/**/*.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('staticcssfiles:dev', function() {
  return gulp.src('./app/css/*.css')
  .pipe(gulp.dest('build/'));
});

// gulp.task('servertests', function() {
//   return gulp.src('./test/api_test/**/*tests.js')
//     .pipe(mocha({reporter: 'nyan'}))
//     .once('error', function(err) {
//       console.log(err);
//       process.exit(1);
//     })
//     .once('end', function() {
//       if (this.seq.length === 1 && this.seq[0] === 'servertests')
//         process.exit();
//     }.bind(this));
// });

// gulp.task('karmatests', ['webpack:test'], function(done) {
//   new Karma({
//     configFile: __dirname + '/karma.conf.js'
//   }, done).start();
// });

gulp.task('bundle:test', () => {
  return gulp.src('./test/**/*_test.js')
    .pipe(webpack({
      output: {
        filename: 'test_bundle.js'
      },
      module: {
        loaders: [{
          test: /\.html$/,
          loader: 'html'
        }]
      }
    })).pipe(gulp.dest('./test'));
});

gulp.task('app-lint', () => {
  gulp.src('./app/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('test-lint', () => {
  gulp.src('./test/**/*_test.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint', ['app-lint', 'test-lint']);

gulp.task('build:dev', ['staticfiles:dev','staticcssfiles:dev', 'webpack:dev']);
gulp.task('default', ['build:dev']);
