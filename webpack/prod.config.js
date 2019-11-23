const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const MinifyPlugin = require("babel-minify-webpack-plugin")
const base = require('./base.config')

module.exports = merge(base, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new MinifyPlugin(),
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 7
    })
  ]
})
