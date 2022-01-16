<template>
  <div class="nav-content">
    <div class="language">
      <svg-flag-spain :class="{ selected: !english }"></svg-flag-spain>
      <base-switch v-model="english"></base-switch>
      <svg-flag-usa :class="{ selected: english }"></svg-flag-usa>
    </div>
    <div class="buttons">
      <base-button small>{{ t("button.about") }}</base-button>
      <base-button primary small>{{ t("button.contact") }}</base-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

import BaseButton from "./BaseButton.vue";
import BaseSwitch from "./BaseSwitch.vue";
import SvgFlagSpain from "./svg/SvgFlagSpain.vue";
import SvgFlagUsa from "./svg/SvgFlagUsa.vue";

const english = ref(false);

const { t, locale } = useI18n({
  inheritLocale: true,
});
locale.value = "es"
</script>

<i18n lang="yaml">
es:
  button:
    about: "Acerca"
    contact: "Contáctame"
en:
  button:
    about: "About"
    contact: "Contact"
</i18n>

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
