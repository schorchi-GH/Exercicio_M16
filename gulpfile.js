const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compilaSass() {
    return gulp.src('source/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('build/styles'));
}

function compressaoImagens() {
    return gulp.src('source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'));
}

function compressaoJavaScript() {
    return gulp.src('source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/scripts'));
}

exports.sass = compilaSass;
exports.imagens = compressaoImagens;
exports.javascript = compressaoJavaScript;

exports.default = gulp.parallel(compilaSass, compressaoImagens, compressaoJavaScript);
exports.watch = function() {
    gulp.watch('source/sass/*.scss', compilaSass);
    gulp.watch('source/images/*', compressaoImagens);
    gulp.watch('source/js/*.js', compressaoJavaScript);
};

