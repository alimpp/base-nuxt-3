<template>
  <div class="base-modal-content fade-animation" v-if="isOpen">
    <div
      class="content flex flex-column py-50"
      :class="{
        'bg-danger': type == 'error',
        'bg-success': type == 'success',
      }"
      :style="{ width: width, height: height, borderRadius: borderRadius }"
    >
      <div class="flex flex-column align-center justify-center w-100">
        <IconsDanger v-if="type == 'error'" />
        <IconsSuccess v-if="type == 'success'" />
        <span
          class="f-s-12 f-w-500 pt-10"
          :class="{ 'color-primary-white': type == 'error' }"
          >{{ title }}</span
        >
        <span
          class="f-s-12 f-w-500"
          :class="{ 'color-primary-white': type == 'error' }"
          >{{ text }}</span
        >
      </div>
      <div
        class="w-100 flex align-center justify-center mt-20"
        v-if="hasFooter"
      >
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: "380px",
  },
  height: {
    type: String,
    default: "auto",
  },
  borderRadius: {
    type: String,
    default: "10px",
  },
  title: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  hasFooter: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["close"]);
</script>

<style scoped>
.base-modal-content {
  width: 100%;
  height: 100dvh;
  position: fixed;
  z-index: 1000;
  background: #00000096;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  overflow: hidden;
}

.custom-border-radius {
  border-radius: 0 0 50px 50px;
}

.border-top {
  border-top: 1px solid #d1cdcd53;
}

.border-bottom {
  border-bottom: 1px solid #d1cdcd53;
}

.success-type {
  background: #7ded1c81;
}
.error-type {
  background: #de484898;
}
</style>
