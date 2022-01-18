<template>
  <section>
    <h1>
      {{ t("title.greeting") }} <br />
      {{ t("title.name") }} <br /><span>{{ t("title.job") }}</span>
    </h1>
    <h3>
      {{ t("subtitle.verb") }}<br />
      <span>{{ t("subtitle.subject") }}</span>
    </h3>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n({
  inheritLocale: true,
});

locale.value = "es";
</script>

<i18n lang="yaml">
es:
  title:
    greeting: "Hola que tal! "
    name: "Soy Daniel Dazarola"
    job: "un Desarrollador Front End"
  subtitle:
    verb: "Uso las últimas tecnologías para armar "
    subject: "poderosas aplicaciones web"
en:
  title:
    greeting: "Hi there! "
    name: "I'm Daniel Dazarola"
    job: "a Front End Developer"
  subtitle:
    verb: "I use the latest tech to build"
    subject: "powerful web applications"
</i18n>

<style lang="postcss" scoped>
section {
  @apply relative w-max text-white overflow-hidden z-[1];
  @apply flex flex-col gap-4 mx-auto;
  @apply bg-gradient-to-r from-black to-transparent opacity-90;
  @apply lg:gap-10;
  & h1 {
    @apply text-2xl leading-8;
    @apply xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl;
    @apply lg:leading-snug;
    @apply bg-gradient-to-l from-green-500 via-green-500 to-white text-transparent bg-clip-text;
  }
  & h3 {
    @apply text-xl leading-tight;
    @apply lg:leading-snug xl:leading-normal;
    @apply xs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl;
    @apply bg-gradient-to-l from-purple-500 via-purple-400 to-white text-transparent bg-clip-text;
  }
}
</style>
