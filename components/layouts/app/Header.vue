<template>
  <div class="w-100 h-60-px custom-style flex">
    <div class="w-50 flex px-10 align-center">
      <BaseIcon class="cursor-pointer" width="30" name="gg:menu-right" @click="chnageSideMenuState" />
    </div>
    <div class="w-50 flex justify-end px-10 align-center">
     <BaseIcon class="cursor-pointer" name="line-md:bell-loop" width="25" height="25" />
     <BaseIcon class="cursor-pointer mx-5" name="solar:settings-outline" width="25" height="25" />
     <BaseIcon class="cursor-pointer" name="oui:user" width="25" height="25" />
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
