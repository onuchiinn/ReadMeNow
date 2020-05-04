module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('src/static/*.html', $.gulp.series('html'));
        $.gulp.watch('src/static/scss/**/*.scss', $.gulp.series('scss'));
        $.gulp.watch('src/static/js/main.js', $.gulp.series('scripts'));
        $.gulp.watch('src/static/img/**', $.gulp.series('img'));
    });
}