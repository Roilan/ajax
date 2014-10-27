module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		uglify: {
		    build: {
		        src: 'assets/js/main.js',
		        dest: 'assets/js/main.min.js'
		    }
		},

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'assets/css/main.min.css': 'assets/sass/main.scss'
				}
			}
		},

		connect: {
			server: {
				options: {
					port: 8080,
					base: './'
				}
			}
		},

		watch: {
			scripts: {
				files: ['assets/js/main.js'],
				tasks: ['uglify'],
				options: {
					spawn: false,
					livereload: true,
				}
			},

			css: {
				files: ['assets/sass/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: true,
				}
			},

			html: {
				files: ['index.html', '*.html', 'assets/css/*.css'],
				options: {
					livereload: true,
				}
			}
		}

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	//grunt.registerTask('default', ['concat', 'uglify', 'sass']);
	grunt.registerTask('default', ['connect', 'watch']);
};