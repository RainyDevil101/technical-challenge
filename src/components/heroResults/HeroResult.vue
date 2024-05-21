<script setup lang="ts">

import { HeroResultCard } from '.';
import { useHeroStore } from '../../store/heroStore';

const heroStore = useHeroStore();

const onSearchHero = (value: string) => {
  console.log(value);
  
  if (!value || value.length === 0) return;
  heroStore.setHero(value);
};

</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 my-5">
    <HeroResultCard v-for="hero in heroStore.getHerosState" :key="hero.id" :hero="hero"
      @click="onSearchHero(hero.id);" onclick="my_modal_2.showModal()" />
  </div>
</template>