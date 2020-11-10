<template>
    <div class="app">
        <Header>
            <template v-slot:headline>
                <slot name="headline"/>
            </template>

            <Navigation :links="[
                {
                    label: 'Home',
                    page: '/',
                },
                {
                    label: 'Legal Notice',
                    page: '/legal-notice',
                },
                {
                    label: 'Privacy Policy',
                    page: '/privacy-policy',
                },
            ]"/>
        </Header>

        <div class="page__content">
            <slot/>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Navigation from '@/components/Navigation'

    export default {
        components: {
            Header, Navigation,
        },
    }
</script>

<style lang="scss" src="./fonts.scss"></style>
<style lang="scss" src="./base.scss"></style>

<style lang="scss">
    .page__content {
        margin-top: 6rem;
        padding-bottom: 8rem;
        color: $colorBlack;
    }
</style>
