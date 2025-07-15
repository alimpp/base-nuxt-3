<template>
    <div class="flex flex-column">
       <div class="w-100 responsive-container">
      <div
        class="flex flex-column align-center justify-center responsive-width mt-10"
      >
        <BaseAvatar
          :character="user.fristChar"
          :avatar="user.avatarUrl"
          width="150px"
          height="150px"
          characterSize="f-s-40"
        />
        <span class="f-s-16 f-w-600 py-5">{{ user.fullname }}</span>
        <span class="f-s-14 f-w-600 color-gray">{{ user.email }}</span>
        <BaseUploadAvatar @updateAvatar="updateAvatar" class="mt-10" />
        <BaseInput
          label="Fristname"
          class="mt-4"
          v-model="user.fristname"
        />
        <BaseInput
          label="Lastname"
          class="mt-4"
          v-model="user.lastname"
        />
        <BaseInput
          label="Email"
          :disabled="true"
          class="mt-4"
          v-model="user.email"
        />
        <BaseInput
          label="Bio"
          class="mt-4"
          v-model="user.bio"
        />
        <BaseButton
          class="mt-10"
          bg="bg-info"
          color="color-primary"
          border="1px solid #7d7be5"
          width="100%"
          name="Update Profile"
          @click="udpateProfile"
        />
      </div>

      <div class="flex flex-column responsive-width mt-10">
        
      </div>
    </div>
    </div>
</template>

<script setup>
const userStore = useUserStore()

const user = computed(() => {
    return userStore._state.user
})

const updateAvatar = (file) => {
    
}
</script>

<style scoped>
.responsive-container {
  display: flex;
}

.responsive-width {
  width: 50%;
}

@media (max-width: 900px) {
  .responsive-container {
    flex-direction: column;
  }
  .responsive-width {
    width: 100%;
    padding: 0;
  }
}
</style>