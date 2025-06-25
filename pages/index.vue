<template>
  <div
    class="w-100 h-100-dvh bg-app-dark flex flex-column align-center justify-center"
  >
    <img src="/public/gifs/hi-hello-gif.gif" alt="" />
    <span class="f-s-20 f-w-600 color-primary pt-10"
      >Nuxt Version 3 Base Components</span
    >
    <span class="f-s-14 f-w-600 pt-5">Welcome To Application Docs</span>
    <BaseButton
      name="Get Started"
      color="color-white"
      class="mt-10"
      width="80px"
      @click="navigateTo('/docs/interview')"
    />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "",
});
</script>
