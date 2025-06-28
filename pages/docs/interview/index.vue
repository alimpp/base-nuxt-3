<template>
  <div class="flex flex-column">
    <BaseBreadCrumbs />
    <span class="f-s-14 f-w-600 pt-20 slid-up-animation-3"
      >. Nuxt Version 3 Base Components Interview</span
    >
    <BaseCard class="mt-15 py-10 px-15 slid-up-animation-5">
      <span class="f-s-12 f-w-500">
        The purpose of creating this source code is to provide easy access to a
        number of components that are widely used and functional in large projects
      </span>
    </BaseCard>
    <span class="f-s-14 f-w-600 pt-20 slid-up-animation-3"
      >. No packages are used in this source code</span
    >
    <BaseCard class="mt-15 py-10 px-15 slid-up-animation-5">
      <span class="f-s-12 f-w-500 color-primary">
        "In this project, no external packages (such as Vuetify, Bootstrap,
        TailwindCSS, etc.) were used for building components. This is because our
        goal was to create a completely lightweight and dependency-free source
        code."
      </span>
    </BaseCard>
    
    <span class="f-s-14 f-w-600 pt-20 slid-up-animation-3"
      >. OOP Data Store</span
    >
    <BaseCard class="mt-15 py-15 px-15 flex flex-column">
      <span class="f-s-12 f-w-500 color-primary">
        The Pinia package was not used to create global states, and instead a data
        store architecture was used.
      </span>
      <span class="f-s-12 f-w-500 pt-15">
        Features of this architecture:
      </span>
      <span class="f-s-12 f-w-500 pt-15">
        Encapsulation: Each store is a separate class with associated state,
        getters, and actions.
      </span>
      <span class="f-s-12 f-w-500 pt-15">
        Object-Oriented: Using classes and OOP principles
      </span>
      <span class="f-s-12 f-w-500 pt-15">
        Reactivity: Using reactive and computed with Vue
      </span>
      <span class="f-s-12 f-w-500 pt-15"
        >Mandatory namespace: Each store must have a unique namespace.
      </span>
      <span class="f-s-12 f-w-500 pt-15">
        Global Access: Stores are registered once in the app and are available
        everywhere.
      </span>
      <span class="f-s-12 f-w-500 pt-15">
        Not using Pinia: Custom implementation using composables
      </span>
      <span class="f-s-12 f-w-500 pt-15">
        TypeScript Support: Strict typing for state and actions
      </span>
    </BaseCard>
    <span class="f-s-20 f-w-600 pt-15 slid-up-animation-5 color-primary">
      This architecture is suitable for large and complex projects and can be
      easily expanded.
    </span>
    <span class="f-s-14 f-w-600 pt-15">
      . CSS Necessary
    </span>
    <BaseCard class="mt-15 py-10 px-15 slid-up-animation-5">
      <span class="f-s-12 f-w-500">
        All commonly used CSS styles such as margin, padding, font size, font weight, background, text color, etc., are all written in the assets directory.
      </span>
    </BaseCard>
    <span class="f-s-16 f-w-500 pt-15 flex align-center">
     assets/scss/main.scss <BaseIcon name="line-md:arrow-down" class="mx-5" height="18px" />
    </span>
    <CodeRender class="mt-15" sourceCode='@import url("./background.scss");
@import url("./colors.scss");
@import url("./flex.scss");
@import url("./font_weight.scss");
@import url("./animations.scss");
@import url("./border.scss");

* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

@for $i from 1 through 100 {
  .w-#{$i} {
    width: #{$i}#{"%"};
  }
}

@for $i from 1 through 500 {
  .w-#{$i}-px {
    width: #{$i}px;
  }
}

@for $i from 1 through 100 {
  .h-#{$i}-dvh {
    height: #{$i}dvh;
  }
}

@for $i from 1 through 500 {
  .h-#{$i}-px {
    height: #{$i}px;
  }
}

@for $i from 1 through 100 {
  .f-s-#{$i} {
    font-size: #{$i}px;
  }
}

@for $i from 1 through 100 {
  .pt-#{$i} {
    padding-top: #{$i}px;
  }
}

@for $i from 1 through 100 {
  .pb-#{$i} {
    padding-bottom: #{$i}px;
  }
}

@for $i from 1 through 100 {
  .px-#{$i} {
    padding-left: #{$i}px;
    padding-right: #{$i}px;
  }
}

@for $i from 1 through 100 {
  .py-#{$i} {
    padding-top: #{$i}px;
    padding-bottom: #{$i}px;
  }
}

@for $i from 1 through 100 {
  .mt-#{$i} {
    margin-top: #{$i}px;
  }
}

@for $i from 1 through 100 {
  .mb-#{$i} {
    margin-bottom: #{$i}px;
  }
}

@for $i from 1 through 100 {
  .mx-#{$i} {
    margin-left: #{$i}px;
    margin-right: #{$i}px;
  }
}

@for $i from 1 through 100 {
  .my-#{$i} {
    margin-top: #{$i}px;
    margin-bottom: #{$i}px;
  }
}

.cursor-pointer {
  cursor: pointer;
}

.border-rounded {
  border-radius: 5px;
}

.border-circle {
  border-radius: 50%;
}

.y-scroll {
  overflow-y: scroll;
}

.y-scroll::-webkit-scrollbar {
  display: none;
}

.overflow-hidden {
  overflow: hidden;
}' />
  </div>
</template>
<script setup>
definePageMeta({
  layout: "docs",
});
</script>
