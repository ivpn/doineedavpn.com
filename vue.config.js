module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/doineedavpn.com/' : '/',
    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "@/assets/styles/_variables.scss";'
            }
        }
    }
}
