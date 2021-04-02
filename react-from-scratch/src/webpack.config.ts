import * as path from "path";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

module.exports = {
	entry: "./src/index.tsx",
	target: "web",
	mode: "development",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js",
	},
	resolve: {
		extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: "ts-loader",
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				include: /client/,
				loader: "babel-loader",
			},

			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader",
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public", "index.html"),
		}),
	],
};
