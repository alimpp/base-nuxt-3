<template>
    <div>
        {{ profile }}
    </div>
</template>

<script setup>
const userStore = useUserStore();

const profile = computed(() => {
    return userStore._state.user
})

definePageMeta({
  middleware: "auth",
});
</script>