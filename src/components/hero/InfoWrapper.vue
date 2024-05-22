<script setup lang="ts">

const prop = defineProps<{
  title: string
  text: string
}>();

const { title, text } = prop;

</script>

<template>
  <p class="my-1">
    <span class="font-medium mr-1">
      {{ title }}:
    </span>
    {{ text }}
  </p>
</template>