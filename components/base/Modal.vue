<template>
  <div class="base-modal-content fade-animation" v-if="isOpen">
    <div
      class="content bg-primary-white flex flex-column"
      :style="{ width: width, height: height, borderRadius: borderRadius }"
    >
      <div class="flex w-100 py-8 border-bottom" v-if="hasHeader">
        <div class="w-100 flex align-center px-5">
          <slot name="icon"></slot>
          <div class="flex flex-column justify-center px-8">
            <span class="f-s-13 f-w-500 color-primary">{{ title }}</span>
            <span class="f-s-12 f-w-400 color-gray">{{ text }}</span>
          </div>
        </div>
        <div class="flex align-center px-4">
          <IconsClose class="cursor-pointer" @click="emit('close')" />
        </div>
      </div>
      <div class="flex justify-end w-100 py-8" v-else>
        <div class="flex  align-center px-4">
          <IconsClose class="cursor-pointer" @click="emit('close')" />
        </div>
      </div>
      <div class="flex w-100 py-10">
        <div class="w-100 flex align-center px-5">
          <slot name="content"></slot>
        </div>
      </div>
      <div class="flex w-100 py-5 border-top" v-if="hasFooter">
        <div class="w-100 flex align-center px-5">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
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
  hasHeader: {
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

.border-top {
  border-top: 1px solid #d1cdcd53;
}

.border-bottom {
  border-bottom: 1px solid #d1cdcd53;
}
</style>
