const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

gulp.task('message',async ()=>{
   return console.log("Gulp is running");
});

gulp.task('default',async()=>{
    return console.log('I am Here and running');
});

gulp.task('copy',async ()=>{
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('image',async()=>{
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('minify',async()=>{
    gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})