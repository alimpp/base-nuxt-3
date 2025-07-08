<template>
  <div class="flex flex-column">
   <BaseBreadCrumbs />
   <span class="f-s-14 f-w-600 pt-20 slid-up-animation-3"
      >Base Button</span>
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
      >Normal Button Style</span
    >
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseButton name="button" class="mx-5 mt-5" />
      <BaseButton name="button" bg="bg-secondary" class="mx-5 mt-5" />
      <BaseButton name="button" class="mx-5 mt-5" bg="bg-success" />
      <BaseButton name="button" bg="bg-info" class="mx-5 mt-5" />
      <BaseButton name="button" class="mx-5 mt-5" bg="bg-warning" />
      <BaseButton name="button" bg="bg-danger" class="mx-5 mt-5" />
      <BaseButton name="button" class="mx-5 mt-5" bg="bg-red" />
      <BaseButton name="button" bg="bg-gray" class="mx-5 mt-5" />
      <BaseButton name="button" class="mx-5 mt-5" bg="bg-dark" />
      <BaseButton name="button" bg="bg-white" class="mx-5 mt-5" />
    </div>
    <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseButton name="button" />
<BaseButton name="button" bg="bg-secondary" />
<BaseButton name="button" bg="bg-success" />
<BaseButton name="button" bg="bg-info" />
<BaseButton name="button" bg="bg-warning" />
<BaseButton name="button" bg="bg-danger" />
<BaseButton name="button" bg="bg-red" />
<BaseButton name="button" bg="bg-gray" />
<BaseButton name="button" bg="bg-dark" />
<BaseButton name="button" bg="bg-white" />
    '/>
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
      >Disabled Button Style</span
    >
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseButton name="button" disabled="true" />
    </div>
    <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseButton name="button" disabled="true" />'/>
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
      >Loading State With Props</span
    >
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseButton :loading="loading" name="button" class="mx-5 mt-5" />
      <BaseButton :loading="loading" name="button" bg="bg-secondary" class="mx-5 mt-5" />
      <BaseButton :loading="loading" name="button" class="mx-5 mt-5" bg="bg-success" />
      <BaseButton :loading="loading" name="button" bg="bg-info" class="mx-5 mt-5" />
      <BaseButton :loading="loading" name="button" class="mx-5 mt-5" bg="bg-warning" />
      <BaseButton :loading="loading" name="button" bg="bg-danger" class="mx-5 mt-5" />
      <BaseButton :loading="loading" name="button" class="mx-5 mt-5" bg="bg-red" />
      <BaseButton :loading="loading" name="button" bg="bg-gray" class="mx-5 mt-5" />
      <BaseButton :loading="loading" name="button" class="mx-5 mt-5" bg="bg-dark" />
      <BaseButton :loading="loading" name="button" bg="bg-white" class="mx-5 mt-5" />
    </div>
    <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseButton :loading="loading" name="button" />
<script setup>
const loading = ref(true)
</script>
' 
    />
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3 pt-15"
      >Width Button Controll With Props</span
    >
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseButton name="button" class="mx-5 mt-5" />
      <BaseButton name="button" width="120px" class="mx-5 mt-5" />
      <BaseButton name="button" width="150px" class="mx-5 mt-5" />
    </div>
    <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseButton name="button" width="150px" />'/>
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3 pt-15" 
      >Height Button Controll With Props</span
    >
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseButton name="button" class="mx-5 mt-5" />
      <BaseButton name="button" width="120px" height="40px" class="mx-5 mt-5" />
      <BaseButton name="button" width="150px" height="45px" class="mx-5 mt-5" />
    </div>
    <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseButton name="button" height="45px" />'/>
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3">Button With Icon</span>
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseButton name="button" class="mx-5 mt-5" icon="solar:alarm-broken" />
      <BaseButton name="button" class="mx-5 mt-5" icon="solar:album-outline" />
      <BaseButton name="button" class="mx-5 mt-5" icon="solar:bag-2-broken" />
    </div>
    <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseButton name="button" icon="solar:alarm-broken" />'/>
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3">Button With Just Icon</span>
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseButton width="40px" class="mx-5 mt-5" icon="solar:alarm-broken" />
      <BaseButton width="40px" class="mx-5 mt-5" icon="solar:album-outline" />
      <BaseButton width="40px" class="mx-5 mt-5" icon="solar:bag-2-broken" />
    </div>
    <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseButton icon="solar:alarm-broken" />'/>
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3">Add Custom width And Height To Icon</span>
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseButton name="button" class="mx-5 mt-5" icon="solar:alarm-broken" iconWidth="22" iconHeight="22" />
      <BaseButton name="button" class="mx-5 mt-5" icon="solar:album-outline" iconWidth="24" iconHeight="24" />
      <BaseButton name="button" class="mx-5 mt-5" icon="solar:bag-2-broken" iconWidth="26" iconHeight="26" />
    </div>
    <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseButton name="button" icon="solar:alarm-broken" iconWidth="26" iconHeight="26" />'/>
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3">Add Custom Font Size To Button</span>
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseButton name="button" class="mx-5 mt-5" fontSize="f-s-16" />
      <BaseButton name="button" class="mx-5 mt-5" fontSize="f-s-18" />
      <BaseButton name="button" class="mx-5 mt-5" fontSize="f-s-20" />
    </div>
    <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseButton name="button" fontSize="f-s-16" />
<BaseButton name="button" fontSize="f-s-18" />
<BaseButton name="button" fontSize="f-s-20" />'/>
<span class="f-s-12 f-w-600 pt-20 slid-up-animation-3">Add Custom Font Weight To Button</span>
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseButton name="button" class="mx-5 mt-5" fontWeight="f-w-100" />
      <BaseButton name="button" class="mx-5 mt-5" fontWeight="f-w-900" />
    </div>
    <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseButton name="button" fontWeight="f-w-100" />
<BaseButton name="button" fontWeight="f-w-900" />'/>
<span class="f-s-12 f-w-600 pt-20 slid-up-animation-3">Outline Style Button</span>
<div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseButton name="button" class="mx-5 mt-5" bg="bg-none"  border="border-primary" />
      <BaseButton name="button" class="mx-5 mt-5" bg="bg-none"  border="border-secondary" />
      <BaseButton name="button" class="mx-5 mt-5" bg="bg-none"  border="border-success" />
      <BaseButton name="button" class="mx-5 mt-5" bg="bg-none"  border="border-danger" />
      <BaseButton name="button" class="mx-5 mt-5" bg="bg-none"  border="border-red" />
      <BaseButton name="button" class="mx-5 mt-5" bg="bg-none"  border="border-gray" />
    </div>
    <CodeRender class="mt-15 slid-up-animation-3" sourceCode='<BaseButton name="button" bg="bg-none"  border="border-primary" />
<BaseButton name="button" bg="bg-none"  border="border-secondary" />
<BaseButton name="button" bg="bg-none"  border="border-success" />
<BaseButton name="button" bg="bg-none"  border="border-danger" />
<BaseButton name="button" bg="bg-none"  border="border-red" />
<BaseButton name="button" bg="bg-none"  border="border-gray" />'/>
<BaseDivider class="mt-20" />
<span class="f-s-16 f-w-600 pt-20 slid-up-animation-3">Read For More Components ?</span>
<div class="flex flex-wrap mt-20">
  <BaseCard @click="navigateTo('/docs/input')"  class="flex py-10 px-20 align-center cursor-pointer mt-10">
    <BaseIcon name="mdi:hand-back-right" color="#fff" />
    <span class="f-s-14 f-w-600 px-2">Text Input</span>
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
const loading = ref(true)
definePageMeta({
  layout: "docs",
});
</script>
