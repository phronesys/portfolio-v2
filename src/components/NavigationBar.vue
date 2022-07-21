<template>
  <section>
    <svg-logo />
    <div class="nav-content">
      <div class="language">
        <svg-flag-spain
          :class="{ selected: !english }"
          @click="setLanguage('es')"
        />
        <base-switch v-model="english" />
        <svg-flag-usa
          :class="{ selected: english }"
          @click="setLanguage('en')"
        />
      </div>
    </div>
  </section>
</template>

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

<script setup>
import SvgLogo from "./svg/SvgLogo.vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

import BaseSwitch from "./BaseSwitch.vue";
import SvgFlagSpain from "./svg/SvgFlagSpain.vue";
import SvgFlagUsa from "./svg/SvgFlagUsa.vue";

const english = ref(false);
const { t, locale } = useI18n({
  inheritLocale: true,
});
locale.value = "es";

const setLanguage = (l) => {
  if(l === 'en') english.value = true;
  else english.value = false;
};
</script>

<style lang="postcss" scoped>
section {
  @apply px-8 py-4 flex flex-row items-center justify-between fixed top-0 left-0 right-0 z-20;
  @apply xl:py-10 xl:px-36 w-full xl:h-20;
  @apply bg-gradient-to-t from-transparent to-black text-white transition-all duration-200 ease-linear;
  & > svg {
    @apply w-24 xl:w-32;
  }
}

section .nav-content {
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
}
</style>
