<script setup lang="ts">
import type { WorkItem } from '~/types/WorkItem';
import ArrowRight from '~/assets/images/arrow-right.svg';

const route = useRoute();
const id = computed(() => route.params.id);
const data = ref<WorkItem>();

watch(
  id,
  async () => {
    data.value = await queryContent<WorkItem>(`/work/${id.value}`).findOne();
  },
  { immediate: true },
);

const { data: workItems } = await useAsyncData('workItems', () =>
  queryContent<WorkItem>(`/work`).find(),
);

const nextWorkItem = computed(() => {
  const currentIndex = workItems.value?.findIndex(
    (workItem) => workItem._id === data.value?._id,
  );
  return workItems.value?.[((currentIndex ?? 0) + 1) % workItems.value?.length];
});
</script>

<template>
  <main>
    <article class="relative">
      <div class="bg-stone-900 pb-8 pt-12 sm:pt-32">
        <Container>
          <h1 class="font-headline text-5xl font-light text-white">
            {{ data?.title }}
          </h1>
        </Container>
      </div>
      <div class="relative">
        <div
          class="absolute left-0 right-0 top-0 z-0 h-[66%] bg-stone-900"
        ></div>
        <Container class="relative z-10">
          <NuxtImg
            v-if="data"
            :alt="data.imageAlt"
            :src="data.image"
            width="592"
            loading="lazy"
            :placeholder="[20]"
            format="webp"
            class="-mx-4 max-w-[calc(100%+32px)] shadow-lg"
          />
        </Container>
      </div>
      <Container class="prose prose-stone mt-10 text-xl leading-relaxed">
        <ContentDoc />
      </Container>
    </article>
    <Container v-if="nextWorkItem" tag="aside" class="my-24 text-right">
      <NuxtLink
        :href="nextWorkItem._path"
        class="inline-flex items-end gap-4 font-headline text-xl underline hover:no-underline"
      >
        <span>Next project:<br />{{ nextWorkItem.title }}</span>
        <ArrowRight class="w-5" />
      </NuxtLink>
    </Container>
  </main>
  <Footer :show-home="true" />
</template>
