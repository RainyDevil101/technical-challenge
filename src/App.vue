<script setup lang="ts">
import HeroLayout from './layout/HeroLayout.vue';
import { Container } from './components/global/index.ts'
import { LoadingView } from './views';
import { HeroView } from './views';
import { useHero } from './composable';
import { useHeroStore } from './store/heroStore';

const store = useHeroStore();

store.count++


</script>

<template>
  <Container>
    <LoadingView v-if="store.isLoading" />
    <HeroLayout v-else>
      <HeroView :hero="store.hero" />
    </HeroLayout>
  </Container>
</template>