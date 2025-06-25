<template>
  <BaseButton
    name="Get User"
    color="color-info"
    @click="clicked"
    width="90px"
    :loading="loading"
  />
  <BaseButton
    name="Get User"
    @click="clicked"
    width="90px"
    :loading="loading"
    class="mt-5"
    bg="bg-none"
    border="border-primary"
    color="color-primary"
  />
  {{ userStore._state.currentUser }}
  {{ taskStore._state.tasks }}
</template>
<script setup>
const userStore = useUserStore();
const taskStore = useTaskStore();

const loading = ref(false);

definePageMeta({
  layout: "docs",
});

const clicked = () => {
  loading.value = true;
  taskStore.addTask({ id: 1, name: "hello" });
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>
