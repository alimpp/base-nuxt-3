<template>
   <div class="flex flex-wrap justify-center">
     <FriendsCardSendRequest v-for="(data, index) in dataSource" :key="index" :user="data" />
   </div>
</template>

<script setup>
import { usersController } from '@/controllers/Users'

const usersStore = useUsersStore()

const dataSource = computed(() => {
  return usersStore._state.users
})

onMounted( async () => {
  await usersController.allUsers()
})
</script>