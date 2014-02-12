/* jshint node: true */
/*!
 * slickGrid's Gruntfile
 */

module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  RegExp.quote = function (string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  };

  var fs = require('fs');
  var path = require('path');

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
              ' * slickGrid v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
              ' * Copyright 2011-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              ' * <%= _.pluck(pkg.licenses, "type") %> (<%= _.pluck(pkg.licenses, "url") %>)\n' +
              ' */\n',
    bannerDocs: '/*!\n' +
              ' * slickGrid Docs (<%= pkg.homepage %>)\n' +
              ' * Copyright 2011-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              ' * <%= _.pluck(pkg.licenses, "type") %> (<%= _.pluck(pkg.licenses, "url") %>)\n' +
              ' * NDA applies, etc.etc.etc.\n' +
              ' */\n',
    jqueryCheck: 'if (typeof jQuery === \'undefined\') { throw new Error(\'slickGrid requires jQuery\') }\n\n',

    // Task configuration.
    clean: {
      dist: 'dist'
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      src: {
        src: ['slick.*.js', 'controls/*.js', 'plugins/*.js']
      },
      /*
      lib: {
        src: 'lib/*.js'
      },
      */
      test: {
        src: 'tests/**/*.js'
      },
      examples: {
        src: 'examples/*.js'
      }
    },

    jscs: {
      options: {
        config: '.jscs.json',
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      src: {
        src: ['slick.*.js', 'controls/*.js', 'plugins/*.js']
      },
      /*
      lib: {
        src: 'lib/*.js'
      },
      */
      test: {
        src: 'tests/**/*.js'
      },
      examples: {
        src: 'examples/*.js'
      }
    },

    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: '*.css',
      examples: 'examples/*.css'
    },

    less: {
      compileCore: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'slick.grid.css.map',
          sourceMapFilename: 'slick.grid.css.map'
        },
        files: {
          'slick.grid.css': 'slick.grid.less'
        }
      },
      compileTheme: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'slick-default-theme.css.map',
          sourceMapFilename: 'slick-default-theme.css.map'
        },
        files: {
          'slick-default-theme.css': 'slick-default-theme.less'
        }
      }
    },

    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: '<%= banner %>'
        },
        files: {
          src: [
            'slick.grid.css',
            'slick-default-theme.css'
          ]
        }
      }
    },

    csscomb: {
      sort: {
        options: {
          config: '.csscomb.json'
        },
        files: {
          'slick.grid.css': 'slick.grid.css',
          'slick-default-theme.css': 'slick-default-theme.css'
        }
      }
    },

    copy: {
      fonts: {
        expand: true,
        src: 'fonts/*',
        dest: 'dist/'
      },
      docs: {
        expand: true,
        cwd: './dist',
        src: [
          '{css,js}/*.min.*',
          'css/*.map',
          'fonts/*'
        ],
        dest: 'docs/dist'
      }
    },

    qunit: {
      options: {
        inject: 'js/tests/unit/phantom.js'
      },
      files: 'tests/**/*.html'
    }
  });


  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  // Lint task.
  grunt.registerTask('lint', ['csslint', 'jshint', 'jscs']);
  
  // Test task.
  grunt.registerTask('test', ['lint', 'qunit']);

  // CSS distribution task.
  grunt.registerTask('dist-css', ['less', 'cssmin', 'csscomb', 'usebanner']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean', 'dist-css']);

  // Default task.
  grunt.registerTask('default', ['test', 'dist']);
};
