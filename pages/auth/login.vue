<template>
   <div class="w-100 flex flex-column fade-animation-1s">
        <div class="w-100 flex flex-column justify-start">
                <span class="f-s-22 f-w-600">Login With Black Cat</span>
                <span class="f-s-12 f-w-600 color-primary pt-5">Authentication</span>
            </div>
            <BaseInput validate="true" v-model:access="access" v-model="form.email" rules="email" class="mt-15" label="Email" placeholder="Please Enter Your Email" />
            <BaseInput validate="true" v-model:access="access" v-model="form.password" rules="length" min-length="8" max-length="16" class="mt-10" label="Password" placeholder="Please Enter Your Password" />
            <BaseButton class="mt-15" name="Login" width="100%" height="40px" :loading="loading" :disabled="disabled" @click="login" />
            <div class="w-100 flex justify-center mt-15 cursor-pointer">
                <span class="f-s-14 f-w-500 color-primary" @click="navigateTo('/auth/register')">Don't have a user account?</span>
            </div>
   </div>
</template>

<script setup>
import { userController } from '@/controllers/User'

definePageMeta({
  layout: "auth",
});

const access = ref(false)
const loading = ref(false)

const form = ref({
    email: '',
    password: ''
})

const disabled = computed(() => {
   return !access.value || !form.value.email || !form.value.password ? true : false
})

const login = async () => {
    loading.value = !loading.value
    await userController.login(form.value)
    loading.value = !loading.value
}
</script>