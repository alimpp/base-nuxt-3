<template>
  <button
    class="base-button"
    :style="{ width: width, height: height, border: border }"
    :class="[bg, color]"
    :disabled="disabled || loading"
  >
    <div class="flex align-center">
      <slot name="iconRight"></slot>
      <span :class="[fontSize, fontWight, color]"> {{ name }}</span>
      <IconsSpinner class="mx-2" v-if="loading" :color="loadingColor" />
      <slot name="iconLeft"></slot>
    </div>
  </button>
</template>

<script setup>
const props = defineProps({
  bg: {
    type: String,
    default: "bg-primary",
  },
  color: {
    type: String,
    default: "color-primary-white",
  },
  loadingColor: {
    type: String,
    default: "#fff",
  },
  fontSize: {
    type: String,
    default: "f-s-12",
  },
  fontWight: {
    type: String,
    default: "f-w-500",
  },
  name: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  border: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "70px",
  },
  height: {
    type: String,
    default: "35px",
  },
  padding: {
    type: String,
    default: "10px 10px",
  },
});
</script>

<style scoped>
.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  border: none;
}
</style>
