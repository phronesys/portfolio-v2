<template>
  <button :class="{ primary, secondary, light, small }">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
button {
  @apply bg-black text-white max-w-max border-2 border-transparent;
  @apply hover:border-white transition-colors duration-300 ease-linear;
  @apply text-xs px-3 py-2 rounded-md;
  @apply sm:text-sm;
  @apply md:text-base sm:px-4 sm:py-3 md:rounded-lg;
  @apply xl:text-xl xl:px-5 xl:py-4;
}
button.primary {
  @apply bg-pink-600;
}
button.secondary {
  @apply bg-purple-600;
}
button.tertiary {
  @apply bg-green-500;
}
button.light {
  @apply bg-white text-black;
}
button.small {
  @apply !text-sm !px-3 !py-2;
}
</style>
