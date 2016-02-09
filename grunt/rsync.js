module.exports = {

    default: {
        options: {
            src: '<%= config.src %>',
            dest: process.env.CI_DEPLOYMENT_PATH,
            host: process.env.CI_DEPLOYMENT_URI,
            delete: false,
            recursive: true,
            exclude: [".git", "node_modules"],
            args: ["--verbose --progress"]
        }
    },

    test: {
        options: {
            src: '<%= config.src %>',
            dest: process.env.CI_DEV_DEPLOYMENT_PATH,
            host: process.env.CI_DEV_DEPLOYMENT_URI,
            delete: false,
            recursive: true,
            exclude: [".git", "node_modules"],
            args: ["--verbose --progress"]
        }
    }

};