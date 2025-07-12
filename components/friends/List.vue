<template>
    List
</template>

<script setup>
import { usersController } from '@/controllers/Users'

onMounted( async () => {
  await usersController.allUsers()
})
</script>