'use strict';

var generators = require('yeloman-generator');

module.exports = generators.Base.extend({
	constructor: function() {
		generators.Base.apply(this, arguments);
	},
	initializing: function() {

	},
	prompting: function() {

	},
	configuring: function(){

	},
	default: function() {

	},
	writing: {
		gulpfile: function() {
			this.copy('_gulpfile.js', 'gulpfile.js');
			this.copy('_gulp.config.js', 'gulp.config.js');
			this.copy('jshintrc', '.jshintrc');
		},
		packageJSON: function() {
			this.copy('_package.json', 'package.json');
		},
		git: function(){
			this.copy('gitignore', '.gitignore');
		},
		bower: function() {
			var bowerJson = {
				name: 'app',
				license: 'MIT',
				dependencies: {}
			};

			// TODO: make dynamic choice for styles

			this.fs.writeJSON('bower.json', bowerJson);
		},
		appStaticFiles: function() {
			this.directory('css', 'src/css');
		},
		scripts: function() {

		},
		html: function() {
			// TODO:
			// add dynamic link in html file for styles?
		}
	},
	conflicts: function() {

	},
	install: function() {

	},
	end: function() {

	}
});