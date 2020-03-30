<template>
    <header class="header">
        <Background>
            <Inner :modifiers="['narrow']">
                <div class="header__logo">
                    <Logo/>
                </div>
                <h1 class="header__title">
                    <slot name="headline"/>
                </h1>
                <slot/>
            </Inner>
        </Background>
    </header>
</template>

<script>
    import Background from "@/components/Background"
    import Inner from "@/components/Inner"
    import Logo from "@/assets/images/logo.svg"

    export default {
        components: {
            Background, Logo, Inner,
        },
    }
</script>

<style lang="scss">
    .header {
        color: $colorWhite;

        &__logo {
            margin-top: 6rem;
            margin-bottom: 6rem;
            text-align: center;

            @media screen and (min-width: $breakpoint) {
                margin-top: 0;
            }
        }

        &__title {
            margin-bottom: 4rem;
            text-align: center;
        }

        &__intro {
            font-size: 1.2rem;
            line-height: 1.8;
            margin-bottom: 5rem;

            @media screen and (min-width: $breakpoint) {
                font-size: 1.4375rem;
            }
        }

        & .links {
            color: rgba($colorWhite, .4);
        }
    }
</style>
