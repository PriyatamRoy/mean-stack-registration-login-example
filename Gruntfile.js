module.exports = function(grunt) {

	grunt.initConfig({

		// JS TASKS ================================================================
	    // check all js files for errors
	    jshint: {
	    	files: ['Gruntfile.js', 'src/**/*.js']
	    },
	    // configure nodemon
	    nodemon: {
	      dev: {
	        script: 'server.js'
	      }
	    }

	});

	// load nodemon
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// register the nodemon task when we run grunt
	grunt.registerTask('default', ['jshint', 'nodemon']);
};