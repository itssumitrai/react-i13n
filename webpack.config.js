const { resolve } = require('path');

function generateWebConfig(isModern) {
  return {
    devtool: 'source-map',
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_'
      },
    },
    mode: 'production',
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          loader: 'babel-loader',
          options: isModern ? { envName: 'dist-es' } : { envName: 'dist' },
          exclude: /node_modules/
        },
        { test: /\.css$/, loader: 'style!css' },
        { test: /\.json$/, loader: 'json-loader' }
      ]
    },
    plugins: [],
    output: {
      filename: 'index.js',
      path: resolve(__dirname, isModern ? 'dist-es' : 'dist'),
      library: 'react-i13n',
      libraryTarget: 'umd'
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    stats: {
      colors: true,
      timings: true
    }
  };
}
module.exports = [
  generateWebConfig(false),
  generateWebConfig(true)
];