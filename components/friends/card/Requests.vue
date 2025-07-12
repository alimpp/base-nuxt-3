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
          handleAcceptRequest({
            requestId: user.requestId,
            friendRequestedBy: user.userId,
          })
        "
      >
        <template #iconLeft>
          <IconsSpinner color="#7d7be5" class="mx-4" v-if="acceptLoading" />
          <IconsCheckCircle color="#7d7be5" class="mx-1" v-else />
        </template>
      </BaseButton>
      <BaseButton
        width="100px"
        bg="bg-red"
        color="color-primary-white"
        class="mx-2"
        name="Reject"
        @click="handleRejectRequest(user.requestId)"
      >
        <template #iconLeft>
          <IconsSpinner color="#7d7be5" class="mx-4" v-if="rejectLoading" />
          <IconsClose color="#fff" class="mx-1" v-else />
        </template>
      </BaseButton>
    </div>
  </BaseCard>
</template>

<script setup>
import { RequestControllerModule } from "~/controllers/request";
import { FriendsControllerModule } from "~/controllers/friends";

const props = defineProps({
  user: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const rejectLoading = ref(false);
const handleRejectRequest = async (id) => {
  rejectLoading.value = true;
  await RequestControllerModule.removeRequest(id);
  rejectLoading.value = false;
};

const acceptLoading = ref(false);
const handleAcceptRequest = async (data) => {
  acceptLoading.value = true;
  await FriendsControllerModule.addFriend(data);
  acceptLoading.value = false;
};
</script>
