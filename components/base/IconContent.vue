<template>
  <div
    class="style"
    :class="[bgClass]"
    :style="{ width: `${width}`, height: `${height}` }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  bgClass: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "40px",
  },
  height: {
    type: String,
    default: "40px",
  },
});
</script>

<style scoped>
.style {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
</style>
