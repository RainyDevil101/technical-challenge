<script setup lang="ts">
import { InfoWrapper } from '.';
import { Section } from '../global';
import { SubTitleHero } from '.';

const props = defineProps<{
  title: string,
  info: Array<{ label: string, value: string }>
}>();

const { title, info } = props;
</script>

<template>
  <Section>
    <SubTitleHero>{{ title }}</SubTitleHero>
    <div class="flex flex-col items-start my-5 w-full content-center rounded-md p-1">
      <InfoWrapper v-for="item in info" :key="item.label" :title="item.label" :text="item.value" />
    </div>
  </Section>
</template>
