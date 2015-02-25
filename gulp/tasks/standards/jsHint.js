var gulp = require('gulp'),
    config = require('../../config');


// lint js sources based on .jshintrc ruleset
gulp.task('jsHint', function(done) {
    return gulp
        .src(config.paths.scripts)
        .pipe(gulp.plugins.jshint())
        .pipe(gulp.plugins.jshint.reporter(gulp.plugins.stylish))

        .on('error', errorHandler);
    done();
});


// Handle errors
function errorHandler(error) {
    console.log('Gulp jsHint Error: ', error.toString());
    this.emit('end');
}