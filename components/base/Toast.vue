<template>
  <div
    class="base-toast-content slid-left-animation-3"
    :class="{
      'bg-danger': toast.type == 'danger',
      'bg-warning': toast.type == 'warning',
      'bg-success': toast.type == 'success',
    }"
  >
    <div class="icon-content">
      <IconsSuccess v-if="toast.type == 'success'" />
      <IconsDanger v-if="toast.type == 'danger'" />
      <IconsWarning v-if="toast.type == 'warning'" />
    </div>
    <div class="content">
      <span
        class="f-s-16 f-w-400"
        :class="{ 'color-primary-white': toast.type == 'danger' }"
        >{{ toast.title }}</span
      >
      <span
        class="f-s-12 f-w-300"
        :class="{ 'color-primary-white': toast.type == 'danger' }"
        >{{ toast.text }}</span
      >
    </div>
    <div class="close-content">
      <IconsClose
        class="cursor-pointer"
        @click="remove"
        :color="toast.type == 'danger' ? '#fff' : '#000'"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  toast: {
    type: Object,
    default: {},
  },
});

const emit = defineEmits(["remove"]);

const remove = () => {
  emit("remove", props.toast.id);
};

onMounted(() => {
  setTimeout(() => {
    emit("remove", props.toast.id);
  }, props.toast.timeout);
});
</script>

<style scoped>
.base-toast-content {
  width: 380px;
  height: 70px;
  border-radius: 10px;
  display: flex;
  margin: 5px 0;
}

.icon-content {
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.close-content {
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
