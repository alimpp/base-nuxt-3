<template>
    <div class="base-alert">
       <div class="glass">
         <div class="alert-content py-30 slid-up-animation-5" :class="{'danger-state': alert.type == 'danger'}">
           <BaseIcon v-if="alert.type == 'danger'" name="line-md:emoji-angry" size="70" />
           <span class="f-s-14 f-w-600 pt-5">{{ alert.title }}</span>
           <span class="f-s-12 f-w-600 pt-10">{{ alert.text }}</span>
           <BaseButton @click="ok" name="OK" icon="simple-line-icons:like" bg="bg-white" class="mt-10" />
         </div>
       </div>
    </div>
</template>

<script setup>
const applicationStore = useApplicationStore()

const alert = computed(() => {
    return applicationStore._state.alert
})

const ok = () => {
    applicationStore.resetAlert()
}

onMounted(() => {
    setTimeout(() => {
        applicationStore.resetAlert()
    }, applicationStore._state.alert.timeout);
})
</script>

<style scoped>
.base-alert {
    width: 100%;
    height: 100dvh;
    position: fixed;
    z-index: 2000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.glass {
    width: 100%;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.alert-content {
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 5px;
}
.danger-state{
    background: rgb(167, 3, 3);
    color: #fff;
}
</style>