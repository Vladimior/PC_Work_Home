"use strict";

const {src, dest, parallel, watch} = pkg;
import pkg from 'gulp';
import plumber from 'gulp-plumber';
import server from 'browser-sync';
import sass from 'gulp-dart-sass';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';
import minify from 'gulp-jsmin';
import sourcemaps from 'gulp-sourcemaps';

const serve = () => {
	server.init({
		server: {baseDir: "./dist"},
		notify: false,
		online: true
	})
};
const styles = () => {
	return src('src/sass/*.sass')
	.pipe(sourcemaps.init())
	.pipe(sass({otputeStyle: 'compressed'}).on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(concat('style.min.css'))
	.pipe(sourcemaps.write('../maps'))
	.pipe(dest('dist/css'))
};
const scripts = () => {
	return src('src/js/*.js')
	.pipe(plumber())
	.pipe(concat('app.min.js'))
	.pipe(minify())
	.pipe(dest('dist/js'))
};
const images = () => {
	return src('src/images/**/*')
	.pipe(newer('dist/images/'))
	.pipe(imagemin())
	.pipe(dest('dist/images'))
};
const watcher = () => {
	watch('src/**/*.sass', styles).on('change', server.reload);
	watch(['src/js/**/*.js', '!src/js/**/*.min.js'], scripts).on('change', server.reload);
	watch('src/images/**/*', images);
};
export default parallel(
	serve,
	watcher,
	styles,
	scripts,
	images
);