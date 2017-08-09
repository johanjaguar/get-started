//variables con los plugins que usaremos
var gulp = require('gulp');
var util = require('gulp-util');
var requireDir = require('require-dir');
var browserSync = require('browser-sync');

requireDir('./gulp-tasks');

gulp.task( 'default',
  ['browser-sync'], function(){
    gulp.watch('**/*.scss',
      {cwd: 'src/scss'} ,
      ['sass']);
    gulp.watch(  '**/*.js',
      {cwd: 'src/javascript'} ,
      ['scripts']);
    gulp.watch(  '**/*.pug',
      {cwd: 'src/views'} ,
      ['pug']);
    gulp.watch([ '**/*.gif' , '**/*.png' , '**/*.jpg' , '**/*.jpeg' ]
      , {cwd: 'src/images'} ,
      ['imagesmin']
    );
    gulp.watch([ '**/*.otf' , '**/*.ttf', '**/*.woff']
      , {cwd: 'src/fonts'} ,
      ['fontgen']
    );
    gulp.watch(['css/**/*.css', 'js/**/*.js'],
      {cwd: 'build'} ,
      ['bs-reload']
    );
    gulp.watch("index.html",
      {cwd: ''} ,
      ['bs-reload']
    );
});
