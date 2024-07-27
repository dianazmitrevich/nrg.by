module.exports = () => {
    return $.gulp
        .src($.path.libs.src)
        .pipe(
            $.gp.plumber({
                errorHandler: $.gp.notify.onError((error) => ({
                    title: "Libs",
                    message: error.message,
                })),
            })
        )
        .pipe($.gp.newer($.path.libs.dest))
        .pipe($.gulp.dest($.path.libs.dest));
};
