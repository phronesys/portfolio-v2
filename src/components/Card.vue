<template>
  <div class="card" :class="{ primary, secondary, light }">
    <h1>
      <slot name="title" /> 
    </h1>
    <p>
      <slot name="body" /> 
    </p>
    <div>
      <slot name="footer" /> 
    </div>
  </div>
</template>

<script>
export default {
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
};
</script>

<style lang="postcss" scoped>
.card {
  @apply max-h-full min-h-[max-content] bg-black rounded-lg p-4 flex flex-col gap-4 text-white;
}
.card > h1 {
  @apply text-2xl;
}

.card.primary {
  @apply bg-green-400;
}
.card.primary button {
  @apply bg-purple-500;
}
.card.secondary {
  @apply bg-purple-500;
}
.card.secondary button {
  @apply bg-green-400;
}
</style>
