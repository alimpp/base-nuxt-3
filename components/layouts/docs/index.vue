<template>
  <div class="flex w-100 h-100-dvh bg-app-dark overflow-hidden">
    <div class="flex">
      <LayoutsDocsSidebar
        @chnageSideMenuState="chnageSideMenuState"
        class="slid-right-animation-5"
        v-if="sideMenuState"
      />
    </div>
    <div class="w-100 flex flex-column">
      <LayoutsDocsHeader @chnageSideMenuState="chnageSideMenuState" />
      <div class="px-10 py-10">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup>
const sideMenuState = ref(true);

const chnageSideMenuState = () => {
  sideMenuState.value = !sideMenuState.value;
};
</script>
