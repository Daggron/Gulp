const gulp = require('gulp');

gulp.task('message',async ()=>{
   return console.log("Gulp is running");
})

gulp.task('default',async()=>{
    return console.log('I am Here and running');
})