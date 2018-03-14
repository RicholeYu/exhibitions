const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './index.jsx'),
    output: {
        path: path.resolve(__dirname, './'),
        publicPath:"/",
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        rules: [{
            loader: 'babel-loader',

            // 在node_modules的文件不被babel编译
            exclude: [
                path.resolve(__dirname, 'node_modules'),
            ],

            // src的文件会被babel编译
            include:[
                path.resolve(__dirname, 'src'),
            ],

            // 只有jsx或者js文件会被编译
            test: /\.js|jsx$/,
            query:{

                // babel支持把以下格式编译成 ES5语法
                presets:[
                    'es2015', // ES6
                    'stage-0', // ES7
                    'react' // JSX
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
            test:/\.(png|jpg|gif|jpeg)$/,
            loader:'url-loader'
        }
    ]
    }
};