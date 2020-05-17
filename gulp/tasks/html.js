module.exports = function () {
    $.gulp.task('html', function () {
        return $.gulp.src(['src/static/*.html'])
            .pipe($.gulp.dest('build/'));
    });
}