<template>
<BaseCard class="fade-animation" bgClass="bg-primary-white">
    <div class="w-100 flex flex-column">
        <div class="flex w-100">
         <div class="flex">
          <BaseAvatar
            :character="note.author?.fristChar"
            :avatar="note.author?.avatarUrl"
            :bg="note.author?.avatarColor"
          />
          <div class="flex flex-column justify-center px-5">
              <span class="f-s-12 f-w-600 color-gray">{{ note.author?.fullname }}</span>
              <span class="f-s-12 color-primary">{{
              note.author?.email
              }}</span>
          </div>
         </div>
        </div>
        <div class="w-98 flex px-5 py-5 mt-5 border-rounded">
        <span class="f-s-13 f-w-600">{{ note?.note }}</span>
        </div>
    </div>
</BaseCard>
</template>

<script setup>
const props = defineProps({
  note: {
    type: Object,
    required: true,
    default: () => {},
  },
});
</script>
