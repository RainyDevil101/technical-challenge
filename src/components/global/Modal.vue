<script setup lang="ts">
import { watch } from 'vue';
import { useHeroStore } from '../../store/heroStore';

const heroStore = useHeroStore();

const disableBodyScroll = () => {
  document.body.style.overflow = 'hidden';
};

const enableBodyScroll = () => {
  document.body.style.overflow = '';
};

watch(() => heroStore.showModal, (newVal) => {
  if (newVal) {
    disableBodyScroll();
  } else {
    enableBodyScroll();
  }
});

</script>

<template>
  <div v-if="heroStore.showModal"
    class="modal-container fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-2"
    @click.self="heroStore.setShowModal(false)">
    <div class="w-96 md:w-[576px] bg-neutral max-h-[800px] overflow-auto rounded p-2" @keydown.esc="heroStore.setShowModal(false)">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.modal-container {
  pointer-events: auto;
}
</style>