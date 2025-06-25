<template>
  <div class="w-100 h-60-px custom-style flex">
    <div class="w-50 flex flex-column justify-center px-10 align-start">
      <IconsMenu class="cursor-pointer" @click="chnageSideMenuState" />
    </div>
    <div class="w-50 flex flex-column justify-center px-10 align-end">
      <span class="f-s-14 f-w-600 color-primary">AppLication Docs</span>
      <span class="f-s-10 f-w-500 color-gray">Nuxt 3 Base Component</span>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["chnageSideMenuState"]);

const chnageSideMenuState = () => {
  emit("chnageSideMenuState");
};
</script>

<style scoped>
.custom-style {
  box-shadow: 0px 1px 0px 0px #53535320;
}
</style>
