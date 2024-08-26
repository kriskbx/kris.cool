<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tag?: string;
    compact?: boolean;
  }>(),
  {
    tag: 'div',
    compact: false,
  },
);
</script>

<template>
  <component :is="props.tag" class="bg-white p-6 shadow-lg">
    <h3
      class="mb-4 font-headline text-stone-700"
      :class="props.compact ? 'text-lg' : 'text-2xl'"
    >
      <slot name="title" />
    </h3>
    <slot />
  </component>
</template>
