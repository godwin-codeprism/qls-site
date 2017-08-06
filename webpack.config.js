var path = require("path");
var webpack = require("webpack");

module.exports = {
    resolve: {
        modulesDirectories: ["node_modules", "bower_components"]
    },
    entry: './src/scripts/imports.js',
    output: {
        path: path.join(__dirname, 'src'),
        filename: 'godwin.js',
    },
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: "file-loader?name=[path][name].[ext]&context=./src/assests"
            },
            {
                test: /\.(html)$/,
                loader: "html"
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?(\-alpha\.[0-9])?$/,
                loader: "file-loader?name=[path][name].[ext]&context=./src/assests"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?(\-alpha\.[0-9])?$/,
                loader: "file-loader?name=[path][name].[ext]&context=./src/assests"
            }
        ]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        )
    ]
}