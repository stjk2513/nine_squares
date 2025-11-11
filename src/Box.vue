<script setup lang="ts">
import { ref } from "vue";
import { colors } from "./colors.ts";

const WHITE = "#ffffff";

const background = ref(WHITE);

function toggleColor() {
  background.value = colors[Math.floor(Math.random() * colors.length)]!;
}
</script>

<template>
  <div
    data-test="box"
    class="box"
    :style="{ background }"
    @click="toggleColor()"
  >
    hello
  </div>
</template>

<style scoped>
.box {
  user-select: none;
}
.box:hover {
  cursor: pointer;
}
</style>
