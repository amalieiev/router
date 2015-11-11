module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var commonLibs = [
        'jquery',
        'underscore',
        'backbone',
        'text',
        'layout/BaseView'
    ];

    grunt.initConfig({
        requirejs: {
            compile: {
                options: {
                    appDir: 'src',
                    mainConfigFile: 'src/js/require.config.js',
                    dir: 'build',
                    removeCombined: true,
                    modules: [
                        {
                            name: 'app',
                            include: commonLibs
                        },
                        {
                            name: 'login/LoginView',
                            exclude: commonLibs
                        },
                        {
                            name: 'repository/RepositoryView',
                            exclude: commonLibs
                        }
                    ],
                    //workaround for optimization process of jquery library
                    fileExclusionRegExp: /intro\.js|outro\.js/
                }
            }
        }
    });

    grunt.registerTask('build', ['requirejs']);
};