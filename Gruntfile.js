module.exports = function(grunt) {
    grunt.initConfig({
        jasmine: {
            src: 'src/*.js',
            options: {
                specs: 'test/*.js',
                keepRunner: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('default', ['jasmine']);
};
