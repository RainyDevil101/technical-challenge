<script setup lang="ts">
import { Section } from '../components/global'
import Modal from '../components/global/Modal.vue';
import { Error, HeroCard } from '../components/hero';
import { IndexText } from '../components/home';
import { useHeroStore } from '../store/heroStore';

const heroStore = useHeroStore();

console.log(heroStore.getHerosState.length !== 0);

</script>

<template>

  <Section>
    <Modal>
      <HeroCard v-if="heroStore.getHeroState" :hero="heroStore.getHeroState" :key="heroStore.getHeroState.id" />
    </Modal>
    <Error v-if="heroStore.getHasErrorState" />
    <IndexText
      v-if="heroStore.getHeroState === null && heroStore.getHerosState.length === 0 && heroStore.getShowModalState === false && heroStore.getHasErrorState === null" />
  </Section>

</template>