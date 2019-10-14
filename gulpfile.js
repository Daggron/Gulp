const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass =require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('message',async ()=>{
   return console.log("Gulp is running");
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

gulp.task('sass',async ()=>{
    gulp.src('src/css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('combine',async()=>{
    gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
})

gulp.task('default',gulp.series('copy','combine','sass','image'));


