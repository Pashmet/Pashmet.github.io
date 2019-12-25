const gulp = require('gulp');
const sass = require('gulp-sass');
const sync = require('browser-sync');
const rigger = require ('gulp-rigger');
const concat = require ('gulp-concat');



gulp.task('scss', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('dist/css'))
        .pipe(sync.reload({stream: true}))
});


gulp.task('img', function () {
    return gulp.src(['src/img/**/*.jpg', 'src/img/**/*.png'])
        .pipe(gulp.dest('dist/img'))
        .pipe(sync.reload({stream: true}))
});

gulp.task('fonts', function () {
    return gulp.src(['src/fonts/**/*'])
        .pipe(gulp.dest('dist/fonts'))
        .pipe(sync.reload({stream: true}))
});




gulp.task('js', function () {
   return gulp.src([
       'src/js/**/*.js'
   ])
       .pipe(concat('main.js'))
       .pipe(gulp.dest('dist/js'))
});




gulp.task('watch', function f() {
    gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('src/**/*.html', gulp.parallel('html'));
    gulp.watch(['src/img/**/*.jpg', 'src/img/**/*.png'], gulp.parallel('img'));
    gulp.watch(['src/fonts/**/*'], gulp.parallel('fonts'));
    gulp.watch('src/js/**/*.js', gulp.parallel('js'));
});

gulp.task('html', function () {
    return gulp.src('src/index.html')
        .pipe(rigger())
        .pipe(gulp.dest('dist/'))
        .pipe(sync.reload({ stream: true }));
});

gulp.task('sync', function () { //сервер сам перегружает страницу когда происходят изменения в файле
    sync.init({
        server: {
            baseDir: 'dist/'
        }
    })
});

gulp.task('default', gulp.parallel('sync', 'watch'));
