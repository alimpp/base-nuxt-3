<template>
  <div class="flex flex-column">
    <BaseBreadCrumbs />
    <span class="f-s-14 f-w-600 pt-20 slid-up-animation-3"
        >Base Textarea</span>
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
      >Normal Textarea Style</span
    >
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseTextarea label="Bio" placeholder="Enter Bio" class="mt-5" />
    </div>
    <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseTextarea label="Bio" placeholder="Enter Bio" />'/>
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
      >Disabled Textarea Style</span
    >
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseTextarea label="Bio" placeholder="Enter Bio" disabled="true" class="mt-5" />
    </div>
    <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseTextarea label="Bio" placeholder="Enter Bio" disabled="true" />'/>
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
      >Handle Error Just With Bind :errorMessage Props To BaseTextarea</span
    >
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseTextarea label="Bio" placeholder="Enter Bio" errorMessage="Bio Is Required" class="mt-5" />
    </div>
    <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseTextarea label="Bio" placeholder="Enter Bio"/>'/>
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
      >ModelValue Props BaseTextarea</span
    >
    <BaseTextarea label="Bio" placeholder="Enter Bio" v-model="bio" class="mt-5" />
    <span class="mt-15 f-s-14 f-w-600">Bio Is {{ bio }}</span>
    <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseTextarea label="Bio" placeholder="Enter Bio" v-model="bio"/> 
<span class="mt-15 f-s-14 f-w-600">Bio Is {{ bio }}</span>

<script setup>
const bio = ref(null)
</script>'/>
    <span class="f-s-16 f-w-600 pt-20 slid-up-animation-3">Read For More Components ?</span>
<div class="flex flex-wrap mt-20">
  <BaseCard @click="navigateTo('/docs/button')"  class="flex py-10 px-20 align-center cursor-pointer mt-10">
    <BaseIcon name="mdi:hand-back-right" color="#fff" />
    <span class="f-s-14 f-w-600 px-2">Button</span>
  </BaseCard>
  <BaseCard @click="navigateTo('/docs/input')"  class="flex py-10 px-20 align-center cursor-pointer mt-10 mx-10">
    <BaseIcon name="mdi:hand-back-right" color="#fff" />
    <span class="f-s-14 f-w-600 px-2">Input</span>
  </BaseCard>
  <BaseCard @click="navigateTo('/docs/avatar')"  class="flex py-10 px-20 align-center cursor-pointer mt-10">
    <BaseIcon name="mdi:hand-back-right" color="#fff" />
    <span class="f-s-14 f-w-600 px-2">Avatar</span>
  </BaseCard>
  <BaseCard  @click="navigateTo('/docs/select')" class="flex py-10 px-20 align-center cursor-pointer mt-10 mx-10">
    <BaseIcon name="mdi:hand-back-right" color="#fff" />
    <span class="f-s-14 f-w-600 px-2">Select Items</span>
  </BaseCard>
</div>
  </div>
</template>

<script setup>
const bio = ref(null)
definePageMeta({
  layout: "docs",
});
</script>
