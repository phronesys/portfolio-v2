<template>
  <section class="dark">
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
  @apply px-4 py-2 flex flex-row items-center fixed top-0 left-0 right-0 z-20;
  @apply xl:py-10 xl:px-36 w-full xl:h-20;
  @apply bg-black text-white transition-all duration-200 ease-linear;
  & > svg {
    @apply w-24 xl:w-32;
  }
  & > ul {
    @apply flex flex-row font-medium mr-4 gap-4 text-xs;
    @apply xl:text-lg xl:mr-8 xl:gap-8;
  }
  & > .language {
    @apply ml-auto mr-8 flex flex-row items-center gap-4;
    & > svg {
      @apply w-5 h-5;
    }
  }
}
</style>
