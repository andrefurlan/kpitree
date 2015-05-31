var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: [
      "webpack/hot/only-dev-server",
      "./js/app.js"
    ],
    output: {
        path: path.join(__dirname, "/build/"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js?$/, loaders: ["react-hot", "babel"], exclude: /node_modules/},
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            // {test: /\.css$/, loader: "style-loader!css-loader"}
            // Extract css files
            {
                test: /\.css$/, exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("style.css")
    ]

};
