<template>
  <div class="flex flex-column">
    <BaseBreadCrumbs />
    <BaseModuleState class="mt-10" v-if="moduleState" :text="moduleState" />
    <div
      class="flex w-100 h-80-dvh align-cemter justify-center"
      v-if="!pageLoading && dataSource.length == 0"
    >
      <BaseEmptyState
        title="Note List Empty . . ."
        text="Note List Is Empty Pelase Try Again . . . "
      />
    </div>
    <div class="flex flex-wrap justify-center" v-if="pageLoading">
      <NoteSkeleton v-for="n in 20" class="mx-5 mt-10" />
    </div>
    <div class="w-100 flex flex-wrap justify-center" v-else>
      <div class="w-370-px mx-5" v-for="(data, index) in dataSource">
        <NoteCard class="mt-10" :note="data" :key="index" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { noteController } from '~/controllers/Note';

const noteStore = useNoteStore()
const pageLoading = ref(false)

const dataSource = computed(() => {
  return noteStore.getList
})

const moduleState = computed(() => {
  return noteStore.getModuleState
})

onMounted( async () => {
   if(noteStore._state.list.length == 0) {
     pageLoading.value = true 
   }
   await noteController.getList()
   pageLoading.value = false
})
</script>