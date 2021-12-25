<template>
  <button :class="{ primary, secondary, light }">
    <slot />
  </button>
</template>

<script>
import useBreakpoints from "../modules/useBreakpoints";
export default {
  name: "Button",
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
  },
  setup() {
    const { type } = useBreakpoints();
    return { type };
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
button.light {
  @apply bg-white text-black;
}
</style>
