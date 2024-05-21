<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;

  emit('update:modelValue', target.value);
};


</script>


<template>
  <input type="text" :value="modelValue" @input="updateValue" placeholder="Hulk, Ironman, 32, 83..."
    class="input input-bordered input-accent w-full max-w-xs" />
</template>