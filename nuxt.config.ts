// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  css: ['~/assets/css/main.css'],
  typescript: {
    typeCheck: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/content', 'nuxt-svgo-loader', '@nuxt/image'],
  content: {},
  image: {
    quality: 85,
  },
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
  app: {
    head: {
      meta: [
        {
          name: 'msapplication-TileColor',
          content: '#ffffff',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
        {
          rel: 'mask-icon',
          color: '#404040',
          href: '/safari-pinned-tab.svg',
        },
      ],
    },
  },
});
