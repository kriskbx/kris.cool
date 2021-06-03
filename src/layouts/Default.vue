<template>
    <div class="app">
        <Header>
            <template v-slot:headline>
                Hej, I'm Kris.
            </template>

            <p class="header__intro">
                » I’m a backend developer, currently working at
                <a href="https://www.iu.de" target="_blank">IU - International University of applied sciences</a>.
                I mostly use PHP and the Laravel framework for backend development as well as Vue.js or Alpine.js
                for frontend work. I’m a huge workflow automation nerd and can’t shut up about Docker, Continuos
                Integration and all DevSecOps related topics. Also I’m really into Open Source and publish many
                things I make on GitHub. «
            </p>

            <Navigation :links="[
                {
                    label: 'GitHub',
                    url: 'https://github.com/kriskbx'
                },
                {
                    label: 'Vimeo',
                    url: 'https://vimeo.com/kriskbx'
                },
                {
                    label: 'Twitter',
                    url: 'https://twitter.com/kriskbx'
                },
                {
                    label: 'Mail',
                    url: 'mailto:m@kris.cool'
                },
            ]"/>
        </Header>

        <div class="default__content">
            <slot/>
        </div>

        <About/>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Navigation from '@/components/Navigation'
    import About from '@/components/About'

    export default {
        components: {
            Header, Navigation, About,
        },
    }
</script>

<style lang="scss" src="./fonts.scss"></style>
<style lang="scss" src="./base.scss"></style>
