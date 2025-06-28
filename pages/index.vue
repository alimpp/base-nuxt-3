<template>
  <div
    class="w-100 h-100-dvh bg-app-dark flex flex-column align-center justify-center"
  >
    <img
      src="/public/gifs/hi-hello-gif.gif"
      alt="image"
      class="fade-animation-1s"
    />
    <span class="f-s-20 f-w-600 color-primary pt-20 slid-up-animation-3"
      >Nuxt Custom Base Components</span
    >
    <span class="f-s-14 f-w-600 pt-20 slid-up-animation-5"
      >Welcome To Application Docs</span
    >
    <div class="mt-20 slid-up-animation-1s flex">
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
    <span class="f-s-12 f-w-500 color-gray pt-20 flex align-center slid-up-animation-1s"><BaseIcon name="fluent-mdl2:developer-tools" /> Developed By</span>
    <div class="flex align-center mt-20 cursor-pointer slid-up-animation-1s" @click="openGithub">
      <BaseAvatar avatar="https://avatars.githubusercontent.com/u/86446834?v=4" />
      <span class="f-s-12 f-w-600 color-gray px-5">Alimpp</span>
    </div>
    <span class="f-s-12 f-w-500 pt-20 flex align-center slid-up-animation-1s"><BaseIcon name="qlementine-icons:version-control-16" /> Vesrion : 1.0.0</span>
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

const openGithub = () => {
  window.open("https://github.com/alimpp")
}
</script>
