<template>
    <footer class="footer">
        <Background :align-top="true" :modifiers="['green']" :padding-top="320">
            <Inner :modifiers="['narrow']">
                <h2 class="footer__title">About</h2>
                <g-image src="~/assets/images/about.jpg" width="860"/>
                <div class="footer__about">
                    <p>Hej again. 👋 My name is Kris and I’m the guy with that cool domain name.</p>
                    <p>In 2012 I got my Bachelor of Engineering degree in Mediaproduction & Mediatechnology. Since
                        then I worked for an international Garden Exhibition as Graphic Designer, for several
                        clients & agencies as Freelance Full Stack Developer and at <a href="https://ueber.io" target="_blank">überdosis</a>
                        as Backend Developer and DevOps Engineer. Since 2021 I’m at <a href="https://iu.de" target="_blank">IU - International University of applied sciences</a>
                        as Senior Full Stack Developer.</p>
                    <p>Out of pure curiosity I studied "Transport Systems: Aeronautics and space engineering" for a couple of semesters besides my day job. I love STEM stuff and wanted to learn something new.</p>
                    <p>I also make cool short films and videos. <a href="https://vimeo.com/kriskbx" target="_blank">At
                        first as freelancer</a> for clients & agencies but now
                        it’s more of a hobby.</p>
                    <p>From time to time I also take freelance jobs for design, videoproduction or coding. I also got a large network of nice and skilled fellow freelancers and agencies, so hit me up if you got something.</p>    
                    <p>Personally I like birds, science, hiking & being outdoors, longboards as well as Indie/Hardcore-Punk music.</p>
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
