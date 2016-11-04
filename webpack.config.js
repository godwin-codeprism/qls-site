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
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.html$/,
                loader: "html"
            },
            //{ test: /\.(png|jpg|eot|woff2|woff|svg|ttf)$/, loader: "url-loader?limit=100000" },
            { test: /\.(png|jpg|eot|woff2|woff|svg|ttf)$/, loader: "file?name=[path][name].[ext]&context=./src/assests" }
        ]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        )
    ]
}