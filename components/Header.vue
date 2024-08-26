<script setup lang="ts">
import Toucan from '~/assets/images/toucan.svg';
</script>

<template>
  <header
    class="flex min-h-screen flex-col justify-between bg-stone-900 py-8 text-white sm:p-16 md:p-32"
  >
    <div class="flex justify-end px-4" aria-hidden="true">
      <Toucan class="w-12 sm:w-16" />
    </div>
    <Container tag="section">
      <h1 class="mb-12 mt-8 font-headline text-4xl font-light sm:text-5xl">
        Hey, I'm Kris.
      </h1>
      <p class="mb-12 text-lg leading-relaxed sm:text-xl sm:leading-9">
        » I’m a Senior+ Software Engineer. My main technical expertise is in
        TypeScript, JavaScript and PHP ecosystems, as well as DevOps and
        infrastructure topics. I’m passionate about writing high-quality
        documentation and creating reliable, accessible, clean & maintainable
        code. I deeply care about people and love driving technical design &
        strategy as well as providing sponsorship and mentorship to level up my
        team. I also really dig test-driven development and pair programming. «
      </p>
    </Container>
    <Container>
      <ul
        class="flex flex-wrap gap-4 font-headline font-medium opacity-50 sm:gap-16"
      >
        <li>
          <a href="https://github.com/kriskbx" class="hover:underline">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://vimeo.com/kriskbx" class="hover:underline">
            Vimeo
          </a>
        </li>
        <li>
          <a href="https://bumscode.com/@kris" class="hover:underline">
            Mastodon
          </a>
        </li>
        <li>
          <a href="mailto:m@kris.cool" class="hover:underline"> Mail </a>
        </li>
      </ul>
    </Container>
  </header>
  <main></main>
</template>
