/**
 * Created by Andres on 11/13/2017.
 */
const {resolve} = require('path');
const webpack = require('webpack');
const WebPackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const PORT = process.env.PORT || 3000; // When have I ever actually passed a port for it to run on...

new WebPackDevServer(webpack(config), {
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
    hot: false,
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    stats: {
        assets: false,
        colors: true,
        version: true,
        hash: true,
        timings: true,
        chunks: false,
        chunkModules: false
    }
}).listen(PORT, 'localhost', function(error) {
    if (error) {
        console.log(`ERROR: ${error}`);
    }
    console.log('\x1b[36m%s\x1b[33m&s\x1b[0m', `Development server running at:\nlocalhost: ${PORT}`);
    console.log('\x1b[32m%s\x1b[0m', `\nSomething witty about webpack successfully compiling...`);
});
