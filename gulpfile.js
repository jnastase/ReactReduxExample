var gulp = require('gulp'),
    babel = require('gulp-babel')
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream')
    webserver = require('gulp-webserver');

gulp.task('default', function () {
    browserify({
        entries: 'src/index.js'
    })
    .transform(babelify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist'));

    gulp.src('src/**.html')
    .pipe(gulp.dest('dist'));

    gulp.src('dist')
    .pipe(webserver({
        directoryListing: false,
        open:true,
        fallback: 'index.html'
    }));
});