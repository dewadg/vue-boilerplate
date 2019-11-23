const merge = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const common = require('./base.config')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin()
  ]
})
