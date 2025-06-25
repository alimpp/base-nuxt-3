<template>
    <div class="flex flex-column">
      <span class="f-s-12 f-w-500" :class="{ 'color-danger': errorMessage }">
        {{ label }}
      </span>
      <textarea
        rows="10"
        cols="30"
        :style="{
          width: `${width}`,
        }"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :type="type"
        :class="{
          error: errorMessage,
        }"
        :disabled="disabled"
        :placeholder="placeholder"
        class="mt-2"
      ></textarea>
      <span v-if="errorMessage" class="color-danger f-s-12 f-w-500">
        {{ errorMessage }}
      </span>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    label: {
      type: String,
      default: "",
      required: false,
    },
    type: {
      type: String,
      default: "",
      required: false,
    },
    errorMessage: {
      type: String,
      default: "",
      required: false,
    },
    modelValue: {
      type: String,
      default: "",
      required: false,
    },
    placeholder: {
      type: String,
      default: "",
      required: false,
    },
    height: {
      type: String,
      default: "40px",
    },
    width: {
      type: String,
      default: "100%",
    },
  });
  </script>
  
  <style scoped lang="scss">
  textarea {
    padding: 0 7px;
    outline: none;
    border: 1px solid #8481812f;
    border-radius: 6px;
    color: black;
  }
  
  .error {
    border: 2px solid #f50000;
    color: #f50000;
  }
  </style>
  