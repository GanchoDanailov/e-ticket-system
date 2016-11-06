// Dependencies
let gulp = require('gulp')
let nodemon = require('gulp-nodemon')
let notify = require('gulp-notify')
let less = require('gulp-less')
let livereload = require('gulp-livereload')

// Compiles LESS > CSS task
gulp.task('build-less', () => {
  return gulp.src('./source/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload())
})

// Nodemon task
gulp.task('nodemon', () => {
  livereload.listen()

  // configure nodemon
  nodemon({
      // the script to run the app
    script: 'index.js',
    ext: 'js pug',
    watch: ['**/*']
  })
  .on('restart', () => {
      // when the app has restarted, run livereload.
    gulp.src('index.js')
        .pipe(livereload())
        .pipe(notify('Reloading page, please wait...'))
  })
})

gulp.task('watch', () => {
  gulp.watch('./source/less/*.less', ['build-less'])
})

gulp.task('default', ['watch', 'nodemon'])
