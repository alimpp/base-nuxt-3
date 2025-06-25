<template>
  <BaseButton name="Get User" color="color-white" @click="clicked" />
  {{ userStore._state.currentUser }}
  {{ taskStore._state.tasks }}
</template>
<script setup>
const userStore = useUserStore();
const taskStore = useTaskStore();

definePageMeta({
  layout: "docs",
});

const clicked = () => {
  taskStore.addTask({ id: 1, name: "hello" });
};
</script>
