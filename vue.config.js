const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        path.resolve(__dirname, 'src/styles/abstracts/variables.styl'),
        path.resolve(__dirname, 'src/styles/abstracts/mixins.styl'),
        path.resolve(__dirname, 'src/styles/abstracts/placeholders.styl')
      ]
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://public-api.wordpress.com/rest/v1.1/sites',
        changeOrigin: true,
        pathRewrite: {
          'api': '/'
        }
      }
    }
  },
  pwa: {
    workboxOptions: {
      runtimeCaching: [{
        urlPattern: /api/,
        handler: 'networkFirst'
      }]
    }
  }
}