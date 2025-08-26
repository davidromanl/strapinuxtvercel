// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/strapi'],
  vue: {
    compilerOptions: {
      module: "ESNext",
      moduleResolution: "NodeNext",
      verbatimModuleSyntax: false,
    }
  },
  strapi: {
    url: 'http://localhost:1337'
  },
})
