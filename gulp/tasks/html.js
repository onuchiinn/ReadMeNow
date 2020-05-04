module.exports = function () {
    $.gulp.task('html', function () {
        return $.gulp.src(['src/static/index.html'])
            .pipe($.gulp.dest('build/'));
    });
}