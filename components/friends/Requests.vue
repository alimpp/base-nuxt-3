<template>
    {{ dataSource }}
</template>

<script setup>
import { requestController } from '~/controllers/Request';

const requestStore = useRequestStore()
const pageLoading = ref(false)

const dataSource = computed(() => {
  return requestStore._state.requestList
})

onMounted( async () => {
  requestController.getCacheData()
  if(requestStore._state.requestList.length == 0) {
    pageLoading.value = true 
  }
  await requestController.getRequestList()
  pageLoading.value = false
})
</script>