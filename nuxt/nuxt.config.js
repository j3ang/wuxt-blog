const axios = require('axios')
const pkg = require('./package')

module.exports = {
  mode: 'universal',
  router: {
    base: '/wuxt-blog/'
  },
  env: {
    WUXT_PORT_BACKEND: process.env.WUXT_PORT_BACKEND || '3080',
    baseUrl: 'http://localhost:' + process.env.WUXT_PORT_BACKEND
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#333' },

  /*
   ** Global CSS
   */

  css: ['@/assets/styles/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/wp-api-docker-connector', ssr: false },
    { src: '~/plugins/highlight' },
    { src: '~/plugins/vueMoment' }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
    '@nuxtjs/pwa',
    '@nuxt/content',
    // Doc: https://bootstrap-vue.org/docs#nuxtjs-module
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    '~/modules/static/',
    [
      '~/modules/wp-api/index',
      {
        endpoint:
          'http://' +
          (process.env.WUXT_WP_CONTAINER
            ? process.env.WUXT_WP_CONTAINER
            : 'wp.wuxt') +
          ':80/wp-json/'
      }
    ]
  ],
  // Use custom scss variables: https://medium.com/@teetlaja/how-to-setup-nuxt-js-and-bootstrap-vue-with-custom-variables-c11639dcb75f
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },
  styleResources: {
    scss: '@/assets/styles/scss/_variables.scss'
  },
  /*
   ** @Nuxt/Content module configuration
   */
  content: {
    markdown: {
      highlighter(rawCode, lang) {
        const wrap = (code, lang) =>
          `<pre><code class="hljs ${lang}">${code}</code></pre>`
        if (!lang) {
          return wrap(highlightjs.highlightAuto(rawCode).value, lang)
        }
        return wrap(highlightjs.highlight(lang, rawCode).value, lang)
      }
    }
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.baseUrl + '/graphql/'
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // transpile: [ 'highlight.js'],
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },

  generate: {
    routes: function() {
      return axios
        .get(
          'http://' +
            (process.env.WUXT_WP_CONTAINER
              ? process.env.WUXT_WP_CONTAINER
              : 'wp.wuxt') +
            ':80/wp-json/wuxt/v1/generate'
        )
        .then(({ data }) => data)
    }
  }
}
