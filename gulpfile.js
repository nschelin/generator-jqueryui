var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')();
console.log(config.alljs);

// loads plugins as needed w/o having to require directly
// lazily loads as necessary
// can replace where 'gulp' is used in plugins, put another way,
// takes name of plugin without 'gulp' e.g.
// gulp-print becomes $-print or $.print() in code
var $ = require('gulp-load-plugins')({ lazy: true });

gulp.task('vet', function() {
	log('Task \'vet\' running');
	return gulp
		.src(config.alljs)
		.pipe($.if(args.verbose, $.print()))
		.pipe($.jscs())
		.pipe($.jshint())
		// 'jshint' has reporter to help it know how to behave
		.pipe($.jshint.reporter('jshint-stylish', { verbose: true })) 
		.pipe($.jshint.reporter('fail')); // causes task to fail if jshint issues
});


// JavaScript methods
function log(msg) {
	if (typeof(msg) === 'object') {
		for(var item in msg) {
			if(msg.hasOwnProperty(item)){
				$.util.log($.util.colors.blue(msg[item]));
			}
		}
	}
	else {
		$.util.log($.util.colors.blue(msg));
	}
}
