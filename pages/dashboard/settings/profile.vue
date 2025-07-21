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
          validate="true"
          rules="length" 
          min-length="3" 
          max-length="30"
          v-model:access="access"
        />
        <BaseInput
          label="Lastname"
          class="mt-4"
          v-model="user.lastname"
          validate="true"
          rules="length" 
          min-length="3" 
          max-length="30"
          v-model:access="access"
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
          :disabled="disabled"
        />
      </div>

      <div class="flex flex-column responsive-width mt-10">
        <span class="f-s-16 f-w-600 color-primary">Add Your Skills</span>
        <BaseInput
          label="Skill"
          class="mt-10"
          v-model="skill"
          validate="true"
          rules="length" 
          min-length="3" 
          max-length="30"
        />
        <BaseButton
          class="bg-primary mt-10"
          width="100%"
          name="Add Skill"
          @click="addSkill"
          icon="line-md:plus"
          :disabled="addSkillDisabled"
          :loading="addSkillLoading"
        />
        <div class="w-100 flex flex-wrap mt-10">
          <BaseChip
            width="100px"
            class="mx-4 mt-4"
            v-for="(item, index) in skillsDataSource"
            :key="index"
            bg="bg-info"
            color="color-primary"
            :name="item.skill"
            icon="line-md:close-small"
            @handleClick="removeSkill(item)"
          />
        </div>
      </div>
    </div>
    </div>
</template>

<script setup>
import { filesController } from '~/controllers/Files'
import { skillsController } from '~/controllers/Skills'
import { userController } from '~/controllers/User'

const userStore = useUserStore()
const skillsStore = useSkillsStore()

const loading = ref(false)
const addSkillLoading = ref(false)

const access = ref(true)
const addSkillAccess = ref(true)
const skill = ref('')

const user = computed(() => {
    return userStore._state.user
})

const skillsDataSource = computed(() => {
  return skillsStore._state.skills
})

const updateAvatar = async (event) => {
  loading.value = true  
  const res = await filesController.uploadFile(event.target.files[0])
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

const addSkill = async () => {
  addSkillLoading.value = true;
  await skillsController.addSkill(skill.value);
  await skillsController.getSkills()
  skill.value = ''
  addSkillLoading.value = false;
};

const removeSkill = async (skill) => {
  await skillsController.removeSkill(skill.id)
  await skillsController.getSkills()
}

const disabled = computed(() => {
   return !access.value || !user.value.fristname || !user.value.lastname ? true : false
})

const addSkillDisabled = computed(() => {
   return !addSkillAccess.value || !skill.value
})

onMounted( async () => {
  await skillsController.getSkills()
})
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