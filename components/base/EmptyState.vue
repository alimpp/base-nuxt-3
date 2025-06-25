<template>
    <div class="flex flex-column justify-center align-center w-100">
      <img src="/public/image/empty-state-vector.png" alt="image" width="350" />
      <span class="f-s-13 f-w-500 color-primary">{{ title }}</span>
      <span class="f-s-11 f-w-500 color-gray pt-5">{{ text }}</span>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    text: {
        type: String,
        default: ""
    }
})
</script>
