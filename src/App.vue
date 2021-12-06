<template>
  <navigation-bar></navigation-bar>
  <section-landing></section-landing>
  <section-projects></section-projects>
  <!-- <section-why></section-why> -->
  <!-- <section-contact></section-contact> -->
  <div id="container"></div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import SectionLanding from "./sections/Landing.vue";
import SectionProjects from "./sections/Projects.vue";
import { useThree } from "./modules/useThreeBackground";

export default {
  name: "App",
  components: {
    NavigationBar,
    SectionLanding,
    SectionProjects,
  },
  mounted() {
    useThree("#container");
  },
};
</script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css2?family=Sarala:wght@400;700&display=swap");
#app {
  font-family: "Sarala", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#container {
  @apply fixed z-0 top-0 left-0 right-0 bottom-0;
}
</style>
