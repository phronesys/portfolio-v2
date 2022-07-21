<template>
  <section>
    <h1>
      {{ t("title.name") }}
    </h1>
    <h3>
      {{ t("title.job") }}
    </h3>
    <contact-list></contact-list>
  </section>
</template>

<script setup>
import ContactList from "../components/ContactList.vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n({
  inheritLocale: true,
});

locale.value = "es";
</script>

<i18n lang="yaml">
es:
  title:
    name: "Daniel Dazarola"
    job: "Desarrollador Front-End"
en:
  title:
    name: "Daniel Dazarola"
    job: "Front-End Developer"
</i18n>

<style lang="postcss" scoped>
section {
  @apply relative text-white overflow-hidden z-[1] w-full pt-32 lg:py-[200px];
  @apply flex flex-col gap-4 justify-center items-center;
  @apply bg-gradient-to-b from-gray-900/20 via-gray-900/30 to-gray-900/20;
  & h1 {
    @apply text-2xl leading-8;
    @apply xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl;
    @apply lg:leading-snug;
  }
  & h3 {
    @apply text-xl leading-tight;
    @apply lg:leading-snug xl:leading-normal;
    @apply xs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl;
    @apply text-purple-500;
  }
}
</style>
