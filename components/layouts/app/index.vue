<template>
  <div class="flex w-100 h-100-dvh bg-app-dark overflow-hidden">
    <div class="flex">
      <LayoutsAppSidebar
        @chnageSideMenuState="chnageSideMenuState"
        class="slid-right-animation-5"
        :isOpen="sideMenuState"
      />
    </div>
    <div class="w-100 flex flex-column">
      <LayoutsAppHeader @chnageSideMenuState="chnageSideMenuState" />
      <div class="px-10 py-10 router-content">
        <NuxtPage />
      </div>
    </div>
    <Loader v-show="loaderState" mode="upToDown" />
  </div>
</template>

<script setup>
const sideMenuState = ref(false);
const chnageSideMenuState = () => {
  sideMenuState.value = !sideMenuState.value;
};
</script>

<style scoped>
.router-content {
  height: 90dvh;
  overflow-y: scroll;
}
.router-content::-webkit-scrollbar {
  width: 0px;
  border: 0px solid #fff;
  border-radius: 5px;
}

.router-content::-webkit-scrollbar-track {
  border-radius: 5px;
  background: #eeeeee;
}

.router-content::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #cac8c8;
}
</style>
