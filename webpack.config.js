const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.join( __dirname + '/dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.js', '.jsx', '.css']
    },

    devServer:{
        port: 4000
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                use:['babel-loader'],
                exclude: /node_modules/
            },
            { 
                test: /\.css$/, 
                loader: [
                  MiniCSSExtractPlugin.loader,
                  "css-loader"
                ]
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCSSExtractPlugin()
    ]
}