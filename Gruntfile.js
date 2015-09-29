/**
 * Created by phoebe on 9/29/15.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            app:{
                files: {
                    'app/css/style.css' : '**/*.scss'
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
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['compass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.registerTask('default',['sass']);
}