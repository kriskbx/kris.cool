<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-stone-200 font-body font-smoothed',
  },
});
</script>

<template>
  <slot />
</template>

<style>
html,
body {
  @apply scroll-smooth;
}
</style>
