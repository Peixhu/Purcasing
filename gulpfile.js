var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('html', function(){
	console.log('Something are being changed in html.');
});

gulp.task('styles', function(){
	console.log('Something are being changed in css.');
});

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});
	watch('./app/assets/styles/styles.css', function(){
		gulp.start('styles');
	});
});