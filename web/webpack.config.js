const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appDirectory = path.resolve(__dirname, '../');

// const compileNodeModules = [
//   'react-navigation',
//   '@react-navigation',
//   'react-native-uncompiled',
//   'react-native-web',
//   '@mobily/stacks',
// ].map(moduleName => path.resolve(appDirectory, `node_modules/${moduleName}`));

const babelLoaderConfiguration = {
  test: /\.m?[t|j]sx?$/,
  exclude: [/node_modules/],
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: [['react-native-web']],
    },
  },
};
const svgLoaderConfiguration = {
  test: /\.svg$/,
  loader: '@svgr/webpack',
};
const imageLoaderConfiguration = {
  test: /\.(gif|svg|jpg|png)$/,
  loader: 'file-loader',
};

module.exports = {
  entry: {
    // load any web API polyfills
    // path.resolve(appDirectory, 'polyfills-web.js'),
    // your web-specific entry file
    app: path.join(__dirname, 'index.web.js'),
  },
  // configures where the build ends up
  output: {
    path: path.resolve(appDirectory, 'dist'),
    publicPath: '/',
    filename: 'rnw.bundle.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js'],
    alias: {
      'react-native$': 'react-native-web',
    },
  },
  module: {
    rules: [
      babelLoaderConfiguration,
      //   tsLoaderConfiguration,
      imageLoaderConfiguration,
      svgLoaderConfiguration,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      // See: <https://github.com/necolas/react-native-web/issues/349>
      __DEV__: JSON.stringify(true),
    }),
  ],
};
