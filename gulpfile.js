var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// lint
gulp.task('lint', function() {
    gulp.src('./build/www/*.js')
        .pipe(jshint())
        .pipe(jshint({ node: 'true' }))
        .pipe(jshint.reporter('default'));
});

// minify
gulp.task('minify', function(){
    gulp.src('./build/www/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

// Defaults
gulp.task('default', function(){
    gulp.run('lint', 'minify');

    // Changes detection
    gulp.watch("./build/www/*.js", function(event){
        gulp.run('lint', 'minify');
    });
});