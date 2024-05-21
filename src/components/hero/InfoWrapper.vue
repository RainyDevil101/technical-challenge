<script setup lang="ts">
import { InfoPresentation } from '.';

const prop = defineProps<{
  title: string
  text: string
}>();

const { title, text } = prop;

</script>

<template>
  <p class="my-1">
    <InfoPresentation>
      {{ title }}:
    </InfoPresentation>
    {{ text }}
  </p>
</template>