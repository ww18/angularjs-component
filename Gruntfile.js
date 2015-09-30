/**
 * Created by phoebe on 9/29/15.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            app:{
                files: {
                    'app/css/style.css' : 'app/**/*.scss'
                }
            }
        },
        compass:{
            app:{
                options:{
                    sassDir: "app",
                    cssDir: "app/css"
                }
            }
        },
        //sass: {
        //    app: {
        //        files: [{
        //            expand: true,
        //            cwd: 'app',
        //            src: ['**/*.scss'],
        //            dest: 'app/css',
        //            ext: '.css'
        //        }]
        //    }
        //},

        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.registerTask('default',['watch']);
}