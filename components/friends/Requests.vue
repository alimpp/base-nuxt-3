<template>
  <div class="w-100 flex flex-column">
    <div
      class="flex w-100 h-80-dvh align-cemter justify-center"
      v-if="!pageLoading && dataSource.length == 0"
    >
      <BaseEmptyState
        title="Sorry !"
        text="Friend Request list is empty please try again later"
      />
    </div>
    <div class="flex flex-wrap justify-center" v-if="pageLoading">
      <FriendsSkeleton v-for="n in 20" class="mx-5" />
    </div>
    <div class="w-100 flex flex-wrap justify-center" v-else>
     <div class="w-250-px mx-5" v-for="(data, index) in dataSource">
       <FriendsCardRequests :user="data" :key="index" />
     </div>
    </div>
  </div>
</template>

<script setup>
import { requestController } from '~/controllers/Request';

const requestStore = useRequestStore()
const pageLoading = ref(false)

const dataSource = computed(() => {
  return requestStore._state.requestList
})

onMounted( async () => {
  if(requestStore._state.requestList.length == 0) {
    pageLoading.value = true 
  }
  await requestController.getRequestList()
  pageLoading.value = false
})
</script>