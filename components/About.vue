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
          I've been working professionally in this industry since I've got my
          bachelor of engineering degree in 2012, mainly as a freelance web and
          software developer. In 2018 I decided to give up being a freelancer,
          because I really enjoy working with other amazing people in a team. At
          first I helped
          <a href="https://tiptap.dev">überdosis (which is now Tiptap)</a>
          building software for clients and created & maintained open source
          projects. In 2021 I joined
          <a href="https://www.iu-group.com">IU Groups</a> effort to empower
          everyone with education to grow.
        </p>
        <p>
          After work, I
          <a href="https://vimeo.com/kriskbx">film & edit short videos</a>, go
          cycling, hiking, spend time outdoors and tinker with my home network &
          server. I like birds, longboards, science, open-source, self-hosting
          and Indie/HC-Punk music.
        </p>
        <p>
          From time to time I also take freelance jobs for design,
          video-production or coding. I also got a large network of nice and
          skilled fellow freelancers and agencies, so hit me up if you got
          something.
        </p>
      </div>
    </Container>
  </section>
</template>
