const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //编译模式
    mode: 'development',
    entry: [path.join(__dirname, './src/js/auto-slide-up.js'),
        path.join(__dirname,'./src/js/message.js'),
        path.join(__dirname,'./src/js/smoothly-navigation.js'),
        path.join(__dirname,'./src/js/sticky-topbar.js'),
    ],
    output: {
        path: path.join(__dirname,'./dist'), //打包到文件
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src','Resume-demo.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                include: path.join(__dirname,'src'),
                exclude: /node_modules/
            },
            {
                test: /\.css$/, use: ['style-loader','css-loader']
            },
            {
                test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']
            },
            {test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: 'url-loader'}
        ]
    },
    devServer:{
        port: 3000,
        contentBase: path.join(__dirname,'dist')
    }
}



















