<template>
  <section :class="{ dark }">
    <svg-logo />
    <div class="language">
      <flag-spain></flag-spain>
      <the-switch></the-switch>
      <flag-usa></flag-usa>
    </div>
    <ul>
      <li>About</li>
    </ul>
    <the-button primary>Contact</the-button>
  </section>
</template>

<script>
import TheButton from "./Button.vue";
import TheSwitch from "./Switch.vue";
import SvgLogo from "./images/SvgLogo.vue";
import FlagSpain from "./images/FlagSpain.vue";
import FlagUsa from "./images/FlagUsa.vue";
export default {
  name: "NavigationBar",
  components: {
    SvgLogo,
    TheButton,
    FlagSpain,
    FlagUsa,
    TheSwitch,
  },
  data: () => ({
    scrollPosition: 0,
  }),
  computed: {
    dark() {
      return this.scrollPosition > 700;
    },
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style lang="postcss" scoped>
section {
  @apply py-10 px-36 w-full h-20 flex flex-row items-center fixed top-0 left-0 right-0 z-20;
  @apply bg-transparent text-white transition-all duration-200 ease-linear;
  &.dark {
    @apply bg-black;
  }
  & > ul {
    @apply mr-8 flex flex-row gap-8 text-lg font-medium;
  }
  & > .language {
    @apply ml-auto mr-8 flex flex-row items-center gap-4;
  }
}
</style>
