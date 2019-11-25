const sass = require('node-sass');

module.exports = function(grunt){

	//Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: [{
					'build/styles/main.css': 'src/styles/main.scss'
				}]
			}
		},

		postcss: {
			options: {
				map: true,
				processors: [
					require('autoprefixer')({overrideBrowserslist: ['last 4 versions']})
				]},
			dist: {
				src: 'build/styles/main.css'
			}
		},

		babel: {
			options: {
				sourceMap: true,
				presets: ['@babel/preset-env']
			},
			dist: {
				files: [{
					'build/scripts/app.min.js': 'src/scripts/app.js'
				}]
			}
		},

		watch: {
			css: {
				files: 'src/styles/**/*.scss',
				tasks: ['sass', 'postcss']
			},
			scripts: {
				files: ['src/scripts/app.js'],
				tasks: ['babel']
			}
		}
	});

	// Load plugins

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register tasks
	grunt.registerTask('default', ['watch']);
};
