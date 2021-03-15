module.exports = {
    publicPath: '/',
    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "@/assets/styles/_variables.scss";'
            }
        }
    }
}
