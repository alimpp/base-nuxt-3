<template>
  <div class="border-rounded base-card w-100" :class="[bgClass, px, py]">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  bgClass: {
    type: String,
    default: "",
  },
  px: {
    type: String,
    default: "px-5",
  },
  py: {
    type: String,
    default: "py-5",
  },
});
</script>

<style scoped>
.base-card {
  box-shadow: 3px 2px 1px #7d7be515;
  overflow: hidden;
}
</style>
