<template>
  <div class="flex flex-column">
    <BaseBreadCrumbs />
    <span class="f-s-14 f-w-600 pt-20 slid-up-animation-3">Base Textarea</span>
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
      >Normal Textarea Style</span
    >
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseTextarea
        label="Username"
        placeholder="Enter Username"
        class="mt-5"
      />
    </div>
    <CodeRender
      class="mt-15 slid-up-animation-3"
      sourceCode='<BaseTextarea label="Username" placeholder="Enter Username" />'
    />
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
      >Disabled Textarea Style</span
    >
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseTextarea
        label="Username"
        placeholder="Enter Username"
        disabled="true"
        class="mt-5"
      />
    </div>
    <CodeRender
      class="mt-15 slid-up-animation-3"
      sourceCode='<BaseTextarea label="Username" placeholder="Enter Username" disabled="true" />'
    />
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
      >Handle Error Just With Bind :errorMessage Props To BaseTextarea</span
    >
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseTextarea
        label="Username"
        placeholder="Enter Username"
        errorMessage="Username Is Required"
        class="mt-5"
      />
    </div>
    <CodeRender
      class="mt-15 slid-up-animation-3"
      sourceCode='<BaseTextarea label="Username" placeholder="Enter Username"/>'
    />
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
      >ModelValue Props BaseTextarea</span
    >
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseTextarea
        label="Username"
        placeholder="Enter Username"
        v-model="username"
        class="mt-5"
      />
      <span class="mt-15 f-s-14 f-w-600">Username Is {{ username }}</span>
    </div>
    <CodeRender
      class="mt-15 slid-up-animation-3"
      sourceCode='<BaseTextarea label="Username" placeholder="Enter Username" v-model="username"/> 
<span class="mt-15 f-s-14 f-w-600">Username Is {{ username }}</span>

<script setup>
const username = ref(null)
</script>'
    />
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
      >Custom Width And Height Textarea Width Props</span
    >
    <div class="flex flex-wrap w-100 mt-15 slid-up-animation-3">
      <BaseTextarea
        width="300px"
        height="45px"
        label="Username"
        placeholder="Enter Username"
        class="mt-5"
      />
    </div>
    <CodeRender
      class="mt-15 slid-up-animation-3"
      sourceCode='<BaseTextarea width="300px" height="45px" label="Username" placeholder="Enter Username" />'
    />
    <span class="f-s-12 f-w-600 pt-20 slid-up-animation-3"
      >Handle Validation With BaseTextarea</span
    >
    <div class="flex flex-column mt-20">
      <BaseTextarea
        label="title"
        placeholder="Enter title"
        v-model="form.title"
        validate="true"
        v-model:access="access"
        rules="length"
        minLength="20"
        maxLength="300"
      />
      <BaseTextarea
        label="bio"
        placeholder="Enter bio"
        v-model="form.bio"
        validate="true"
        v-model:access="access"
        rules="length"
        minLength="3"
        maxLength="20"
      />
      <BaseButton class="mt-10" name="clicked" @click="cliked" />
    </div>
    <CodeRender
      class="mt-15 slid-up-animation-3"
      sourceCode='<BaseTextarea label="title" placeholder="Enter title" v-model="form.title" validate="true" v-model:access="access"   rules="length" minLength="20" maxLength="300" />
<BaseTextarea label="bio" placeholder="Enter bio" v-model="form.bio" validate="true" v-model:access="access" rules="length" minLength="3" maxLength="20" />
<BaseButton class="mt-10" name="clicked" @click="cliked" />

<script setup>
const access = ref(true)
const form = ref({
  title: "",
  bio: ""
})

const cliked = () => {
  if(form.value.title && form.value.bio) {
   access.value ? alert("valid") : alert("not valid")
  } else {
    alert("not valid")
  }
}
</script>'
    />
    <span class="f-s-16 f-w-600 pt-20 slid-up-animation-3"
      >Read For More Components ?</span
    >
    <div class="flex flex-wrap mt-20">
      <BaseCard
        @click="navigateTo('/docs/button')"
        class="flex py-10 px-20 align-center cursor-pointer mt-10"
      >
        <BaseIcon name="mdi:hand-back-right" color="#fff" />
        <span class="f-s-14 f-w-600 px-2">Button</span>
      </BaseCard>
      <BaseCard
        @click="navigateTo('/docs/textarea')"
        class="flex py-10 px-20 align-center cursor-pointer mt-10 mx-10"
      >
        <BaseIcon name="mdi:hand-back-right" color="#fff" />
        <span class="f-s-14 f-w-600 px-2">Text Area</span>
      </BaseCard>
      <BaseCard
        @click="navigateTo('/docs/avatar')"
        class="flex py-10 px-20 align-center cursor-pointer mt-10"
      >
        <BaseIcon name="mdi:hand-back-right" color="#fff" />
        <span class="f-s-14 f-w-600 px-2">Avatar</span>
      </BaseCard>
      <BaseCard
        @click="navigateTo('/docs/select')"
        class="flex py-10 px-20 align-center cursor-pointer mt-10 mx-10"
      >
        <BaseIcon name="mdi:hand-back-right" color="#fff" />
        <span class="f-s-14 f-w-600 px-2">Select Items</span>
      </BaseCard>
    </div>
  </div>
</template>

<script setup>
const username = ref("");
const access = ref(true);
const form = ref({
  title: "",
  bio: "",
});

const cliked = () => {
  if (form.value.title && form.value.bio) {
    access.value ? alert("valid") : alert("not valid");
  } else {
    alert("not valid");
  }
};

definePageMeta({
  layout: "docs",
});
</script>
