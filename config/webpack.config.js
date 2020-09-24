const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

const resolve = (p) => path.resolve(__dirname, "..", p);

module.exports = {
    mode: "development",
    entry: ["webpack-hot-middleware/client", "./src/main.jsx"],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/",
    },
    resolve: {
        extensions: [".jsx", ".js"],
        alias: {
            "@": resolve("src"),
        },
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                loader: "babel-loader",
                include: resolve("src"),
            },
            {
                test: /\.s?css$/,
                loader: ["style-loader"],
            },
            {
                test: /\.s?css$/,
                loader: "css-loader",
                exclude: [/node_modules/],
                options: {
                    importLoaders: 2,
                    modules: {
                        mode: 'local',
                        localIdentName: "[name]__[local]___[hash:base64:5]"
                    },
                },
            },
            {
                test: /\.css$/,
                loader: "css-loader",
                exclude: [/src/],
            },
            {
                test: /\.scss$/,
                loader: "sass-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
