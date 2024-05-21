<script setup lang="ts">
import { Appearance } from '../../interfaces/hero.interface';
import { InfoSection } from './';

const props = defineProps<{
  appearance: Appearance,
  title: string
}>();

const { appearance, title } = props;
const info = [
  { label: 'Gender', value: appearance.gender },
  { label: 'Race', value: appearance.race },
  { label: 'Height', value: appearance.height[1] },
  { label: 'Weight', value: appearance.weight[1] },
  { label: 'Eye color', value: appearance['eye-color'] },
  { label: 'Hair color', value: appearance['hair-color'] }
];
</script>

<template>
  <InfoSection :title="title" :info="info" />
</template>
