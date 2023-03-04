<template>
    <Page>
        <template v-slot:headline>
            Error: 404
        </template>
        <Inner>
            <g-image src="~/assets/images/404.gif" class="gif"/>
            <p class="credits">
              &copy; by <a href="https://www.jecamartinez.com/" target="_blank">Jeca Martinez</a>
            </p>
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

<style lang="scss">
  .credits {
    font-size: .875rem;
    color: #747474;
  }

  .gif {
    width: 100%;
    height: auto;
  }
</style>
