<script setup lang="ts">
import { Hero } from '../../interfaces';
import { Section } from '../global';
import { BiographySection, AppearanceSection, WorkSection, ConnectionSection, PowerStatsSection } from './';

const props = defineProps<{
  hero: Hero;
}>();

const { hero } = props;
const { name, biography, id, image, appearance, work, connections, powerstats } = hero;

</script>

<template>

  <div class="text-white w-full">
    <Section>
      <img :src="image.url" :alt="name" class="h-96 object-cover rounded-sm mx-auto" />
    </Section>
    <Section>
      <h2 class="text-base text-center font-bold my-5">{{ id }} - {{ name }}</h2>

      <!-- Biografía -->
      <BiographySection title="Biography" :biography="biography" />

      <!-- Apariencia -->
      <AppearanceSection title="Appearance" :appearance="appearance" />

      <!-- Trabajo -->
      <WorkSection title="Work" :work="work" />

      <!-- Conexiones -->
      <ConnectionSection title="Connections" :connections="connections" />

      <!-- Estadísticas de Poder -->
      <PowerStatsSection v-if="powerstats.intelligence !== 'null'" title="Power Stats" :powerstats="powerstats" />
    </Section>
  </div>

</template>