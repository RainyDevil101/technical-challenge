<script setup lang="ts">
import HeroLayout from './layout/HeroLayout.vue';
import { Container } from './components/global/index.ts'
import { LoadingView } from './views';
import { HeroView } from './views';
import { useHeroStore } from './store/heroStore';
import { SearchHero } from './components/hero';
import { HeroResult } from './components/heroResults';

const heroStore = useHeroStore();

const { fetchHero } = heroStore;


const onSearchHero = (value: string) => {
  fetchHero(value);

};

</script>

<template>
  <Container>
    <div class="flex justify-center my-5">
      <SearchHero @searchHero="onSearchHero" />
    </div>
    <LoadingView v-if="heroStore.isLoadingState" />
    <HeroLayout v-else>
      <HeroView />
      <HeroResult />
    </HeroLayout>
  </Container>
</template>