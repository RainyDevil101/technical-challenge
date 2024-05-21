<script setup lang="ts">
import { computed } from 'vue';
import { Section } from '../global';
import { PowerStatsChart, SubTitleHero } from '.';
import { Powerstats } from '../../interfaces/hero.interface';

const props = defineProps<{
  title: string;
  powerstats: Powerstats;
}>();

const { title, powerstats } = props;

const chartData = computed(() => ({
  labels: Object.keys(powerstats),
  datasets: [
    {
      label: 'Power Stats',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      data: Object.values(powerstats).map(Number),
    },
  ],
}));
</script>

<template>
  <Section>
    <SubTitleHero>{{ title }}</SubTitleHero>
    <div class="flex flex-col items-start my-5 w-full content-center">
      <PowerStatsChart :type="'bar'" :data="chartData" />
    </div>
  </Section>
</template>
