const gulp = require('gulp'),
	pug = require('gulp-pug');

gulp.task('pug', () => 
	gulp.src('src/views/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('build/html/'))
);