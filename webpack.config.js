module.exports = {
    entry: './src/index.js',
    target: 'node',
    mode: 'production',
    optimization: {
        minimize: false
    },
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /(.*.js|.*.graphql)$/,
                loader: 'babel-loader',
                include: __dirname,
                exclude: /node_modules/
            }
        ]
    }
}