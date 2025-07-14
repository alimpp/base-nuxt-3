<template>
  <div class="w-100 flex flex-column">
    <div
      class="flex w-100 h-80-dvh align-cemter justify-center"
      v-if="!pageLoading && dataSource.length == 0"
    >
      <BaseEmptyState
        title="Users Not Found"
        text="Users list is empty please try again later"
      />
    </div>
    <div class="flex flex-wrap justify-center" v-if="pageLoading">
      <SkeletonSendFriendRequest />
    </div>
    <div class="w-100 flex flex-wrap justify-center" v-else>
      <FriendsCardSendRequest v-for="(data, index) in dataSource" :key="index" :user="data" />
    </div>
  </div>
</template>


<script setup>
import { usersController } from '@/controllers/Users'

const usersStore = useUsersStore()
const pageLoading = ref(false)

const dataSource = computed(() => {
  return usersStore._state.users
})

onMounted( async () => {
  usersController.getCacheData()
  if(usersStore._state.users.length == 0) {
    pageLoading.value = true
  }
  await usersController.allUsers()
  pageLoading.value = false
})
</script>