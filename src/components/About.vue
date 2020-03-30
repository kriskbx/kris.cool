<template>
    <footer class="footer">
        <Background :align-top="true" :modifiers="['green']" :padding-top="320">
            <Inner :modifiers="['narrow']">
                <h2 class="footer__title">About</h2>
                <g-image src="~/assets/images/about.jpg" width="860"/>
                <div class="footer__about">
                    <p>Hej again. 👋 My name is Kris and I’m the guy with that cool domain name.</p>
                    <p>In 2012 I got my Bachelor of Engineering degree in Mediaproduction & Mediatechnology. Since
                        then I worked for an international Garden Exhibition as Graphic Designer and for several
                        clients & agencies as Freelance Developer. Since 2019 I’m at <a href="https://ueber.io"
                                                                                        target="_blank">überdosis</a>
                        as Senior Fullstack
                        Developer and DevOps Engineer.</p>
                    <p>I also make cool shortfilms and videos. <a href="https://vimeo.com/kriskbx" target="_blank">At
                        first as freelancer</a> for clients & agencies but now
                        it’s more of a hobby.</p>
                    <p>Personally I like birds, sloths & anteaters, hiking & beeing outdoors, longboards and
                        Indie/Punk music. I believe in a better world and try to take responsibility by living plant
                        based and as sustainable as I can.</p>
                </div>

                <Navigation :links="links"/>
            </Inner>
        </Background>
    </footer>
</template>

<script>
    import Background from "@/components/Background"
    import Inner from "@/components/Inner"
    import Navigation from "@/components/Navigation"

    export default {
        components: {
            Background, Inner, Navigation,
        },

        data: () => ({
            links: [
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
            ],
        }),
    }
</script>

<style lang="scss">
    .footer {
        color: $colorBlack;

        &__title {
            text-align: center;
            margin: 0 0 5rem;
            color: $colorGrey;
        }

        &__about {
            color: $colorBlack;
            font-size: 1.25rem;
            margin: 5rem 0 10rem;
        }
    }
</style>
