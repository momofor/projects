var webpack = require("webpack");
var path = require("path");
var srcPath = path.resolve(__dirname, "client");
var distPath = path.resolve(__dirname, "public");
var config = {
	devtool: "source-map",
	entry: [srcPath + "/app.js"],
	output: {
		path: distPath,
		publicPath: "/",
		filename: "bundle.js",
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				include: /client/,
				loader: "babel-loader",
				query: {
					presets: ["es2015"],
				},
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				include: /client/,
				loader: "babel-loader",
				query: {
					presets: ["es2015", "stage-2", "react"],
				},
			},
		],
	},
	devServer: {
		hot: true,
		port: 4500,
	},
};

module.exports = config;

