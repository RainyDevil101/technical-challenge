<script setup lang="ts">
import { Section } from '../components/global'
import { Default, HeroCard, SearchHero } from '../components/hero';
import { Hero } from '../interfaces';

defineProps<{
  hero: Hero | null;
}>();

</script>

<template>

  <Section>
    <SearchHero />
  </Section>
  <section>
    <HeroCard v-if="hero" :hero="hero" />
    <Default v-else />
  </section>

</template>