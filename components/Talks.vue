<script setup lang="ts">
import type { TalkItem } from '~/types/TalkItem';

const { data: talkItems } = await useAsyncData('talks', () =>
  queryContent<TalkItem>('/talks').find(),
);
</script>

<template>
  <Section>
    <template #headline><span aria-hidden="true">📣</span> talks</template>
    <template #default>
      <ul class="grid gap-4">
        <TalkItem
          v-for="talkItem in talkItems"
          :key="talkItem._id"
          :title="talkItem.title"
          :description="talkItem.description"
          :conference="talkItem.conference"
        />
      </ul>
    </template>
  </Section>
</template>
