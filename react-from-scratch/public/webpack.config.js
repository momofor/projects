"use strict";
var __createBinding =
	(this && this.__createBinding) ||
	(Object.create
		? function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				Object.defineProperty(o, k2, {
					enumerable: true,
					get: function () {
						return m[k];
					},
				});
		  }
		: function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				o[k2] = m[k];
		  });
var __setModuleDefault =
	(this && this.__setModuleDefault) ||
	(Object.create
		? function (o, v) {
				Object.defineProperty(o, "default", {
					enumerable: true,
					value: v,
				});
		  }
		: function (o, v) {
				o["default"] = v;
		  });
var __importStar =
	(this && this.__importStar) ||
	function (mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null)
			for (var k in mod)
				if (
					k !== "default" &&
					Object.prototype.hasOwnProperty.call(mod, k)
				)
					__createBinding(result, mod, k);
		__setModuleDefault(result, mod);
		return result;
	};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const HtmlWebpackPlugin = __importStar(require("html-webpack-plugin"));
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
//# sourceMappingURL=../src/maps/webpack.config.js.map

