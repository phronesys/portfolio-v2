<template>
  <div class="nav-content">
    <div class="language">
      <flag-spain></flag-spain>
      <the-switch></the-switch>
      <flag-usa></flag-usa>
    </div>
    <div class="buttons">
      <the-button small>About</the-button>
      <the-button primary small>Contact</the-button>
    </div>
  </div>
</template>

<script setup>
import TheButton from "./Button.vue";
import TheSwitch from "./Switch.vue";
import FlagSpain from "./images/FlagSpain.vue";
import FlagUsa from "./images/FlagUsa.vue";
</script>

<style lang="postcss">
.nav-content {
  @apply flex flex-row items-center gap-10;
  & .language {
    @apply flex flex-row items-center gap-4 min-w-[96px];
    & > svg {
      @apply w-5 h-5;
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
