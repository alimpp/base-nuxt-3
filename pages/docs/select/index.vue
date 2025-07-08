<template>
  <div class="flex flex-column">
    <BaseBreadCrumbs />
    <span class="f-s-14 f-w-600 pt-20 slid-up-animation-3"
        >Base Select</span>
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseSelect v-model="user" label="User" title="Select User" :items="items" />
    </div>
  </div>
</template>

<script setup>
import { usersController } from '~/controllers/Users';

definePageMeta({
  layout: "docs",
});

const user = ref('')

const items = ref([
  {id: 0, name: "jackson"},
  {id: 1, name: "nika"},
  {id: 2, name: "nikol"},
  {id: 3, name: "jhon"},
  {id: 4, name: "mika"},
])

onMounted( async () => {
  await usersController.allUsers()
})
</script>

<style scoped>

</style>