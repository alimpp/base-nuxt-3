<template>
  <div class="w-100 h-60-px custom-style flex">
    <div class="w-50 flex px-10 align-center">
      <BaseAvatar width="45px" height="45px" :character="user.fristChar" :avatar="user.avatarUrl" />
      <div class="flex flex-column justify-center px-5">
        <span class="f-s-14 f-w-600">{{ user.fullname }}</span>
        <span class="f-s-12 f-w-500 color-gray">{{ user.email }}</span>
      </div>
    </div>
    <div class="w-50 flex justify-end px-10 align-center">
     <BaseIcon @click="navigateTo('/dashboard/settings')" class="cursor-pointer mx-5" name="solar:settings-outline" width="25" height="25" />
     <BaseIcon class="cursor-pointer" width="30" name="gg:menu-right" @click="chnageSideMenuState" />
    </div>
  </div>
</template>

<script setup>
const userStore = useUserStore()

const user = computed(() => {
  return userStore.getUser()
})

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
