<template>
  <div class="language">
    <flag-spain></flag-spain>
    <the-switch></the-switch>
    <flag-usa></flag-usa>
  </div>
  <ul>
    <li>About</li>
  </ul>
  <the-button primary >Contact</the-button>
</template>

<script>
import TheButton from "./Button.vue";
import TheSwitch from "./Switch.vue";
import FlagSpain from "./images/FlagSpain.vue";
import FlagUsa from "./images/FlagUsa.vue";
export default {
  components: {
    TheButton,
    FlagSpain,
    FlagUsa,
    TheSwitch,
  },
};
</script>

<style lang="postcss" scoped>
ul {
  @apply flex flex-row font-medium mr-4 gap-4 text-xs;
  @apply xl:text-lg xl:mr-8 xl:gap-8;
}
.language {
  @apply ml-auto mr-8 flex flex-row items-center gap-4 min-w-[96px];
  & > svg {
    @apply w-5 h-5;
  }
}
</style>
