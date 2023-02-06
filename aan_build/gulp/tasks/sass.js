module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('src/static/css/main.scss', { sourcemaps: true})
            .on("error", $.gp.notify.onError({
                message: "Error: <%= error.message %>",
                title: "style"
            }))
            // .pipe($.gp.csso())
            .pipe($.sass({ outputStyle: 'expanded' }))
            .pipe($.gp.autoprefixer({
                Browserslist: ["defaults and supports es6-module",
                "maintained node versions"]
            }))
            // .pipe($.gp.sourcemaps.write('./'))
            .pipe($.gulp.dest('build/css/'))
            // Минифицированная версия
            .pipe($.sass({ outputStyle: 'compressed' }))
            .pipe($.gp.rename('main.min.css'))
            .pipe($.gulp.dest('build/css/', { sourcemaps: './'}))
            .on('end', $.bs.reload);

        // .pipe($.bs.reload({
        //     stream:true
        // }));
    });
}
