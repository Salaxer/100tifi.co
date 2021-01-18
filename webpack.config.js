const path = require('path'); //Nos permite acceder a donde estámos en las carpetas. Ya sea en local o en la nube.
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Archivo necesario para trabajar con HTML.
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve:{
        extensions:['.js'],
    },
    module:{
        rules:[
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename:'./index.html',
            }
        ),
        new CopyWebpackPlugin({
            patterns: [{ from: './src/styles/styles.css',
            to: '' }],
          })
    ]
}