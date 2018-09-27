const webpack = require('webpack')

module.exports = {
  loading: {
    color: '#563d7c',
    height: '3px'
  },
  mode: 'spa',
  head: {
    title: 'nuxt-client',
    meta: [
      {
        charset: 'utf-8'
      }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }, {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  /*
  all router have middleware if config there
  */
  // router: {
  //   middleware: ['authenticated']
  // },
  modules: [
    '@nuxtjs/axios', 'bootstrap-vue/nuxt'
  ],
  build: {
    vendor: [
      'jquery', 'bootstrap', 'vuetify'
    ],
    plugins: [new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery'})],
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({enforce: 'pre', test: /\.(js|vue)$/, loader: 'eslint-loader', exclude: /(node_modules)/})
      }
    }
  },
  // include bootstrap css
  css: [
    'bootstrap/dist/css/bootstrap.css'
  ],
  // include bootstrap js on startup
  plugins: ['~plugins/bootstrap.js', '~plugins/vuetify.js']
}
