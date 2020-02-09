const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack demo",
        })
    ],
    devServer: {
        stats: "errors-only",
        overlay: true,
        historyApiFallback: true,
        // If you use Docker, Vagrant or Cloud9, set
        // host: "0.0.0.0";
        //
        // 0.0.0.0 is available to all network devices
        // unlike default `localhost`.
        host: process.env.HOST, // Defaults to `localhost`
        port: process.env.PORT, // Defaults to 8080
    },
};
