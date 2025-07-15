<template>
    <div class="flex flex-column">
      <BaseBreadCrumbs />
      <div class="flex flex-column mt-15">
        <span class="f-s-16 f-w-500">Theme</span>
        <div class="flex mt-15">
          <span :class="{'bg-primary' : appTheme == 'dark'}" class="flex align-center f-s-12 f-w-600 px-20 py-10 border-rounded cursor-pointer" @click="setTheme('dark')">
            <BaseIcon
                width="18px"
                name="fa6-solid:hand-point-right"
                v-if="appTheme == 'dark'"
                class="mx-5"
            />
            <BaseIcon class="mx-5" width="18px" name="mdi:hand-back-right" v-else />
            Dark
          </span>
          <span :class="{'bg-primary' : appTheme == 'light'}" class="flex align-center f-s-12 f-w-600 px-20 py-10 border-rounded cursor-pointer mx-10" @click="setTheme('light')">
            <BaseIcon
                width="18px"
                name="fa6-solid:hand-point-right"
                v-if="appTheme == 'light'"
                class="mx-5"
            />
            <BaseIcon class="mx-5" width="18px" name="mdi:hand-back-right" v-else />
            Light  
          </span>
        </div>
        <BaseDivider class="mt-15" />
        <div @click="navigateTo('/dashboard/settings/profile')" class="flex align-center mt-15 cursor-pointer">
            <BaseIcon name="oui:user" />
            <span class="f-s-14 f-w-500 px-5">Profile</span>
        </div>
        <BaseDivider class="mt-15" />
      </div>
    </div>
</template>

<script setup>
const applicationStore = useApplicationStore()

const setTheme = (theme) => {
    applicationStore.setTheme(theme)
}

const appTheme = computed(() => {
    return applicationStore._state.theme
})

definePageMeta({
  middleware: "auth",
});
</script>