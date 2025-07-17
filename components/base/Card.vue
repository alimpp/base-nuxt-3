<template>
  <div
    class="border-rounded base-card"
    :class="[
      {
        'base-card-dark': appTheme == 'dark',
        'base-card-light': appTheme == 'light',
      },
      px,
      py,
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup>
const applicationStore = useApplicationStore();
const appTheme = computed(() => {
  return applicationStore._state.theme;
});

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
  /* box-shadow: 3px 2px 1px #7d7be515; */
  overflow: hidden;
}
</style>
