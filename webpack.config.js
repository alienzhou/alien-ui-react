var path = require('path');

var config = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		path.resolve('d:/project/alien-ui-react', './app/entry.js')
	],
	output: {
		path: path.resolve('d:/project/alien-ui-react', './build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx$/,
			loader: 'jsx-loader?harmony'
		}, {
			test: /\.jsx|js$/,
			loaders: ['babel?presets[]=es2015,presets[]=react']
		}]
	}
}

module.exports = config;