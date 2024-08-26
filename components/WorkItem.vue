<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  path: string;
}>();
</script>

<template>
  <Card is="li">
    <template #title>{{ props.title }}</template>
    <template #default>
      <p class="mb-3 text-stone-900">
        {{ props.description }}
      </p>
      <NuxtLink
        :to="props.path"
        class="font-headline font-medium underline hover:no-underline"
      >
        Read more
      </NuxtLink>
    </template>
  </Card>
</template>
