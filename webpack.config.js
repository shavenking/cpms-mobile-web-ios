module.exports = {
    entry: ['promise-polyfill', 'whatwg-fetch', './src/index.js'],
    output: {
        filename: './public/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        "react",
                        "es2015",
                        "stage-2"
                    ]
                }
            }
        ]
    }
}
