<template>
    <button
      class="base-button"
      :style="{ width: width, height: height }"
      :class="[bg, color, border]"
      :disabled="disabled || loading"
    >
    <span :class="[fontSize, fontWeight, color]" class="px-2" v-if="name"> {{ name }}</span>
    <BaseIcon name="line-md:loading-loop" v-if="loading" />
    <BaseIcon
      :name="icon"
      v-if="!loading && icon"
      :size="iconSize"
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
  iconSize: {
    type: String,
    default: "20px",
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

.base-button:disabled,
.disabled-button {
  cursor: not-allowed;
  opacity: 0.7;
}
</style>
