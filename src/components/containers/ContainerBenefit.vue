<template>
  <div class="container" :class="{color: colored, left: left}">
    <div class="text" :class="{ dark: dark }">
      <h2>
        <slot name="title"/>
      </h2>
      <h4>
        <slot name="subtitle" />
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    colored: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  }
};
</script>

<style lang="postcss" scoped>
.container {
  @apply rounded-xl w-[800px] h-[400px] flex justify-start items-start relative;
}
.container.color {
  @apply bg-gradient-to-tr from-purple-500 to-green-400; 
  @apply hover:w-[805px] hover:h-[405px] transition-all duration-200 ease-linear;
}
.container.color.left {
  @apply justify-end items-end;
}
.container.color.left .text {
  @apply -top-1 -right-1 bottom-2 left-2;
  @apply hover:-right-3 hover:-top-3 hover:left-4 hover:bottom-4;
}
.text {
  @apply absolute -top-1 -left-1 right-2 bottom-2 text-left flex flex-col gap-8;
  @apply bg-white rounded-lg p-8;
  @apply hover:-left-3 hover:-top-3 hover:right-4 hover:bottom-4 hover:shadow-2xl transition-all duration-200 ease-linear;
}
.text h2 {
  @apply text-5xl font-bold text-purple-500;
}
.text h4 {
  @apply text-2xl text-gray-600;
}

/* Dark mode */
.text.dark {
  @apply bg-black;
}
.text.dark h2 {
  @apply text-green-400;
}
.text.dark h4 {
  @apply text-white;
}
</style>
