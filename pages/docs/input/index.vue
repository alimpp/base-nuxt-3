<template>
  <div class="flex flex-column">
    <BaseBreadCrumbs />
    <span class="f-s-14 f-w-600 pt-20 slid-up-animation-3"
        >Base Input</span>
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
      >Normal Input Style</span
    >
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseInput label="Username" placeholder="Enter Username" class="mt-5" />
    </div>
    <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseInput label="Username" placeholder="Enter Username" />'/>
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
      >Disabled Input Style</span
    >
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseInput label="Username" placeholder="Enter Username" disabled="true" class="mt-5" />
    </div>
    <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseInput label="Username" placeholder="Enter Username" disabled="true" />'/>
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
      >Handle Error Just With Bind :errorMessage Props To BaseInput</span
    >
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseInput label="Username" placeholder="Enter Username" errorMessage="Username Is Required" class="mt-5" />
    </div>
    <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseInput label="Username" placeholder="Enter Username"/>'/>
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
      >ModelValue Props BaseInput</span
    >
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseInput label="Username" placeholder="Enter Username" v-model="username" class="mt-5" />
      <span class="mt-15 f-s-14 f-w-600">Username Is {{ username }}</span>
    </div>
    <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseInput label="Username" placeholder="Enter Username" v-model="username"/> 
<span class="mt-15 f-s-14 f-w-600">Username Is {{ username }}</span>

<script setup>
const username = ref(null)
</script>'/>
<span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
      >Custom Width And Height Input Width Props</span
    >
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseInput width="300px" height="45px" label="Username" placeholder="Enter Username" class="mt-5" />
    </div>
    <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseInput width="300px" height="45px" label="Username" placeholder="Enter Username" />'/>
    <span class="f-s-16 f-w-600 pt-20 slid-up-animation-3">Read For More Components ?</span>
<div class="flex flex-wrap mt-20">
  <BaseCard @click="navigateTo('/docs/button')"  class="flex py-10 px-20 align-center cursor-pointer mt-10">
    <BaseIcon name="mdi:hand-back-right" color="#fff" />
    <span class="f-s-14 f-w-600 px-2">Button</span>
  </BaseCard>
  <BaseCard @click="navigateTo('/docs/textarea')"  class="flex py-10 px-20 align-center cursor-pointer mt-10 mx-10">
    <BaseIcon name="mdi:hand-back-right" color="#fff" />
    <span class="f-s-14 f-w-600 px-2">Text Area</span>
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

definePageMeta({
  layout: "docs",
});
</script>
