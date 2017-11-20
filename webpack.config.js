var Path = require('path');
var entryPoints = ['./src/index.js'];
module.exports = {
    entry : entryPoints,
    output:{
        path: Path.resolve('build/js'),
        filename: 'bundle.js',
        publicPath : '/assets/js/'
    },
    devtool: 'source-map',
    devServer:{
        contentBase : 'public',
        inline : true,
        hot : true
    },

    module:{
         loaders: [ {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
			
         query: {
            presets: ['es2015', 'react']
         }
      }]
    }

}
