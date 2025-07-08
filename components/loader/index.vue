<template>
    <div class="loader-content">
      <div class="one"></div>
      <div class="two"></div>
      <div class="three"></div>
      <div class="four"></div>
      <div class="five"></div>
    </div>
</template>

<script setup>
const props = defineProps({
  mode: {
    type: String,
    default: "downToUp"
  }
})
</script>

<style scoped>
@keyframes slid-down {
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes slid-up {
  0% {
    transform: translateY(100%);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}

.loader-content {
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: hidden;
    z-index: 1000;
    display: flex;
}

.one {
    width: 20%;
    height: 100dvh;
    background: #b45a5a;
    animation: 2s slid-up;
}
.two {
    width: 20%;
    height: 100dvh;
    background: #86b43c;
    animation: 2.1s slid-up;
}.three {
    width: 20%;
    height: 100dvh;
    background: #3388ce;
    animation: 2.2s slid-up;
}.four {
    width: 20%;
    height: 100dvh;
    background: #71bd71;
    animation: 2.4s slid-up;
}.five {
    width: 20%;
    height: 100dvh;
    background: #01ff9d;
    animation: 2.6s slid-up;
}
</style>