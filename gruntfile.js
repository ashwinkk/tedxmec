module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            options: {
                stripBanners: true,
            },
            js: {
                src: ['src/js/jquery.js'],
                dest: 'dist/build.js',
            },
            css: {
                src: ['src/css/navbar.css'],
                dest: 'dist/build.css'
            }
        },
        uglify: {
            js: {
                files: {
                    'dist/build.min.js': ['dist/build.js']
                }
            },
        },
        cssmin: {
            options: {
                mergeIntoShorthands: true,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/build.min.css': ['dist/build.css']
                }
            }
        },
        compass: {
            dev: {
                options: {
                    sassDir: 'src/sass',
                    cssDir: 'src/css'
                }
            }
        },
        watch: {
            options: {
                livereload: true,
                host: 'localhost',
                port: 3000
            },
            scripts: {
                files: 'src/js/*.js',
                tasks: ['concat:js'],
                options: {
                    event: ['all'],
                },
            },
            css: {
                files: 'src/sass/**/*.scss',
                tasks: ['compass'],
                options: {
                    event: ['all']
                }
            },
            html: {
                files: 'index.html'
            }
        },
        connect: {
            server: {
                options: {
                    host: 'localhost',
                    port: 3000,
                    livereload: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', ['connect', 'compass', 'concat', 'watch']);
}
