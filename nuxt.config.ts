// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass','@mdi/font/css/materialdesignicons.min.css',],
    build: {
      transpile: ['vuetify'],
    },

    app:{
      head:{
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        title: 'My Nuxt3 App',
        meta:[
           // <meta name="description" content="My amazing site">        
           { name: 'description', content: 'My amazing site.' }
        ],
      }
    },
  
    loading:{
      color:'bg-green-500',
      height:'10px',
      throttle:0
    },
})
