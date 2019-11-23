const merge = require('webpack-merge')
const base = require('./base.config')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 8503,
    stats: 'errors-only'
  }
})
