<template>
  <div class="color" :style="{ width: width, height: height }"></div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "1px",
  },
});
</script>

<style scoped>
.color {
  background: #6a69692a;
}
</style>
