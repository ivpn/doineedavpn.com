// var PrerenderSpaPlugin = require('prerender-spa-plugin');
// var Renderer = PrerenderSpaPlugin.PuppeteerRenderer;
// var path = require('path');

module.exports = {
    // configureWebpack: () => {
    //     if (process.env.NODE_ENV !== 'production') return;
     
    //     return {
    //         plugins: [
    //             new PrerenderSpaPlugin({
    //                 staticDir: path.resolve(__dirname, './dist'),
    //                 routes: [ '/', '/outcomes'],
    //                 renderer: new Renderer({
    //                     inject: { prerendered: true },
    //                     headless: true,
    //                     renderAfterDocumentEvent: 'renderEvent'
    //                 }),
    //                 postProcessHtml(context) {
    //                     // Get rid of all scripts, vuejs adds them on his own
    //                     return context.html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/i, '');
    //                 }
    //             }),
    //         ]
    //     };
    // },
    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "@/assets/styles/_variables.scss";'
            }
        }
    }
}
