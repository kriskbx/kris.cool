<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-stone-200 font-body font-smoothed',
  },
});
</script>

<template>
  <Container
    class="prose prose-stone py-16 text-lg prose-headings:font-headline prose-headings:font-normal"
  >
    <slot />
  </Container>
</template>

<style>
html,
body {
  @apply scroll-smooth;
}
</style>
