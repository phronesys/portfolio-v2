<template>
  <navigation-bar></navigation-bar>
  <section-landing></section-landing>
  <section-projects></section-projects>
  <section-why></section-why>
  <section-contact></section-contact>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import SectionLanding from "./sections/Landing.vue";
import SectionWhy from "./sections/Why.vue";
import SectionProjects from "./sections/Projects.vue";
import SectionContact from "./sections/Contact.vue";

export default { 
  name: "App",
  components: {
    NavigationBar,
    SectionLanding,
    SectionWhy,
    SectionProjects,
    SectionContact,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sarala:wght@400;700&display=swap');
#app {
  font-family:"Sarala", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
