module.exports = function () {
    $.gulp.task('scss', function () {
        return $.gulp.src('src/static/scss/*.scss')
            .pipe($.gp.sass({ outputStyle: 'expanded' }))
            .pipe($.gulp.dest('build/css'))
            .pipe($.bs.reload({stream: true}))
    });
}