<script setup lang="ts">
import { ref } from 'vue';
import { Button, InputText } from '../global';

const emit = defineEmits<{ (e: 'searchHero', value: string): void }>();

const text = ref('');

// Emit the searchHero event with the current text value
const onSearchHero = () => {
  if (!text.value) return;
  if (text.value.length === 0) return;
  console.log(text.value.length, 1);
  //emit('searchHero', text.value);
};

</script>

<template>
  <div class="flex gap-2">
    <InputText v-model="text" />
    <Button @click="onSearchHero">Buscar</Button>
  </div>
</template>