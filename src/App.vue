<script setup lang="ts">
import HeroLayout from './layout/HeroLayout.vue';
import { Container, Footer } from './components/global/index.ts'
import { LoadingView } from './views';
import { HeroView } from './views';
import { useHeroStore } from './store/heroStore';
import { SearchHero } from './components/hero';
import { HeroResult } from './components/heroResults';

const heroStore = useHeroStore();

const onSearchHero = async (value: string) => {

  await heroStore.fetchHero(value);

  if (heroStore.getHasErrorState) return;


  if (heroStore.getHeroState) {
    heroStore.setShowModal(true);
  }


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
  <Footer />
</template>