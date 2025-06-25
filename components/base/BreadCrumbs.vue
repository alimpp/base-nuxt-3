<template>
  <div class="flex">
    <span class="f-s-12 f-w-500 color-primary">TASKHOLDER</span>
    <span class="f-s-12 f-w-500 px-4">/</span>
    <span class="f-s-12 f-w-500">{{ parent }}</span>
    <span class="f-s-12 f-w-500 px-4">/</span>
    <span class="f-s-12 f-w-500">{{ child }}</span>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const parent = computed(() => {
  return route.path.split("/")[1].toUpperCase();
});

const child = computed(() => {
  return route.path.split("/")[2].toUpperCase();
});
</script>
