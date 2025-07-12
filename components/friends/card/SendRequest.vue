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
    <div
      class="w-100 flex align-center justify-center mt-8"
      v-if="!user.youSendRequest && !user.hasFriendRequest && !user.isFriend"
    >
      <BaseButton
        width="120px"
        bg="bg-info"
        color="color-primary"
        @click="handleSendRequest(user.id)"
        name="Send Request"
      >
        <template #iconLeft>
          <IconsSpinner color="#7d7be5" class="mx-4" v-if="loading" />
          <IconsFriendAdd color="#7d7be5" class="mx-4" width="18px" v-else />
        </template>
      </BaseButton>
      <BaseButton
        width="40px"
        bg="bg-info"
        color="color-primary"
        class="mx-5"
        @click="navigateTo(`/user/viewProfile/${user.id}`)"
      >
        <template #iconLeft>
          <IconsViewProfile color="#7d7be5" class="mx-4" width="18px" />
        </template>
      </BaseButton>
    </div>
    <div
      class="w-100 flex align-center justify-center mt-8"
      v-if="user.youSendRequest"
    >
      <BaseButton
        width="150px"
        bg="bg-none"
        color="color-primary"
        name="Pendding Accept"
      >
        <template #iconLeft>
          <IconsPendding color="#7d7be5" class="mx-4" />
        </template>
      </BaseButton>
      <BaseButton
        width="40px"
        bg="bg-info"
        color="color-primary"
        class="mx-5"
        @click="navigateTo(`/user/viewProfile/${user.id}`)"
      >
        <template #iconLeft>
          <IconsViewProfile color="#7d7be5" class="mx-4" width="18px" />
        </template>
      </BaseButton>
    </div>
    <div
      class="w-100 flex justify-center align-center justify-end mt-8"
      v-if="user.hasFriendRequest"
    >
      <BaseButton
        width="160px"
        bg="bg-none"
        color="color-primary"
        name="Pendding Your Accept"
        @click="navigateTo('/friends/requests')"
      >
        <template #iconLeft>
          <IconsPendding color="#7d7be5" class="mx-4" />
        </template>
      </BaseButton>
      <BaseButton
        width="40px"
        bg="bg-info"
        color="color-primary"
        class="mx-5"
        @click="navigateTo(`/user/viewProfile/${user.id}`)"
      >
        <template #iconLeft>
          <IconsViewProfile color="#7d7be5" class="mx-4" width="18px" />
        </template>
      </BaseButton>
    </div>
    <div
      class="w-100 flex justify-center align-center justify-end mt-8"
      v-if="user.isFriend"
    >
      <BaseButton
        width="40px"
        bg="bg-info"
        color="color-primary"
        class="mx-5"
        @click="navigateTo(`/user/viewProfile/${user.id}`)"
      >
        <template #iconLeft>
          <IconsViewProfile color="#7d7be5" class="mx-4" width="18px" />
        </template>
      </BaseButton>
    </div>
  </BaseCard>
</template>

<script setup>
import { RequestControllerModule } from "~/controllers/request";

const props = defineProps({
  user: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const loading = ref(false);

const handleSendRequest = async (id) => {
  loading.value = true;
  await RequestControllerModule.sendRequest(id);
  loading.value = false;
};
</script>
