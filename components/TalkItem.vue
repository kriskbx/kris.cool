<script setup lang="ts">
import CameraSlash from '~/assets/images/camera-slash.svg';

const props = defineProps<{
  title: string;
  description: string;
  conference: string;
  recording?: string;
}>();
</script>

<template>
  <Card is="li" :compact="true">
    <template #title>
      <span class="flex flex-col gap-2 sm:flex-row sm:gap-10">
        <span>{{ props.title }}</span>
        <span
          class="mt-0.5 whitespace-nowrap text-base font-light text-stone-600"
        >
          {{ props.conference }}
        </span>
      </span>
    </template>
    <template #default>
      <p class="mb-3 text-stone-900">
        {{ props.description }}
      </p>
      <p v-if="props.recording"></p>
      <p v-else class="flex items-center gap-2 text-stone-500">
        <CameraSlash class="h-4 fill-current" />
        <span>No public recording available!</span>
      </p>
    </template>
  </Card>
</template>
