const webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                exclude: /(node_modules|bower_components)/,
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['env']
                        }
                    }
                ]
            }
        ]
    },
    output: {
        filename: "VuexRBTree.js",
        library: "VuexRBTree",
        libraryTarget: "umd",
        path: __dirname + "/dist"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};