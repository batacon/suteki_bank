export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'suteki_bank',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/firebase'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          'nesting-rules': true,
        },
        autoprefixer: {
          grid: true,
        },
      },
    },
  },

  router: {
    middleware: ['authenticated'],
  },

  env: {
    API_KEY: process.env.API_KEY || '',
    AUTH_DOMAIN: process.env.AUTH_DOMAIN || '',
    PROJECT_ID: process.env.PROJECT_ID || '',
    STORAGE_BUCKET: process.env.STORAGE_BUCKET || '',
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID || '',
    APP_ID: process.env.APP_ID || '',
    MEASUREMENT_ID: process.env.MEASUREMENT_ID || '',
  },
}
