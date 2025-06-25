<template>
    <div class="flex w-100">
        <input ref="input" style="display: none;" type="file" @change="updateAvatar">
        <BaseButton @click="openFiles" class="bg-primary" width="100%" name="Upload Avatar">
          <template #iconLeft>
            <IconsUploadAvatar />
          </template>
        </BaseButton>
    </div>
</template>

<script setup>
const emit = defineEmits(["updateAvatar"]);
const input = ref(null);

const openFiles = () => {
    input.value.click();
}

const updateAvatar = (event) => {
    emit("updateAvatar", event);
}
</script>