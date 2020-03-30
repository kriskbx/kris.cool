<template>
    <div class="inner" :class="modifierClass">
        <slot/>
    </div>
</template>

<script>
    export default {
        props: {
            modifiers: {
                default: () => ([]),
            }
        },

        computed: {
            modifierClass() {
                return this.modifiers.map(modifier => `inner--${modifier}`)
            }
        }
    }
</script>

<style lang="scss">
    .inner {
        margin: 0 auto;
        max-width: 48.875rem;
        padding: 0 1rem;

        &--narrow {
            max-width: 28.875rem;
        }
    }
</style>
