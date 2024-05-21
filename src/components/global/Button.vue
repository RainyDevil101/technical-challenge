<script setup lang="ts">
import { useHeroStore } from '../../store/heroStore';

const heroStore = useHeroStore();


</script>

<template>
  <button type="submit" for="input-search" class="btn btn-accent" :disabled="heroStore.isLoadingState">
    <slot />
  </button>
</template>