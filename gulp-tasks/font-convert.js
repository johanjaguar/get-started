var gulp = require('gulp');
var fontgen = require('gulp-fontgen');
 
gulp.task('fontgen', function() {
	gulp.src([
    'src/fonts/**/*.otf',
    'src/fonts/**/*.ttf',
    'src/fonts/**/*.woff',
  ])
    .pipe(fontgen({
      dest: "build/fonts/"
    }));
});
 
