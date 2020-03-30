<template>
    <Page>
        <template v-slot:headline>
            Error: 404
        </template>
        <Inner>
            <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/3o7WTE9vEh086AqDQs" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
        </Inner>
    </Page>
</template>

<script>
    import Page from '@/layouts/Page'
    import Inner from "@/components/Inner"

    export default {
        components: {
            Page, Inner,
        },

        metaInfo: {
            title: 'Not found!'
        },
    }
</script>
