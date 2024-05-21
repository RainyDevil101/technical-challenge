<script setup lang="ts">
import { useHeroStore } from '../../store/heroStore';

const heroStore = useHeroStore();

const getError = heroStore.getHasErrorState;

</script>

<template>
  <div class="w-full flex items-center justify-center">
    <p class="text-red-500 text-4xl">Error: {{ getError }} 😞</p>

  </div>
</template>