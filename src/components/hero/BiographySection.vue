<script setup lang="ts">
import { Biography } from '../../interfaces/hero.interface';
import { InfoSection } from './';

const props = defineProps<{
  biography: Biography,
  title: string
}>();

const { biography, title } = props;
const info = [
  { label: 'Fullname', value: biography['full-name'] },
  { label: 'Alter egos', value: biography['alter-egos'] },
  { label: 'Aliases', value: biography.aliases.join(', ') },
  { label: 'Place of birth', value: biography['place-of-birth'] },
  { label: 'First appearance', value: biography['first-appearance'] },
  { label: 'Publisher', value: biography.publisher },
  { label: 'Alignment', value: biography.alignment }
];
</script>

<template>
  <InfoSection :title="title" :info="info" />
</template>