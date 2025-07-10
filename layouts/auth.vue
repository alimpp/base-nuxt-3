<template>
    <div class="auth-layout">
      <div class="glass-content">
         <div class="content">
            <img src="/public/logo/black-cat-logo.png" alt="logo" width="150" height="150">
            <NuxtPage />
         </div>
      </div>
      <BaseAlert v-if="alert.timeout > 0" />
    </div>
</template>

<script setup>
const applicationStore = useApplicationStore()

const alert = computed(() => {
    return applicationStore._state.alert
})
</script>

<style scoped>
.auth-layout{
    width: 100%;
    height: 100dvh;
    background-image: url('/public/gifs/auth-bg.gif');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.glass-content{
    width: 100%;
    height: 100dvh;
    background: #0000001f;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content {
    width: 380px;
    border-radius: 15px;
    background: #ffffffc2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 10px;
    overflow: hidden;
    transition: 1s;
}
</style>