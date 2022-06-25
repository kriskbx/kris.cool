<template>
    <footer class="footer">
        <Background :align-top="true" :modifiers="['green']" :padding-top="320">
            <Inner :modifiers="['narrow']">
                <h2 class="footer__title">About</h2>
                <g-image src="~/assets/images/about.jpg" width="860"/>
                <div class="footer__about">
                    <p>Hej again. 👋 My name is Kris and I’m the guy with that cool domain name.</p>
                    <p>I've been working professionally in this industry since I've got my bachelor of engineering degree in 2012, mainly as a freelance web and software developer. In 2018 I decided to give up being a freelancer, because I really enjoy working with other amazing people in a team. At first I helped <a href="https://ueber.io" target="_blank">überdosis</a> building software for clients and created & maintained open source projects. In 2021 I joined <a href="https://www.iu-group.com/" target="_blank">IU Group</a> to help them bringing education to everybody.</p>

                    <p>Quick out of context trivia: Out of pure curiosity I studied "aeronautics and space engineering" for a couple of semesters besides my day job. I love STEM stuff and wanted to learn something new.</p>

                  <p>After work, I <a href="https://vimeo.com/kriskbx" target="_blank">film & edit short videos</a>, go cycling, hiking, spend time outdoors and organize small underground concerts. I like birds, longboards, science and <a href="https://open.spotify.com/playlist/3QgzseDIOG1zd2WIA37D5j" target="_blank">Indie</a>/<a href="https://open.spotify.com/playlist/0r8oK6NC6oHy8neqv4oIUo?si=9b09cd4e48914d65" target="_blank">HC-Punk</a> music.</p>

                  <p>From time to time I also take freelance jobs for design, video-production or coding. I also got a large network of nice and skilled fellow freelancers and agencies, so hit me up if you got something.</p>
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
