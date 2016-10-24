module.exports = {
    entry: './app/app.js',
    output: {
        filename: './public/app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}
