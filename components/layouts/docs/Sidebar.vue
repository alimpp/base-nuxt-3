<template>
  <div class="container flex flex-column custom-style bg-app-dark">
    <div class="w-100 flex justify-end py-10 close-container">
      <IconsClose class="cursor-pointer" @click="chnageSideMenuState" />
    </div>
    <div class="flex flex-column px-10 pt-10">
      <span class="f-s-14 f-w-500 color-primary">Components List</span>
      <BaseDivider class="mt-10" />
      <dov
        class="f-s-12 f-w-400 h-30-px flex align-center color-gray cursor-pointer mt-5"
        v-for="item in items"
        :key="item.id"
        @click="navigate(`${item.path}`)"
        :class="{ 'active-path': route.path == item.path }"
        >- {{ item.name }}</dov
      >
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

const emit = defineEmits(["chnageSideMenuState"]);

const chnageSideMenuState = () => {
  emit("chnageSideMenuState");
};

const items = ref([
  { id: 0, name: "Button", path: "/docs/button" },
  { id: 1, name: "Text Input", path: "/docs/input" },
  { id: 0, name: "Text Area", path: "/docs/textarea" },
  { id: 0, name: "Avatar", path: "/docs/avatar" },
  { id: 0, name: "Select Items", path: "/docs/select" },
]);

const navigate = (path) => {
  const osWidth = window.screen.width;
  navigateTo(path);
  if (osWidth < 650) {
    emit("chnageSideMenuState");
  }
};
</script>

<style scoped lang="scss">
@import url("@/assets/scss/theme_colors.scss");

.custom-style {
  box-shadow: 1px 0px 0px 0px #53535320;
}

.container {
  width: 350px;
  height: 100dvh;
}

.close-container {
  display: none;
}

.active-path {
  background: var(--primary-);
  color: var(--white-);
  border-radius: 5px;
  padding: 0 10px;
  transition: 1s;
}

@media (max-width: 650px) {
  .container {
    position: fixed;
    z-index: 100;
    width: 100%;
  }
  .close-container {
    display: flex;
  }
}
</style>
