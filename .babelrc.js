const path = require("path");

const presets = {
	presets: [
		["@babel/preset-react"],
		[
			"@babel/preset-env",
			{
				targets: {
					node: "current",
				},
			},
		],
	],
};
const plugins = { plugins: ["@babel/plugin-proposal-class-properties"] };

if (process.env.NODE_ENV === "development") {
	plugins.plugins.push(
		[
			"file-loader",
			{
				name: "[name].[ext]",
				extensions: ["png", "jpg", "jpeg", "gif", "svg"],
				publicPath: "/img",
				outputPath: null,
			},
			"img-file-loader-plugin",
		]
		// [
		// 	"file-loader",
		// 	{
		// 		name: "[name].[ext]",
		// 		extensions: ["css", "scss"],
		// 		publicPath: "/css",
		// 		outputPath: null,
		// 	},
		// 	"css-file-loader-plugin",
		// ]
	);
}

const addConfigs = { ignore: ["./src/public/"] };

module.exports = { ...plugins, ...presets, ...addConfigs };
