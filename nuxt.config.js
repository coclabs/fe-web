require("dotenv").config();

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "peddeal",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js",
      body: true
    },

    {
      src: "http://code.jquery.com/jquery-1.7.1.min.js",
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
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // Load a Node.js module directly (here it's a Sass file)

    // CSS file in the project
    "@/assets/css/main.css"
    // SCSS file in the project
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/vuetify", "@nuxtjs/dotenv"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "cookie-universal-nuxt",
    "@ncviewer/ace-editor-module",
    "@nuxtjs/markdownit"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    hotMiddleware: {
      client: {
        autoConnect: false
      }
    }
  },

  // Environmental variable
  env: {
    // baseUrl: "https://api.pdm-dev.me"
    baseUrl: "http://127.0.0.1:8000"
  }
};
