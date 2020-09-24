const path = require('path');

// entry point (app.js) -> output final bundle file


module.exports = {
    mode : 'development',
    entry: './src/app.js',
    output : {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
};

