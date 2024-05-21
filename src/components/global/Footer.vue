<script setup lang="ts">
import { Container } from '.';


const getYear = () => {
  return new Date().getFullYear();
};

</script>

<template>
  <footer class="bg-base-200 text-white text-center text-xs p-3 fixed bottom-0 left-0 right-0">
    <Container>
      <p>&copy; {{ getYear() }} - All rights reserved - <strong>Alexis Herrera</strong></p>
    </Container>
  </footer>

</template>