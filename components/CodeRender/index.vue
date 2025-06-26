<template>
  <div class="flex flex-column">
    <div class="flex w-100 justify-end">
      <BaseButton
        v-if="copyState"
        name="Copied"
        bg="bg-none"
        width="80px"
        color="color-gray"
        icon="material-symbols-light:check-circle-outline"
        class="fade-animation-1s"
        icon-width="25px"
        icon-height="25px"
      />
      <BaseButton
        v-else
        name="Copy Source Code"
        bg="bg-none"
        width="130px"
        color="color-gray"
        icon="solar:copy-line-duotone"
        @click="copyToClipboard()"
        class="fade-animation-1s"
      />
    </div>
    <pre
      class="code-block"
    ><code :class="`language-${language}`">{{ sourceCode }}</code></pre>
  </div>
</template>

<script setup>
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const props = defineProps({
  sourceCode: {
    default: "",
    type: String,
  },
  language: {
    type: String,
    default: "javascript",
  },
});

const copyState = ref(false);
const copyToClipboard = () => {
  copyState.value = true;
  navigator.clipboard.writeText(props.sourceCode);
  setTimeout(() => {
    copyState.value = false;
  }, 2000);
};

onMounted(() => {
  Prism.highlightAll();
});
</script>

<style scoped>
.code-block {
  white-space: pre;
  overflow-x: auto;
  font-family: monospace;
  line-height: 1.6;
  background: #202020;
  padding: 1em;
  border-radius: 8px;
}

pre[class*="language-"] {
  white-space: pre !important;
}
</style>
