var path = require('path');
var LessPluginCleanCSS = require('less-plugin-clean-css');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');

var config = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		path.resolve(__dirname, './app/entry.js')
	],
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx$/,
			loader: 'jsx-loader?harmony'
		}, {
			test: /\.jsx|js$/,
			loaders: ['babel?presets[]=es2015,presets[]=react,presets[]=stage-0']
		}, {
			test: /\.less$/,
			loader: 'style-loader!css-loader!less-loader'
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}]
	},
	lessLoader: {
		lessPlugins: [
			new LessPluginCleanCSS({
				advanced: true
			}), new LessPluginAutoPrefix({
				browsers: ["last 2 versions"]
			})
		]
	}
}

module.exports = config;