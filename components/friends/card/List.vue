<template>
  <BaseCard class="mt-10 fade-animation py-10" bgClass="bg-primary-white">
    <div class="flex flex-column align-center justify-center w-100">
      <BaseAvatar
        :character="user.fristChar"
        :bg="user.avatarColor"
        :avatar="user.avatarUrl"
        width="120px"
        height="120px"
      />
    </div>
    
    <div class="flex flex-column align-center justify-center w-100 mt-10">
      <span class="f-s-14 f-w-500">{{ user.fullname }}</span>
      <span class="f-s-12 f-w-500 color-gray pt-8">{{ user.email }}</span>
    </div>

    <div class="w-100 flex align-center justify-center mt-8">
      <BaseButton
        width="120px"
        bg="bg-info"
        color="color-primary"
        class="mx-2"
        name="View Profile"
        @click="navigateTo(`/user/viewProfile/${user.id}`)"
        icon="solar:user-hand-up-broken"
        iconSize="22px"
      />
    </div>
  </BaseCard>
</template>

<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const removeLoading = ref(false);
const handleRemoveFriend = async (id) => {
  removeLoading.value = true;
  
  removeLoading.value = false;
};
</script>
