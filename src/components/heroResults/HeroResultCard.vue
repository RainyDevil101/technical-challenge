<script setup lang="ts">
import { Hero } from '../../interfaces/hero.interface';

const props = defineProps<{
  hero: Hero
}>();

const emit = defineEmits<{
  (e: 'set-hero', value: string): void;
}>();

const { hero } = props;

const { name, image, id } = hero;

</script>

<template>
  <div
  @click="emit('set-hero', id)"
    class="relative w-48 bg-base-100 shadow-xl image-full  transition-all ease-in-out transform hover:scale-105 cursor-pointer">
    <figure><img :src="`${image.url}`" :alt="name" /></figure>
    <div class="absolute inset-0 w-full h-full flex items-center justify-center">
      <h2 class="font-bold text-3xl text-white text-center">{{ name }}</h2>
    </div>
  </div>
</template>