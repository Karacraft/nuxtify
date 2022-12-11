# Nuxt 3 & Vuetify
[Nuxt3](https://v3.nuxtjs.org/)
[Vuetify](https://next.vuetifyjs.com/en/)  
[Nuxt & Vuetify](https://codybontecou.com/how-to-use-vuetify-with-nuxt-3.html)  

Install Nuxt3

    npx nux init nuxtify
    npm add vuetify@next sass

Create plugins folder in root.
Add vuetify.js in plugins folder.  

    import { createVuetify } from 'vuetify'
    import * as components from 'vuetify/components'
    import * as directives from 'vuetify/directives'

    export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
    })

    nuxtApp.vueApp.use(vuetify)
    })
[Document](https://next.vuetifyjs.com/en/getting-started/installation/#usage)  

Configure nuxt.config.ts

    // nuxt.config.ts
    import { defineNuxtConfig } from 'nuxt'

    // https://v3.nuxtjs.org/api/configuration/nuxt.config
    export default defineNuxtConfig({
        css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css',],
        build: {
            transpile: ['vuetify'],
        },
        vite: {
            define: {
            'process.env.DEBUG': false,
            },
        },
    })

    Build & Enjoy


### [XATA CLI & CLIENT](https://xata.io)  
    
    npm i --location=global @xata.io/cli
    npm install @xata.io/client