<template>
  <navigation-bar></navigation-bar>
  <div class="main">
    <section-landing></section-landing>
    <section-projects></section-projects>
    <section-skills></section-skills>
    <section-contact id="contact"></section-contact>
  </div>

  <div id="container"></div>
</template>

<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import SectionLanding from "./sections/Landing.vue";
import SectionProjects from "./sections/Projects.vue";
import SectionSkills from "./sections/Skills.vue";
import SectionContact from "./sections/Contact.vue";

import { onMounted } from "vue";
import { useThree } from "./modules/useThreeBackground";

onMounted(() => {
  useThree("#container");
});
</script>

<style lang="postcss">
/* @import url("https://fonts.googleapis.com/css2?family=Sarala:wght@400;700&display=swap"); */
#app {
  font-family: "Sarala", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.main {
  @apply px-8 py-32 flex flex-col gap-40 z-10 lg:gap-60 xl:gap-80 2xl:gap-[400px];
}
#container {
  @apply bg-black fixed z-0 top-0 left-0 right-0 bottom-0;
}
html {
  scroll-behavior: smooth;
}
</style>
