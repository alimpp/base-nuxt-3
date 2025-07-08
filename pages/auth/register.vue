<template>
   <div class="w-100 flex flex-column fade-animation-1s">
        <div class="w-100 flex flex-column justify-start">
                <span class="f-s-22 f-w-600">Create New Account</span>
                <span class="f-s-12 f-w-600 color-primary pt-5">You Can Create New Profile</span>
            </div>
            <BaseInput validate="true" v-model:access="access" v-model="form.fristname" rules="length" min-length="3" max-length="30" class="mt-15" label="Fristname" placeholder="Please Enter Your Fristname" />
            <BaseInput validate="true" v-model:access="access" v-model="form.lastname" rules="length" min-length="3" max-length="30" class="mt-10" label="Lastname" placeholder="Please Enter Your Lastname" />
            <BaseInput validate="true" v-model:access="access" v-model="form.email" rules="email" class="mt-15" label="Email" placeholder="Please Enter Your Email" />
            <BaseInput validate="true" v-model:access="access" v-model="form.password" rules="length" min-length="8" max-length="16" class="mt-10" label="Password" placeholder="Please Enter Your Password" />
            <BaseButton class="mt-15" name="Create Account" width="100%" height="40px" :disabled="disabled" />
            <div class="w-100 flex justify-start mt-15 cursor-pointer">
                <span class="f-s-14 f-w-500 color-primary flex align-center" @click="navigateTo('/auth/login')">
                    <BaseIcon name="mynaui:arrow-left" width="20" height="20" />
                    Login with email and password
                </span>
            </div>
   </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});

const access = ref(false)

const form = ref({
    fristname: "",
    lastname: "",
    email: '',
    password: ''
})

const disabled = computed(() => {
   return !access.value || !form.value.email || !form.value.password || !form.value.fristname || !form.value.lastname ? true : false
})
</script>