<template>
  <div class="w-100 flex flex-column">
    <BaseModuleState v-if="moduleState" :text="moduleState" />
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
      <FriendsSkeleton v-for="n in 20" class="mx-5" />
    </div>
    <div class="w-100 flex flex-wrap justify-center" v-else>
     <div class="w-250-px mx-5" v-for="(data, index) in dataSource">
       <FriendsCardSendRequest :user="data" :key="index" />
     </div>
    </div>
  </div>
</template>


<script setup>
import { usersController } from '@/controllers/Users'

const usersStore = useUsersStore()
const pageLoading = ref(false)

const dataSource = computed(() => {
  return usersStore.users
})

const moduleState = computed(() => {
  return usersStore.getModuleState
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