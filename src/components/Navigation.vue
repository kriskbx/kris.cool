<template>
    <ul class="links">
        <li class="link-item" v-for="link in links" :key="link.label">
            <a :href="link.url" target="_blank" v-if="link.url">{{ link.label }}</a>
            <g-link v-else-if="link.page" :to="link.page">{{ link.label }}</g-link>
        </li>
    </ul>
</template>

<script>
    export default {
        props: ['links'],
    }
</script>

<style lang="scss">
    .links {
        color: currentColor;
        display: flex;
        font-family: $fontSecondary;
        font-size: 1rem;
        justify-content: center;
        list-style: none;
        padding: 0;
        font-weight: $fontWeighMedium;
        flex-wrap: wrap;
    }

    .link-item {
        margin: .5rem .8rem;

        a {
            opacity: .5;
            padding: .3rem;
            text-decoration: none;
            transition: opacity 300ms $ease;

            &:hover {
                opacity: 1;
            }
        }
    }
</style>
