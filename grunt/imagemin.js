module.exports = {

    default: {
        files: [{
            expand: true,
            cwd: '<%= config.src %>',
            src: ['**/*.{png,jpg,gif,svg}'],
            dest: '<%= config.src %>'
        }]
    }

};