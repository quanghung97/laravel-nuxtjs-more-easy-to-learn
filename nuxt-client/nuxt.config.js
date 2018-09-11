const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',

    // Or if you have custom bootstrap CSS...
    ['bootstrap-vue/nuxt', { css: false }],
  ],
  axios: {
    baseURL: 'http://localhost/vuejs-laravel-learning/laravel-nuxtjs-more-easy-to-learn/public/api'
  },
  auth: {
  strategies: {
    local: {
      endpoints: {
        login: { url: 'login', method: 'post', propertyName: 'meta.token' },
        user: { url: 'user', method: 'get', propertyName: 'data' },
        logout: {}
      }
    }
  }
  },
  head: {
    title: 'nuxt-client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['jquery', 'bootstrap'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
    },
    css: ['./node_modules/bootstrap/dist/css/bootstrap.css'],
    plugins: ['~plugins/bootstrap.js', '~plugins/mixins/user.js']
}
