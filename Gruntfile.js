module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
           js: {
		    src: 'src/js/libs/*.js',
		    dest: 'src/js/libs.js'
		  },
		  css: {
		    src: 'src/css/libs/*.css',
		    dest: 'src/css/libs.css'
		  },
		  fullcss: {
		    src: ['src/css/libs.css','src/css/style.css','src/css/media.css','src/css/scripts.css'],
		    dest: 'src/css/full.css'
		  },		  
           m_js: {
		    src: 'src/mobile/js/libs/*.js',
		    dest: 'src/mobile/js/libs.js'
		  },
		  m_css: {
		    src: 'src/mobile/css/libs/*.css',
		    dest: 'src/mobile/css/libs.css'
		  },
		  m_fullcss: {
		    src: ['src/mobile/css/libs.css','src/mobile/css/style.css','src/mobile/css/media.css','src/mobile/css/scripts.css'],
		    dest: 'src/mobile/css/full.css'
		  }
        },
        cssmin: {
        	options:{
				advanced: false,
				aggressiveMerging: false,
				benchmark: false,
				compatibility: false,
				debug: false,
				inliner: false,
				keepBreaks: true,
				keepSpecialComments: false,
				mediaMerging: false,
				processImport: false,
				processImportFrom: false,
				rebase: false,
				relativeTo: false,
				restructuring: false,
				root: false,
				roundingPrecision: false,
				semanticMerging: false,
				shorthandCompacting: false,
				sourceMap: false,
				sourceMapInlineSources: false
        	},
		  target: {
		    files: [{
		      src: 'src/css/style.css',
		      dest: 'src/css/style.css'
		    },
		    {
		      src: 'src/css/libs.css',
		      dest: 'src/css/libs.min.css'
		    },
		    {
		      src: 'src/css/scripts.css',
		      dest: 'src/css/scripts.css'
		    },
		    {
		      src: 'src/css/head.css',
		      dest: 'src/css/head.css'
		    },
		    {
		      src: 'src/css/media.css',
		      dest: 'src/css/media.css'
		    },
		    {
		      src: 'src/css/full.css',
		      dest: 'src/css/full.min.css'
		    },
		    {
		      src: 'src/mobile/css/style.css',
		      dest: 'src/mobile/css/style.css'
		    },
		    {
		      src: 'src/mobile/css/libs.css',
		      dest: 'src/mobile/css/libs.min.css'
		    },
		    {
		      src: 'src/mobile/css/scripts.css',
		      dest: 'src/mobile/css/scripts.css'
		    },
		    {
		      src: 'src/mobile/css/media.css',
		      dest: 'src/mobile/css/media.css'
		    },
		    {
		      src: 'src/mobile/css/full.css',
		      dest: 'src/mobile/css/full.min.css'
		    }]
		  }
		},
        uglify: {
		    jquery: {
		       	src: 'src/js/jquery/jquery.js',
		       	dest: 'src/js/jquery.min.js'
		    },
		    init: {
		       	src: 'src/js/init.js',
		       	dest: 'src/js/init.min.js'
		    },
		    libs: {
		        src: 'src/js/libs.js',
		        dest: 'src/js/libs.min.js'
		    },
		    main: {
		       	src: 'src/js/main.js',
		       	dest: 'src/js/main.min.js'
		    },
		    map: {
		       	src: 'src/js/map.js',
		       	dest: 'src/js/map.min.js'
		    },
		    m_jquery: {
		       	src: 'src/mobile/js/jquery/jquery.js',
		       	dest: 'src/mobile/js/jquery.min.js'
		    },
		    m_init: {
		       	src: 'src/mobile/js/init.js',
		       	dest: 'src/mobile/js/init.min.js'
		    },
		    m_libs: {
		        src: 'src/mobile/js/libs.js',
		        dest: 'src/mobile/js/libs.min.js'
		    },
		    m_main: {
		       	src: 'src/mobile/js/main.js',
		       	dest: 'src/mobile/js/main.min.js'
		    },
		    m_map: {
		       	src: 'src/mobile/js/map.js',
		       	dest: 'src/mobile/js/map.min.js'
		    }
		},
		sass: {
			dist: {
				files: {
					'src/css/style.css' : 'src/css/sass/style.scss'
				}
			}
		},
		imagemin: {
		    dynamic: {
		        files: [{
		            expand: true,
		            cwd: 'src/img/',
		            src: ['**/*.{png,jpg,gif}'],
		            dest: 'src/img/'
		        },
		        {
		            expand: true,
		            cwd: 'src/img/mobile/',
		            src: ['**/*.{png,jpg,gif}'],
		            dest: 'src/img/mobile/'
		        }]
		    }
		},
		ftpush: {
		  build: {
		    auth: {
		      host:'31.170.165.128',
		      //host:'ftp.webdone.xyz',
		      port:21,
		      authKey:"key2"		      
		    },
		    src: 'src/',
		    dest: 'stolewnica/',
		    exclusions: [
		      '**/.DS_Store',
		      '**/Thumbs.db',
		      './node_modules/**',
		      './node_modules',
		      './.gitignore',
		      '.editorconfig',
		      '.ftppass',
		      '.grunt',
		      './.git/**',
		      './.git',
		      '.jshintrc',
		      'package.json',
		      'for_terminal',
		      'Gruntfile.js'
		    ]
		  }
		},
		autoprefixer: {
			options: {
				browsers: ['ie >= 8','last 10 versions','> 0.1%','ff >= 20','Android > 1']
			},
            dist: {
                files: [
	                {
	                    'src/css/full.css': 'src/css/full.css'
	                },
	                {
	                    'src/css/style.css': 'src/css/style.css'
	                },
	                {
	                    'src/css/head.css': 'src/css/head.css'
	                },
	                {
	                    'src/css/libs.css': 'src/css/libs.css'
	                },
	                {
	                    'src/css/scripts.css': 'src/css/scripts.css'
	                },
	                {
	                    'src/css/media.css': 'src/css/media.css'
	                },
	                {
	                    'src/mobile/css/full.css': 'src/mobile/css/full.css'
	                },
	                {
	                    'src/mobile/css/style.css': 'src/mobile/css/style.css'
	                },
	                {
	                    'src/mobile/css/head.css': 'src/mobile/css/head.css'
	                },
	                {
	                    'src/mobile/css/libs.css': 'src/mobile/css/libs.css'
	                },
	                {
	                    'src/mobile/css/scripts.css': 'src/mobile/css/scripts.css'
	                },
	                {
	                    'src/mobile/css/media.css': 'src/mobile/css/media.css'
	                }
                ]
            }
        },
        watch: {
		    scripts: {
		        files: ['src/js/libs/*.js','src/js/libs/*.js','src/js/jquery/*.js','src/mobile/js/libs/*.js','src/mobile/js/libs/*.js','src/mobile/js/jquery/*.js'],
		        tasks: ['concat', 'uglify'],
		        options: {
		            spawn: false,
		        },
		    },
			sass: {
				files: 'src/css/sass/*.scss',
				tasks: ['sass']
			},
		    css: {
			    files: ['src/css/libs/*.css','src/mobile/css/libs/*.css'],
			    tasks: ['concat','cssmin'],
			    options: {
			        spawn: false,
			    }
			}//,
			//'ftp-deploy': {
			//	files: ['js/*.js','css/*.css','ajax/*.*','*.html','!**/node_modules/**'],
			//	tasks: ['ftp-deploy'],
			//	options: {
			//        spawn: false,
			//    },
			//},
			//ftpush: {
			//	files: ['img/*.*','!**/node_modules/**'],
			//	tasks: ['ftpush'],
			//	options: {
			//        spawn: false,
			//    },
			//}
		}

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-ftpush');
    grunt.loadNpmTasks('grunt-ftp-deploy');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('fin', ['autoprefixer','concat','uglify','cssmin','imagemin']);
    grunt.registerTask('ftp', ['ftp-deploy','ftpush']);
    grunt.registerTask('css-long', ['css_longhand']);

};
