module.exports = {

    default: {
        options: {
            src: '<%= config.src %>',
            dest: process.env.CI_DEPLOYMENT_PATH,
            host: process.env.CI_DEPLOYMENT_USER + '@' + process.env.CI_DEPLOYMENT_HOST,
            delete: false,
            recursive: true,
            exclude: [".git", "node_modules"],
            args: ["--verbose --progress"]
        }
    }

};