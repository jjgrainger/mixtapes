// dependencies
var gulp = require('gulp');
var config = require('./tasks/config.json');

// add individual tasks here
require('./tasks/styles')(gulp, config);
require('./tasks/scripts')(gulp, config);
require('./tasks/watch')(gulp, config);
require('./tasks/server')(gulp, config);

// command line tasks
// build our app
gulp.task('build', ['styles', 'scripts']);
// server our app
gulp.task('serve', ['build', 'server']);
// default task
gulp.task('default', ['build', 'server', 'watch']);
