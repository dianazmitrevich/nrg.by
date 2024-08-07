const sass = require("gulp-sass")(require("sass"));

// обработка SCSS
const scss = () => {
    return $.gulp
        .src($.path.scss.src, { sourcemaps: $.app.isDev }) // создает файловый поток чтения, который мы можем потом передать дальше
        .pipe(
            $.gp.plumber({
                errorHandler: $.gp.notify.onError((error) => ({
                    title: "SCSS",
                    message: error.message,
                })),
            })
        )
        .pipe($.gp.sassGlob())
        .pipe(sass())
        .pipe($.gp.autoprefixer())
        .pipe($.gp.shorthand())
        .pipe($.gp.groupCssMediaQueries())
        .pipe($.gp.size({ title: "main.css" }))
        .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
        .pipe($.gp.rename({ suffix: ".min" }))
        .pipe($.gp.csso())
        .pipe($.gp.size({ title: "main.min.css" }))
        .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }));
};

module.exports = scss;
