<script setup lang="ts">
useHead({
  title: 'kris.cool',
  meta: [
    {
      name: 'description',
      content: "Hej, I'm Kris, a Senior+ Software Engineer!",
    },
  ],
});
</script>

<template>
  <Header />
  <main class="pt-8 sm:pt-16">
    <Work />
    <Talks />
    <About />
  </main>
  <Footer class="bg-stone-900 text-white" />
</template>
