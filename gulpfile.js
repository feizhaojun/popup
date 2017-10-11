var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifyCss = require("gulp-minify-css");

gulp.task('default',['dist','uglify']);

gulp.task('dist', function() {
	gulp.src('src/*.*')
		.pipe(gulp.dest('dist'))
});

gulp.task('uglify', function() {
	gulp.src('src/*.js')
		.pipe(uglify())
		.pipe(rename({
				suffix:".min"
		}))
		.pipe(gulp.dest('dist'))
	gulp.src('src/*.css')
		.pipe(minifyCss())
		.pipe(rename({
				suffix:".min"
		}))
		.pipe(gulp.dest('dist'))
});