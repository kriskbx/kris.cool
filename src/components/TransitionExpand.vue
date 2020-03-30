<script>
    /*
     * Borrowed from: https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/
     * Too lazy to write it myself 🤷‍
     */
    export default {
        name: 'TransitionExpand',
        functional: true,
        render(createElement, context) {
            const data = {
                props: {
                    name: 'expand',
                },
                on: {
                    afterEnter(element) {
                        element.style.height = 'auto';
                    },
                    enter(element) {
                        const width = getComputedStyle(element).width;

                        element.style.width = width;
                        element.style.position = 'absolute';
                        element.style.visibility = 'hidden';
                        element.style.height = 'auto';

                        const height = getComputedStyle(element).height;

                        element.style.width = null;
                        element.style.position = null;
                        element.style.visibility = null;
                        element.style.height = 0;

                        // Force repaint to make sure the
                        // animation is triggered correctly.
                        getComputedStyle(element).height;

                        requestAnimationFrame(() => {
                            element.style.height = height;
                        });
                    },
                    leave(element) {
                        const height = getComputedStyle(element).height;

                        element.style.height = height;

                        // Force repaint to make sure the
                        // animation is triggered correctly.
                        getComputedStyle(element).height;

                        requestAnimationFrame(() => {
                            element.style.height = 0;
                        });
                    },
                }
            };

            return createElement('transition', data, context.children);
        },
    };
</script>

<style lang="scss">
    .expand-enter-active,
    .expand-leave-active {
        transition: height 500ms $ease;
        overflow: hidden;
    }

    .expand-enter,
    .expand-leave-to {
        height: 0;
    }
</style>
