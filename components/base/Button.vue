<template>
  <button
    class="base-button"
    :style="{ width: width, height: height }"
    :class="[bg, color, border]"
    :disabled="disabled || loading"
  >
    <span :class="[fontSize, fontWeight, color]" class="px-2"> {{ name }}</span>
    <BaseIcon name="line-md:loading-loop" v-if="loading" />
    <BaseIcon
      :name="icon"
      v-if="!loading && icon"
      :width="iconWidth"
      :height="iconHeight"
    />
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
  fontSize: {
    type: String,
    default: "f-s-12",
  },
  fontWeight: {
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
  icon: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "90px",
  },
  height: {
    type: String,
    default: "35px",
  },
  iconWidth: {
    type: String,
    default: "18",
  },
  iconHeight: {
    type: String,
    default: "18",
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
