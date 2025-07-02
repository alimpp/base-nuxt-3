<template>
  <BaseInput label="Email" placeholder="Enter Email" v-model="form.email" validate="true" v-model:access="access" rules="email" />
  <BaseInput label="Password" placeholder="Enter Password" v-model="form.password" validate="true" v-model:access="access" rules="length" minLength="3" maxLength="20" />
  <BaseButton class="mt-10" name="clicked" @click="cliked" />
</template>

<script setup>
const access = ref(true)
const form = ref({
  email: '',
  password: ''
})

const cliked = () => {
  if(form.value.email && form.value.password) {
   access.value ? alert('valid') : alert('not valid')
  } else {
    alert('not valid')
  }
}
definePageMeta({
  layout: "docs",
});
</script>
