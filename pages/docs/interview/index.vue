<template>
  <div class="flex flex-column">
    <BaseBreadCrumbs />
    <span class="f-s-14 f-w-600 pt-20 slid-up-animation-3"
      >. Nuxt Version 3 Base Components Interview</span
    >
    <span class="f-s-12 f-w-500 slid-up-animation-5 pt-15">
      The purpose of creating this source code is to provide easy access to a
      number of components that are widely used and functional in large projects
    </span>
    <span class="f-s-14 f-w-600 pt-20 slid-up-animation-3"
      >. No packages are used in this source code</span
    >
    <span class="f-s-12 f-w-500 color-primary pt-15 slid-up-animation-5">
      "In this project, no external packages (such as Vuetify, Bootstrap,
      TailwindCSS, etc.) were used for building components. This is because our
      goal was to create a completely lightweight and dependency-free source
      code."
    </span>
    <span class="f-s-14 f-w-600 pt-20 slid-up-animation-3"
      >. OOP Data Store</span
    >
    <span class="f-s-12 f-w-500 color-primary pt-15 slid-up-animation-5">
      The Pinia package was not used to create global states, and instead a data
      store architecture was used.
    </span>
    <span class="f-s-12 f-w-500 pt-15 slid-up-animation-5">
      Features of this architecture:
    </span>
    <span class="f-s-12 f-w-500 pt-15 slid-up-animation-5">
      Encapsulation: Each store is a separate class with associated state,
      getters, and actions.
    </span>
    <span class="f-s-12 f-w-500 pt-15 slid-up-animation-5">
      Object-Oriented: Using classes and OOP principles
    </span>
    <span class="f-s-12 f-w-500 pt-15 slid-up-animation-5">
      Reactivity: Using reactive and computed with Vue
    </span>
    <span class="f-s-12 f-w-500 pt-15 slid-up-animation-5"
      >Mandatory namespace: Each store must have a unique namespace.
    </span>
    <span class="f-s-12 f-w-500 pt-15 slid-up-animation-5">
      Global Access: Stores are registered once in the app and are available
      everywhere.
    </span>
    <span class="f-s-12 f-w-500 pt-15 slid-up-animation-5">
      Not using Pinia: Custom implementation using composables
    </span>
    <span class="f-s-12 f-w-500 pt-15 slid-up-animation-5">
      TypeScript Support: Strict typing for state and actions
    </span>
    <span class="f-s-20 f-w-600 pt-15 slid-up-animation-5">
      This architecture is suitable for large and complex projects and can be
      easily expanded.
    </span>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "docs",
});
</script>
