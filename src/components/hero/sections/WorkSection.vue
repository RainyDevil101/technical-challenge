<script setup lang="ts">
import { Work } from '../../../interfaces/hero.interface';
import { InfoSection } from '../index';

const props = defineProps<{
  work: Work,
  title: string
}>();

const { work, title } = props;
const info = [
  { label: 'Occupation', value: work.occupation },
  { label: 'Base', value: work.base }
];
</script>

<template>
  <InfoSection :title="title" :info="info" />
</template>