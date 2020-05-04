module.exports = function () {
    $.gulp.task('img', function () {
        return $.gulp.src('src/static/img/**')
        .pipe($.gp.imagemin({
            progressive: true
        }))
        .pipe($.gulp.dest('build/img/'));
    });
}