<template>
    <div class="flex flex-column w-100">
        <input ref="input" style="display: none;" type="file" @change="uploadImage">
        <div class="flex flex-column align-center justify-center w-98 h-200-px" v-if="loading">
          <IconsSpinner color="#7d7be5" />
          <span class="f-s-12 f-w-600 color-primary">Uploading...</span>
        </div>
        <div class="flex flex-column" v-else>
          <img :src="image" alt="image" v-if="image" class="fade-animation w-98 border-rounded" height="200" />
          <div class="image-content" v-else>
            <span class="f-s-12 f-w-600 color-primary">Choose Image</span>
            <span class="f-s-10 f-w-500 color-gray pt-5">JPG , JPEG , and PNG formats , up to 10MB</span>
          </div>
        </div>
        <BaseButton @click="openFiles" class="bg-primary mt-10" width="100%" name="Upload Image">
          <template #iconLeft>
            <IconsUploadAvatar />
          </template>
        </BaseButton>
    </div>
</template>

<script setup>
const emit = defineEmits(["uploadImage"]);
const input = ref(null);

const props = defineProps({
    image: {
        type: String,
        default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    }
})

const openFiles = () => {
    input.value.click();
}

const uploadImage = (event) => {
    emit("uploadImage", event);
}
</script>

<style scoped>
.image-content{
  width: 98%;
  height: 200px;
  border: 1px solid #8481812f;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>