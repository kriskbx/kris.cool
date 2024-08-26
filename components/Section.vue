<script setup lang="ts"></script>

<template>
  <Container tag="section" class="py-8 sm:py-16">
    <h2 class="mb-16 font-headline text-4xl font-light text-stone-700">
      <slot name="headline" />
    </h2>
    <div>
      <slot />
    </div>
  </Container>
</template>
