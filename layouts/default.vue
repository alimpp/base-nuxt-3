<template>
    <LayoutsApp />
</template>

<script setup>
import { userController } from '~/controllers/User';

onMounted(async () => {
    await userController.profile()
})
</script>
