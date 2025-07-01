<template>
   <BaseInput v-model="username" validate="true" v-model:access="access" rules="email" />
    {{ username }}
    <BaseButton name="clicked" @click="cliked" />
</template>

<script setup>
const username = ref(null)
const access = ref(true)

const cliked = () => {
  access.value ? console.log('valid') : console.log('not valid')
}
definePageMeta({
  layout: "docs",
});
</script>
