"use strict";

var ip = require('os').networkInterfaces().eth0[0].address;
var os = require("os");
var gulp = require('gulp'),
    less = require('gulp-less'),
    util = require('gulp-util'),
    livereload = require('gulp-livereload');

var PORT = util.env.PORT || util.env.port || 35729;

gulp.task('less', function() {
  gulp.src('styles/**/*.less', {base: '.'})
    .pipe(less())
    .pipe(gulp.dest('.'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen(PORT);
  gulp.watch('styles/**/*.less', function(){
    setTimeout(function(){
      gulp.start('less', 'less');
    }, 300);
  });
  util.log(util.colors.green('Now include this in your HTML:'));
  util.log(util.colors.yellow('<script src="//' + ip + ':' + PORT + '/livereload.js"></script>'));
});
