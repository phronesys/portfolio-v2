<template>
  <div class="nav-content">
    <div class="language">
      <flag-spain :class="{ selected: !english }"></flag-spain>
      <the-switch v-model="english"></the-switch>
      <flag-usa :class="{ selected: english }"></flag-usa>
    </div>
    <div class="buttons">
      <the-button small>About</the-button>
      <the-button primary small>Contact</the-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TheButton from "./Button.vue";
import TheSwitch from "./Switch.vue";
import FlagSpain from "./images/FlagSpain.vue";
import FlagUsa from "./images/FlagUsa.vue";

const english = ref(false);
</script>

<style lang="postcss">
.nav-content {
  @apply flex flex-row items-center gap-10;
  & .language {
    @apply flex flex-row items-center gap-4 min-w-[96px];
    & > svg {
      @apply w-7 h-7 border-2 border-transparent rounded-full;
      @apply transition-colors duration-200 ease-in;
      &.selected {
        @apply border-pink-600;
      }
    }
  }
  & .buttons {
    @apply flex flex-row items-center gap-4;
  }
}
.modal .nav-content {
  @apply flex flex-col;
}
</style>
