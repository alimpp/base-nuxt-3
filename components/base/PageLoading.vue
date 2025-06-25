<template>
  <div
    class="w-100 h-100-dvh flex flex-column align-center justify-center base-page-loading fade-animation"
  >
    <IconsSpinner width="50" height="50" />
    <span class="f-s-12 f-w-500 color-primary-white pt-4">LOADING</span>
  </div>
</template>

<style scoped>
.base-page-loading {
  z-index: 200;
  position: fixed;
  background: #00000096;
}
</style>
