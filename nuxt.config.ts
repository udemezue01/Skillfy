// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  // ssr: false, // Cloudflare Pages is best suited for static site generation
  // target: 'static',
  // app: {
  //   baseURL: '/', // Adjust if deploying to a subdirectory
  // },
  // generate: {
  //   fallback: '404.html', // Ensure fallback for static hosting
  // },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@pinia/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
