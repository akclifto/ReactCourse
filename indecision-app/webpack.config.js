const path = require('path');

// entry point (app.js) -> output final bundle file
module.exports = {
    mode : 'development',
    entry: './src/app.js',
    output : {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    // loader, test rule using ' /.sometext$/ '  is called 'regular expression'
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
};

