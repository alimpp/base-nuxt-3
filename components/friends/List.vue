<template>
   <div class="w-100 flex flex-column">
    <div
      class="flex w-100 h-80-dvh align-cemter justify-center"
      v-if="!pageLoading && dataSource.length == 0"
    >
      <BaseEmptyState
        title="Sorry . . . !"
        text="You Dont Have Friend . . . !"
      />
    </div>
    <div class="flex flex-wrap justify-center" v-if="pageLoading">
      <FriendsSkeleton v-for="n in 20" class="mx-5" />
    </div>
    <div class="w-100 flex flex-wrap justify-center" v-else>
     <div class="w-250-px mx-5" v-for="(data, index) in dataSource">
       <FriendsCardList :user="data" :key="index" />
     </div>
    </div>
  </div>
</template>

<script setup>
import { friendsController } from '@/controllers/Friends'

const friendsStore = useFriendsStore()
const pageLoading = ref(false)

const dataSource = computed(() => {
  return friendsStore.getFriendsList
})

onMounted( async () => {
   if(friendsStore._state.friendList.length == 0) {
     pageLoading.value = true 
   }
   await friendsController.getFriendsList()
   pageLoading.value = false
})
</script>