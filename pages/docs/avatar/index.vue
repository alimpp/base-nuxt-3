<template>
  <div class="flex flex-column">
     <BaseBreadCrumbs />
      <span class="f-s-14 f-w-600 pt-20 slid-up-animation-3"
        >Base Avatar</span>
      <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
        >Normal Avatar Style</span
      >
      <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
        <BaseAvatar character="JD" />
      </div>
      <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseAvatar character="JD" />'/>
       <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
        >Add Background To Avatar</span
      >
      <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
        <BaseAvatar character="JD" bgClass="bg-warning" />
        <BaseAvatar character="JD" bgClass="bg-red" class="mx-10" />
        <BaseAvatar character="JD" bgClass="bg-success" />
      </div>
      <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseAvatar character="JD" bgClass="bg-red" />'/>
      <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
        >Custom Width And Height To Avatar</span
      >
      <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
        <BaseAvatar character="JD" width="60px" height="60px" />
      </div>
      <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseAvatar character="JD" width="60px" height="60px" />'/>
       <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
        >Custom Character Size Avatar</span
      >
      <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
        <BaseAvatar character="JD" width="60px" height="60px" characterSize="f-s-30" />
      </div>
      <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseAvatar character="JD" width="60px" height="60px" characterSize="f-s-30" />'/>
      <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
        >Image Avatar Style</span
      >
      <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
        <BaseAvatar width="65px" height="65px" avatar="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" />
      </div>
      <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseAvatar width="65px" height="65px" avatar="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" />'/>
      <div class="flex flex-wrap mt-20">
      <BaseCard @click="navigateTo('/docs/input')"  class="flex py-10 px-20 align-center cursor-pointer mt-10">
        <BaseIcon name="mdi:hand-back-right" color="#fff" />
        <span class="f-s-14 f-w-600 px-2">Text Input</span>
      </BaseCard>
      <BaseCard @click="navigateTo('/docs/textarea')"  class="flex py-10 px-20 align-center cursor-pointer mt-10 mx-10">
        <BaseIcon name="mdi:hand-back-right" color="#fff" />
        <span class="f-s-14 f-w-600 px-2">Text Area</span>
      </BaseCard>
      <BaseCard @click="navigateTo('/docs/button')"  class="flex py-10 px-20 align-center cursor-pointer mt-10">
        <BaseIcon name="mdi:hand-back-right" color="#fff" />
        <span class="f-s-14 f-w-600 px-2">Button</span>
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
