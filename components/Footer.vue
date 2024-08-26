<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    showHome?: boolean;
  }>(),
  {
    showHome: false,
  },
);
</script>

<template>
  <footer class="pb-16">
    <Container>
      <ul
        class="flex justify-center gap-4 font-headline font-medium opacity-50 sm:gap-16"
      >
        <li v-if="props.showHome">
          <NuxtLink to="/" class="hover:underline"> Home </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/data-privacy" class="hover:underline">
            Data Privacy
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="legal-notice" class="hover:underline">
            Legal Notice
          </NuxtLink>
        </li>
      </ul>
    </Container>
  </footer>
</template>
