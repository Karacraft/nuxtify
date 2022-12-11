// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],  
  routes:{
    '/api/**' : { cors: true}
  },
  build: {
    transpile: ['vuetify']
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'My Nuxt3 App',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' }
      ]
    }
  },

  // https://nuxt.com/docs/getting-started/deployment#client-side-only-rendering for SSG
  // ssr: false,
  runtimeConfig: {
    appXataApiKey:process.env.XATA_API_KEY,
    public:{
      xataApiKey:process.env.XATA_API_KEY
    }
  }
})
