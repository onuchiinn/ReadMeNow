module.exports = function () {
    $.gulp.task('bd', function () {
        return $.gulp.src(['src/static/bd/*.json'])
            .pipe($.gulp.dest('build/bd/'));
    });
}