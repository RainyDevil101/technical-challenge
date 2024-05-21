<script setup lang="ts">
import { ref } from 'vue';
import { Container } from './components/global/index.ts'
import { LoadingView } from './views';
import HeroLayout from './layout/HeroLayout.vue';

const isHero = ref<boolean>(true);

</script>

<template>
  <Container>
    <div class="flex flex-col content-center items-center">
      <LoadingView v-if="!isHero" />
      <HeroLayout v-else />
    </div>
  </Container>
</template>