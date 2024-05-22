<script setup lang="ts">
import { useHeroStore } from '../../store/heroStore';

const heroStore = useHeroStore();

</script>

<template>
  <div v-if="heroStore.showModal"
    class="modal-container fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 mx-auto w-full"
    @keydown.esc="heroStore.setShowModal(false)" @click.self="heroStore.setShowModal(false)">
    <div >
      <slot />
    </div>

  </div>
</template>

<style scoped>
.modal-container {
  pointer-events: auto;
}
</style>