const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './index.js'),
    output: {
        path: path.resolve(__dirname, './'),
        publicPath: "/",
        filename: "bundle.js"
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.json']
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            exclude: [
                path.resolve(__dirname, 'node_modules'),
            ],

            include:[
                path.resolve(__dirname, './'),
            ],

            test: /\.js$/,
            query:{

                // babel支持把以下格式编译成 ES5语法
                presets:[
                    'es2015', // ES6
                    'stage-0', // ES7
                ]
            }
        },
        {
            test: /\.css|.less$/,
            use: [
                {
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }
            ]
        },
        {
            // 图片加载器
            test:/\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader:'url-loader'
        }
    ]
    }
};