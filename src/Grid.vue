<script setup lang="ts">
import Box from "./Box.vue";
</script>

<template>
  <div data-test="grid" class="grid">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
