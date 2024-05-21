<script setup lang="ts">
import { ref } from 'vue';
import { Button, InputText } from '../global';

const emit = defineEmits<{ (e: 'searchHero', value: string): void }>();

const text = ref('');
const onSearchHero = () => {
  const data = text.value.trim();
  if (!data) return;
  if (data.length === 0) return;
  emit('searchHero', data);
  text.value = '';
};

const onKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    onSearchHero();
  }
};

</script>

<template>
  <div id="search-input" class="flex gap-2 py-2">
    <InputText @keydown="onKeyDown" v-model="text" />
    <Button @click="onSearchHero">Buscar</Button>
  </div>
</template>