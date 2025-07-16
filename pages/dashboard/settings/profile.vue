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
        <BaseUploadAvatar :loading="loading" @updateAvatar="updateAvatar" class="mt-10" />
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
          icon="line-md:pencil"
          :loading="loading"
        />
      </div>

      <div class="flex flex-column responsive-width mt-10">
        
      </div>
    </div>
    </div>
</template>

<script setup>
import { filesController } from '~/controllers/Files'
import { userController } from '~/controllers/User'

const userStore = useUserStore()

const loading = ref(false)
const avatarFile =  ref(null);

const user = computed(() => {
    return userStore._state.user
})

const updateAvatar = async (event) => {
  loading.value = true 
  avatarFile.value = event.target.files[0]
  const formData = new FormData();
  formData.append("file", avatarFile.value);
  const res = await filesController.uploadFile(formData)
  if(res.id) {
    await userController.updateAvatar(res.id)
    await userController.profile()
  }
  loading.value = false
}

const udpateProfile = async () => {
  loading.value = true
  const body = {
    fristname: user.value.fristname,
    lastname: user.value.lastname,
    bio: user.value.bio,
  };
  await userController.updateProfile(body);
  await userController.profile()
  loading.value = false
};
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