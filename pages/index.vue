<template>
  <div
    class="w-100 h-100-dvh bg-app-dark flex flex-column align-center justify-center"
  >
    <img
      src="/public/gifs/hi-hello-gif.gif"
      alt="image"
      class="fade-animation-1s"
    />
    <span class="f-s-20 f-w-600 color-primary pt-10 slid-up-animation-3"
      >Nuxt Version 3 Base Components</span
    >
    <span class="f-s-14 f-w-600 pt-5 slid-up-animation-5"
      >Welcome To Application Docs</span
    >
    <div class="mt-10 slid-up-animation-1s flex">
      <BaseButton
        name="Download"
        color="color-white"
        width="120px"
        class="mx-5"
        icon="line-md:download-loop"
        @click="downloadSourceCode"
      />
      <BaseButton
        name="Get Started"
        bg="bg-none"
        border="border-primary"
        color="color-primary"
        width="120px"
        @click="navigateTo('/docs/interview')"
        class="mx-5"
        icon="line-md:arrow-right"
      />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "",
});

const downloadSourceCode = () => {
  window.open(
    "https://github.com/alimpp/base-nuxt-3/archive/refs/heads/master.zip"
  );
};
</script>
