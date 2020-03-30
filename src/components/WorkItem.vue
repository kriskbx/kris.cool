<template>
    <div class="work__item" :class="color ? `work__item--${color}` : ''">
        <h3 class="work__item-title">
            <a :href="url" target="_blank">{{ title }} <span class="work__item-title-icon"><External/></span></a>
        </h3>

        <p class="work__item-excerpt">{{ excerpt }}</p>

        <transition-expand>
            <p class="work__item-content" v-html="content" v-if="open"></p>
        </transition-expand>

        <div class="work__item-actions" v-if="content.trim()">
            <button type="button" class="work__item-button"
                    @click="open = !open">
                {{ button }}
            </button>
        </div>

        <ul class="work__item-tags">
            <li class="work__item-tag" v-for="tag in tags" :key="tag">
                {{ tag }}
            </li>
        </ul>
    </div>
</template>

<script>
    import External from "@/assets/images/external.svg"
    import TransitionExpand from "@/components/TransitionExpand"

    export default {
        components: {
            TransitionExpand, External,
        },

        props: ['title', 'excerpt', 'tags', 'content', 'url', 'url_label', 'color'],

        data: () => ({
            open: false,
        }),

        computed: {
            button() {
                return this.open ? 'Read less' : 'Read more'
            },

            urlLabel() {
                return this.url_label ? this.url_label : this.url
            }
        },
    }
</script>

<style lang="scss">
    .work__item {
        background: $colorWhite;
        box-shadow: $shadow;
        color: $colorBlack;
        font-size: 1.125rem;
        line-height: 1.8;
        margin-bottom: 6rem;
        padding: 2rem;

        $this: &;

        @media screen and (min-width: $breakpoint) {
            padding: 5.5rem 7rem 4rem 7rem;
        }

        &:hover {
            #{$this}-title-icon {
                opacity: 1;
            }
        }

        &-content {
            backface-visibility: hidden;
            perspective: 1000px;
            transform: translateZ(0);
            will-change: height;
        }

        &-title {
            color: $colorGrey;
            margin-bottom: 2rem;

            svg path {
                fill: $colorGrey;
            }

            &-icon {
                bottom: .05rem;
                display: inline-block;
                margin-left: .8rem;
                opacity: 0;
                position: relative;
                transition: opacity 500ms $ease;
            }

            a {
                text-decoration: none;
                opacity: 1;
                transition: opacity 300ms $ease;

                &:hover {
                    opacity: .6;
                }
            }
        }

        &-excerpt {
            &:after {
                content: '…';
            }
        }

        &-actions {
            display: flex;
            justify-content: space-between;
            margin-top: -.5rem;
            flex-wrap: wrap;
        }

        &-button {
            background: transparent;
            border: none;
            font-family: $fontSecondary;
            font-size: 1.125rem;
            font-weight: $fontWeighMedium;
            margin-right: 1rem;
            opacity: 1;
            padding: .2rem 0;
            transition: opacity 500ms $ease;

            &:hover {
                opacity: .7;
            }
        }

        &-tags {
            margin: 2rem -1rem 0 -1rem;
            list-style: none;
            padding: 0;
            display: flex;
            font-family: $fontSecondary;
            text-transform: uppercase;
            font-size: 0.8125rem;
            font-weight: $fontWeighMedium;
            color: rgba($colorBlack, .25);
            letter-spacing: .1em;
            flex-wrap: wrap;
        }

        &-tag {
            margin: 0 1rem;

            &:before {
                content: '#';
            }
        }

        &--blue #{$this}-title {
            color: $colorBlue;

            svg path {
                fill: $colorBlue;
            }
        }

        &--yellow #{$this}-title {
            color: $colorYellow;

            svg path {
                fill: $colorYellow;
            }
        }

        &--green #{$this}-title {
            color: $colorGreen;

            svg path {
                fill: $colorGreen;
            }
        }

        &--red #{$this}-title {
            color: $colorRed;

            svg path {
                fill: $colorRed;
            }
        }
    }
</style>
