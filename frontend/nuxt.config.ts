// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/strapi'],

  strapi: {
    url: 'http://localhost:1337'
  },
  typescript: {
    strict: false,
    tsConfig: {
      compilerOptions: {
        noImplicitThis: false
      }
    }
  }
})
