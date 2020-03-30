<template>
    <div class="background" :class="modifierClass">
        <div class="background__before" :style="{ minHeight: `${paddingTop}px`}"></div>
        <div class="background__texture">
            <Background ref="texture"/>
        </div>
        <div :style="{ marginTop: `-${marginTop}px` }"
             class="background__content"
             ref="content">
            <slot/>
        </div>
    </div>
</template>

<script>
    import Background from '@/assets/images/bg.svg'

    const defaultPadding = 96

    export default {
        components: {
            Background,
        },

        props: {
            paddingTop: {
                default: defaultPadding,
            },
            alignTop: {
                default: false,
            },
            modifiers: {
                default: () => ([]),
            },
        },

        computed: {
            modifierClass() {
                return this.modifiers.map(modifier => `background--${modifier}`)
            }
        },

        data: () => ({
            marginTop: 0,
        }),

        beforeMount() {
            window.addEventListener('resize', this.setMargin)
        },

        beforeDestroy() {
            window.removeEventListener('resize', this.setMargin)
        },

        mounted() {
            this.setMargin()
        },

        methods: {
            setMargin() {
                this.marginTop = (this.$refs.texture.getBoundingClientRect().height / (this.alignTop ? 1 : 2))
                    + (this.paddingTop - defaultPadding)
            }
        }
    }
</script>

<style lang="scss">
    .background {
        background: $colorBlue;
        padding-bottom: 3rem;

        &__before {
            background: $colorPink;
        }

        &__texture {
            margin: -2px 0;
            display: flex;

            svg {
                width: 100%;
                height: auto;
            }
        }

        &--green {
            background: $colorGreen;

            svg path {
                &:nth-child(1) {
                    fill: $colorGreen;
                }

                &:nth-child(2) {
                    fill: $colorBlue;
                }
            }
        }
    }
</style>
