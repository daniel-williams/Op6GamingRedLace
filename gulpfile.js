
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

  gulp.watch([__dirname + '/client/**/*.html', __dirname + '/client/**/*.css'], function(event) {
    server.notify(event);
  });
});

gulp.task('default', ['start']);
