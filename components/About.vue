<script setup lang="ts"></script>

<template>
  <section class="mt-8 bg-stone-900 py-16 text-white sm:mt-16 sm:py-32">
    <Container tag="section">
      <h2 class="mb-16 font-headline text-4xl font-light text-white">
        <span aria-hidden="true">👀</span> about
      </h2>
      <NuxtImg
        alt="Image of a man wearing glasses, a black shirt with a white print that states 'La Dispute' and a blue/orange cap standing in front of a plant with green leafs"
        src="/images/about.png"
        width="560"
        loading="lazy"
        :placeholder="[20]"
        format="webp"
      />
      <div
        class="prose prose-stone prose-invert mt-12 space-y-6 text-xl leading-relaxed"
      >
        <p>
          Hej again. 👋 My name is Kris and I’m the guy with that cool domain
          name.
        </p>
        <p>
          I've been working professionally in the software industry since
          completing my Bachelor of Engineering degree back in 2012. Over the
          years, I've primarily worked as a freelancer for web and software
          development, as well as at companies like
          <a href="https://tiptap.dev">TipTap</a> (formerly known as überdosis)
          and <a href="https://www.iu-group.com">IU Group</a>. Since 2024, I'm a
          part of <a href="https://sozialhelden.de">Sozialheld:innen e.V.</a>,
          where I help address social issues with technology and fight for a
          more inclusive world.
        </p>
        <p>
          When I'm not working, you can find me
          <a href="https://vimeo.com/kriskbx"
            >filming and editing short videos </a
          >, going for cycling or hiking trips, spending time outdoors, and
          tinkering with my home network and server. I have a passion for birds,
          science, open-source projects, self-hosting, and Indie/HC-Punk music.
        </p>
        <p>
          In addition to my full-time role, I occasionally take on freelance
          jobs in design, video production, or coding. I also have an extensive
          network of skilled freelancers and agencies at my disposal, so feel
          free to reach out if you need someone with expertise in these areas!
        </p>
      </div>
    </Container>
  </section>
</template>
