<template>
  <div
    class="add-post-content-style border-rounded w-200-px h-40-px bg-primary slid-left-animation-3"
    v-if="activeCompose"
    @click="emited('createPost')"
  >
    <BaseIcon class="mx-5" name="hugeicons:note" />
    <span class="f-s-14 f-w-500">Create Post</span>
  </div>
  <div
    class="add-note-content-style border-rounded w-200-px h-40-px bg-primary slid-left-animation-5"
    v-if="activeCompose"
    @click="emited('addNote')"
  >
    <BaseIcon class="mx-5" name="hugeicons:note-04" />
    <span class="f-s-14 f-w-500">Add Note</span>
  </div>
  <div
    class="add-project-content-style border-rounded w-200-px h-40-px bg-primary slid-left-animation-8"
    v-if="activeCompose"
    @click="emited('createProject')"
  >
    <BaseIcon class="mx-5" name="eos-icons:project-outlined" />
    <span class="f-s-14 f-w-500">Create Project</span>
  </div>
  <div class="float-button bg-primary">
    <BaseIcon
      icon="line-md:plus"
      @click="handleActiveCompose"
      :class="{
        'active-style': activeCompose,
        'deactive-style': !activeCompose,
      }"
    />
  </div>
</template>

<script setup>
const applicationStore = useApplicationStore()

const emit = defineEmits(["signal"]);

const activeCompose = computed(() => {
  return applicationStore.getComposeState;
});

const emited = (data) => {
  emit('signal', data)
  applicationStore.setCompose()
}

const handleActiveCompose = () => {
  applicationStore.setCompose()
};
</script>

<style scoped>
.float-button {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
  bottom: 0;
  right: 0;
  margin-bottom: 12px;
  margin-right: 12px;
  cursor: pointer;
}

.add-post-content-style {
  position: fixed;
  z-index: 10;
  bottom: 0;
  right: 0;
  margin-bottom: 65px;
  margin-right: 35px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.add-note-content-style {
  position: fixed;
  z-index: 10;
  bottom: 0;
  right: 0;
  margin-bottom: 112px;
  margin-right: 35px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.add-project-content-style {
  position: fixed;
  z-index: 10;
  bottom: 0;
  right: 0;
  margin-bottom: 159px;
  margin-right: 35px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.active-style {
  transform: rotate(135deg);
  transition: 1s;
}

.deactive-style {
  transform: rotate(0deg);
  transition: 1s;
}
</style>
