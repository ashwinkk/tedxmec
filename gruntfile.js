module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			options: {
				stripBanners: true
			},
			js: {
				src: ["src/js/**.js"],
				dest: "dist/build.js"
			},
			css: {
				src: ["src/css/navbar.css"],
				dest: "dist/build.css"
			}
		},
		uglify: {
			js: {
				files: {
					"dist/js/index.min.js": ["src/js/index.js", "src/js/navbar.js"],
					"dist/js/speakers.min.js": ["src/js/speakers.js", "src/js/navbar.js"],
					"dist/js/gallery.min.js": ["src/js/xgallery.js", "src/js/navbar.js"],
					"dist/js/jquery.min.js": ["src/js/jquery.js"]
				}
			}
		},
		cssmin: {
			options: {
				mergeIntoShorthands: true,
				roundingPrecision: -1
			},
			target: {
				files: {
					"dist/css/about.min.css": ["src/css/about.css"],
					"dist/css/gallery.min.css": ["src/css/gallery.css"],
					"dist/css/homepage.min.css": ["src/css/homepage.css"],
					"dist/css/speakers.min.css": ["src/css/speakers.css"],
					"dist/css/style.min.css": ["src/css/style.css"],
					"dist/css/venue.min.css": ["src/css/venue.css"]
				}
			}
		},
		compass: {
			dev: {
				options: {
					sassDir: "src/sass",
					cssDir: "src/css"
				}
			}
		},
		watch: {
			options: {
				livereload: true,
				host: "localhost",
				port: 3000
			},
			scripts: {
				files: "src/js/*.js",
				tasks: ["concat:js"],
				options: {
					event: ["all"]
				}
			},
			css: {
				files: "src/sass/**/*.scss",
				tasks: ["compass"],
				options: {
					event: ["all"]
				}
			},
			html: {
				files: "index.html"
			},
			nuns: {
				files: ["src/layouts/**/*.njk", "src/partials/**/*.njk"],
				tasks: ["renderNunjucks"],
				event: ["all"]
			}
		},
		connect: {
			server: {
				options: {
					host: "localhost",
					port: 3000,
					livereload: true
				}
			}
		},
		renderNunjucks: {
			speakers: {
				options: {
					data: "src/data.json"
				},
				files: [
					{
						expand: true,
						cwd: "src/layouts",
						src: ["**/*.njk"],
						dest: "dist",
						ext: ".html"
					}
				]
			}
		}
	});
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-compass");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-render-nunjucks");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.registerTask("build", ["uglify:js", "cssmin", "renderNunjucks"]);
	grunt.registerTask("default", [
		"connect",
		"compass",
		"concat",
		"renderNunjucks",
		"build",
		"watch"
	]);
};
