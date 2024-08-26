<script setup lang="ts">
import type { WorkItem } from '~/types/WorkItem';

const { data: workItems } = await useAsyncData('work', () =>
  queryContent<WorkItem>('/work').find(),
);
</script>

<template>
  <Section>
    <template #headline
      ><span aria-hidden="true">🚀</span> selected work</template
    >
    <template #default>
      <ul class="grid gap-4 sm:grid-cols-2">
        <WorkItem
          v-for="workItem in workItems"
          :key="workItem._id"
          :title="workItem.title"
          :description="workItem.description"
          :path="workItem._path"
        />
      </ul>
    </template>
  </Section>
</template>
