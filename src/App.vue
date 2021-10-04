<template>
  <navigation-bar></navigation-bar>
  <section-landing></section-landing>
  <section-benefit></section-benefit>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import SectionLanding from "./sections/Landing.vue";
import SectionBenefit from "./sections/Benefit.vue";
export default { 
  name: "App",
  components: {
    NavigationBar,
    SectionLanding,
    SectionBenefit,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
