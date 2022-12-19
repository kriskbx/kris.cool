<template>
    <div class="app">
        <Header>
            <template v-slot:headline>
                Hej, I'm Kris.
            </template>

            <p class="header__intro">
                » I’m a Senior Fullstack Developer.<br />
              I mainly use PHP and the Laravel framework for backend work, but I also speak TypeScript and really enjoy frontend stuff with Vue.js. I have a lot of DevOps experience as well and cannot shut up about improving workflows and processes. Writing great documentation as well as clean & maintainable code is my passion. I love driving technical design as well as providing sponsorship and mentorship to level up my team. I also really dig test-driven development and pair programming. «
            </p>

            <a rel="me" href="https://bumscode.com/@kris" style="display:none;"></a>

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
                    label: 'Mastodon',
                    url: 'https://bumscode.com/@kris'
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
