<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tag?: string;
  }>(),
  {
    tag: 'div',
  },
);
</script>

<template>
  <component :is="props.tag" class="mx-auto max-w-[560px] px-4">
    <slot />
  </component>
</template>
