const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const connect = require('gulp-connect');

const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));

async function css_style(done) {
    gulp.src('./scss/style.scss')
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./css'));

    done();
}

gulp.task(css_style);