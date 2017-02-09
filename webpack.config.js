var LiveReloadPlugin = require('webpack-livereload-plugin');
var webpack = require('webpack')
var path = require('path');
let debug = !process.argv.includes('-p');
module.exports = {
    entry: {
        learning: [path.resolve(__dirname, './modules/learning.js')],
        // zero: [path.resolve(__dirname, './modules/zero.js')],
        // //'./05/index': __dirname + '/modules/choose-word-classroom.js',
        //
        // one:[path.resolve(__dirname, './modules/one.js')],
        // two:[path.resolve(__dirname, './modules/two.js')],
        // three:[path.resolve(__dirname, './modules/three.js')],
        // four:[path.resolve(__dirname, './modules/four.js')],
        //balloon:[path.resolve(__dirname, './modules/eleven.js')],
        // phonicsHardZero: [path.resolve(__dirname, './modules/phonics-hard/zero.js')],
        // phonicsHardOne:[path.resolve(__dirname, './modules/phonics-hard/one.js')],
        // phonicsHardTwo: [path.resolve(__dirname, './modules/phonics-hard/two.js')],
        // phonicsHardThree:[path.resolve(__dirname, './modules/phonics-hard/three.js')],
        // phonicsHardFour: [path.resolve(__dirname, './modules/phonics-hard/four.js')],
        //
        // weatherHard0:[path.resolve(__dirname, './modules/weather/hard/zero.js')],
        // weatherHard1:[path.resolve(__dirname, './modules/weather/hard/one.js')],
        // weatherHard2:[path.resolve(__dirname, './modules/weather/hard/two.js')],
        // weatherHard3:[path.resolve(__dirname, './modules/weather/hard/three.js')],
        // weatherHard4:[path.resolve(__dirname, './modules/weather/hard/four.js')],
        // weatherHard5:[path.resolve(__dirname, './modules/weather/hard/five.js')],
        // weatherHard6:[path.resolve(__dirname, './modules/weather/hard/six.js')],
        // weatherHard7:[path.resolve(__dirname, './modules/weather/hard/seven.js')],
        // weatherHard8:[path.resolve(__dirname, './modules/weather/hard/eight.js')],
        //
        // weatherEasy0:[path.resolve(__dirname, './modules/weather/easy/zero.js')],
        // weatherEasy1:[path.resolve(__dirname, './modules/weather/easy/one.js')],
        // weatherEasy2:[path.resolve(__dirname, './modules/weather/easy/two.js')],
        // weatherEasy3:[path.resolve(__dirname, './modules/weather/easy/three.js')],
        // weatherEasy4:[path.resolve(__dirname, './modules/weather/easy/four.js')],
        // weatherEasy5:[path.resolve(__dirname, './modules/weather/easy/five.js')],
        // weatherEasy6:[path.resolve(__dirname, './modules/weather/easy/six.js')],
        //weatherEasy7:[path.resolve(__dirname, './modules/weather/easy/seven.js')],
        //weatherEasy8:[path.resolve(__dirname, './modules/weather/easy/eight.js')],
        //weatherEasy9:[path.resolve(__dirname, './modules/weather/easy/nine.js')]
    },
    resolve: {
        alias: {}
    },
    output: {
        path: "build/js/",
        filename: '[name].js',
        //publicPath: './build/'
    },
    //output: {
    //    path: path.resolve(__dirname, 'build'),
    //    filename: '[name].js',
    //    publicPath: './build/'
    //},
    module: {
        loaders: [
            {test: require.resolve('jquery'), loader: 'expose?jQuery!expose?$'},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'},
            {
                test: /\.s(a|c)ss$/,
                loaders: ["style", "css", "sass"]
            },
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.json/, loader: "json-loader"},
            {
                test: /\.(jpe?g|png|gif|svg|cur)$/i,
                loaders: [
                    //'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    //'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                    'url-loader'
                ]
            }
            
            //{ test: /bower_components\/.+\.(jsx|js)$/,
            //    loader: 'imports?jQuery=jquery,$=jquery,this=>
            // window'
            //}
        ]
    },
    plugins: [] ? [] : [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                mangle: true,
                sourcemap: false,
                compress: {
                    warnings: false,
                }
            })
        ]
}
