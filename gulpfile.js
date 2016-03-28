
var gulp = require('gulp'),
    less = require('gulp-less')
    server = require('gulp-express');



gulp.task('styles', function() {
  console.log(__dirname + '/src');
  return gulp.src(__dirname + '/src/**/*.less')
    .pipe(less())
    .pipe(gulp.dest(__dirname + '/client/content/styles/'))
    .on('error', function (error) {
      console.error(String(error));
    });
});

gulp.task('watch', function () {
	gulp.watch(__dirname + '/src/**/*.less', ['styles']);
});


gulp.task('buildOnce', ['styles']);
gulp.task('build', ['buildOnce', 'watch']);

gulp.task('start', ['build'], function () {
  server.run(['server/app.js']);

  // Restart the server when file changes
  gulp.watch(['client/**/*.html'], server.notify);
});

gulp.task('default', ['start']);