<script setup lang="ts">
import { Section } from '../components/global'
import { Default, HeroCard } from '../components/hero';
import { useHeroStore } from '../store/heroStore';

const heroStore = useHeroStore();

</script>

<template>

  <Section>
    <dialog id="my_modal_2" class="modal">

      <HeroCard v-if="heroStore.getHeroState" :hero="heroStore.getHeroState" :key="heroStore.getHeroState.id" />
    </dialog>

    <Default v-if="heroStore.getHasErrorState" />
  </Section>

</template>