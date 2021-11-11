<template>
  <button :class="{ primary, secondary, light, small, big }">
    <slot />
  </button>
</template>

<script>
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
    small: {
      type: Boolean,
      default: false,
    },
    big: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
button {
  @apply bg-black text-white text-xs px-1 py-0.5 max-w-max rounded border-2 border-transparent;
  @apply lg:px-4 lg:py-2 lg:rounded-lg;
  @apply hover:border-white transition-colors duration-300 ease-linear;
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
button.big {
  @apply font-semibold text-xl px-6 py-3 rounded-2xl;
}
</style>
