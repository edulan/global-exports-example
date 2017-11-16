const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: require.resolve('./lib/utils.js'),
        use: 'exports-loader?foo=foo,bar=bar'
      }
    ]
  }
}
