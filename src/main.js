// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, {router, head, isClient}) {
    head.meta.push({
        name: 'description',
        content: 'Hey, I\'m Kris: a Berlin based fullstack web developer.',
    })

    head.meta.push({
        property: 'og:title',
        content: 'kris.cool',
    })

    head.meta.push({
        property: 'og:url',
        content: 'https://kris.cool',
    })

    head.meta.push({
        property: 'og:image',
        content: 'https://kris.cool/opengraph.png',
    })

    head.meta.push({
        property: 'og:description',
        content: 'Hey, I\'m Kris: a Berlin based fullstack web developer.',
    })

    head.meta.push({
        name: 'twitter:card',
        content: 'summary',
    })

    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
}
