var gulp = require('gulp');
var sassdoc = require('sassdoc');
var sass = require('gulp-sass');

gulp.task('styles', function () {
  var options = {
    dest: 'docs',
    verbose: true,
    display: {
      access: ['private'],
      alias: true,
      watermark: true,
    },
    groups: {
      'undefined': 'Ungrouped',
      foo: 'Foo group',
      bar: 'Bar group',
    }
  }
  
  return gulp.src('assets/scss/main.scss')
    .pipe(sassdoc(options))
    .pipe(sass())
    .pipe(gulp.dest('assets/css/'));
});
