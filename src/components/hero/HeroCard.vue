<script setup lang="ts">
import { Hero } from '../../interfaces';
import { Section } from '../global';
import { BiographySection, AppearanceSection, WorkSection, ConnectionSection } from './';
import PowerStarsSection from './PowerStarsSection.vue';

const props = defineProps<{
  hero: Hero;
}>();

const { hero } = props;
const { name, biography, id, image, appearance, work, connections, powerstats } = hero;

</script>

<template>

  <div class="text-white modal-box mx-auto">
    <Section>
      <img :src="image.url" :alt="name" class="h-96 object-cover rounded-sm mx-auto" />
    </Section>
    <Section>
      <h2 class="text-3xl text-center font-bold">{{ id }} - {{ name }}</h2>

      <!-- Biography -->

      <BiographySection title="Biography" :biography="biography" />

      <!--  Apareance -->

      <AppearanceSection title="Appearance" :appearance="appearance" />

      <!-- Work -->

      <WorkSection title="Work" :work="work" />

      <!-- Connections -->

      <ConnectionSection title="Connections" :connections="connections" />

      <!-- PowerStats -->

      <PowerStarsSection v-if="powerstats.intelligence !== 'null'" title="Power Stats" :powerstats="powerstats" />

    </Section>
  </div>

</template>