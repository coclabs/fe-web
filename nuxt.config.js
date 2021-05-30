
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'peddeal',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js', body: true },

    {
      src:"http://code.jquery.com/jquery-1.7.1.min.js",
      type: "text/javascript"
    },
    {
      src:
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
      type: "text/javascript"
    },
    {
      src:
        "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
      type: "text/javascript"
    }
  ]
  ,

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: [
  // ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [


  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',

    // With options
    ['@nuxtjs/vuetify', { /* module options */ }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sentry', '@nuxtjs/axios',  'cookie-universal-nuxt',   '@ncviewer/ace-editor-module',  '@nuxtjs/markdownit'
  ],
  // sentry: {
  //   dsn: 'https://5174625547fc4c69a3b49892fb893f25@o525207.ingest.sentry.io/5778797',
  //   environment: 'develop',
  //   tracesSampleRate: 1.0,
  //   vueOptions: {
  //     tracing: true,
  //     tracingOptions: {
  //       hooks: [ 'mount', 'update' ],
  //       timeout: 2000,
  //       trackComponents: true
  //     }
  //   },
  //   browserOptions: {}
  // },
  css: [
    // Load a Node.js module directly (here it's a Sass file)

    // CSS file in the project
    '@/assets/css/main.css',
    // SCSS file in the project

  ],



  axios: {
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // devMiddleware: {
    //   headers: {
    //     'Cache-Control': 'no-store',
    //     Vary: '*'
    //   }
    // },
    // extend(config) {
    //       const hmrIndex = config.plugins.findIndex(p => p.constructor.name === 'HotModuleReplacementPlugin')
    //       config.plugins.splice(hmrIndex, 1)
    //   }
  },
  telemetry: false,
}

