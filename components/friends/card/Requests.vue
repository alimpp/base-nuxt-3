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
        width="100px"
        bg="bg-info"
        color="color-primary"
        class="mx-2"
        name="Accept"
        @click="
          acceptRequest({
            requestId: user.requestId,
            friendRequestedBy: user.userId,
          })
        "
        :loading="acceptLoading"
        icon="mi:circle-check"
      />
      <BaseButton
        width="100px"
        bg="bg-red"
        color="color-primary-white"
        class="mx-2"
        name="Reject"
        @click="rejectRequest(user.requestId)"
        :loading="rejectLoading"
        icon="line-md:close-circle"
      />
    </div>
    
  </BaseCard>
</template>

<script setup>
import { requestController } from '~/controllers/Request';
import { friendsController } from '~/controllers/Friends';

const props = defineProps({
  user: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const rejectLoading = ref(false);
const rejectRequest = async (id) => {
  rejectLoading.value = true;
  await requestController.reject(id);
  rejectLoading.value = false;
};

const acceptLoading = ref(false);
const acceptRequest = async (data) => {
  acceptLoading.value = true;
  await friendsController.accept(data);
  acceptLoading.value = false;
};
</script>