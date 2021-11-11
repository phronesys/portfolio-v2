<template>
  <section>
    <div class="left">
      <h1>
        Hi there! <br />
        I'm Daniel Dazarola <br />a <span>Front End Developer</span>
      </h1>
      <h3>
        I use the latest tech to build<br />
        powerful <span>web applications</span>
      </h3>
    </div>
    <div class="right">
      <div class="circle crimson" />
      <div class="circle purple" />
      <svg-landing></svg-landing>
    </div>
  </section>
</template>

<script>
import SvgLanding from "../components/images/SvgLanding.vue";
export default {
  name: "Landing",
  components: {
    SvgLanding,
  },
};
</script>

<style lang="postcss" scoped>
section {
  @apply px-8 pt-20 bg-[#020202] h-[700px] w-full text-white overflow-hidden;
  @apply lg:h-[800px] lg:px-36 lg:flex-row;
  @apply flex flex-col gap-10;
  & .left {
    @apply flex flex-col justify-center gap-4 z-[2];
    @apply xl:w-3/4 xl:gap-10;
    & h1 {
      @apply text-3xl w-full leading-9;
      @apply sm:text-5xl md:text-6xl xl:text-7xl lg:leading-normal;
      & span {
        @apply text-green-500;
      }
    }
    & h3 {
      @apply text-xl leading-tight;
      @apply sm:text-2xl md:text-3xl lg:text-4xl;
      & span {
        @apply text-purple-600;
      }
    }
  }
  & .right {
    @apply w-full h-full relative flex flex-row bg-white;
    & .circle {
      @apply rounded-full absolute z-[0];
      &.purple {
        @apply bg-purple-600;
        @apply  xl:w-[500px] xl:h-[500px] xl:top-[100px] xl:left-0;
        @apply  sm:w-[375px] sm:h-[375px] sm:top-[-30px] sm:left-[10px];
        @apply  w-[275px] h-[275px] top-[30px] left-[10px];
      }
      &.crimson {
        @apply bg-pink-600;
        @apply xl:w-[475px] xl:h-[475px] xl:bottom-[150px];
        @apply sm:w-[275px] sm:h-[275px] sm:bottom-[-50px];
        @apply xl:w-[475px] xl:h-[475px] xl:bottom-[150px];
        @apply  w-[275px] h-[275px] top-[50px] right-[10px];
      }
    }
    & svg {
      @apply z-[1] w-[400px] absolute;
      @apply  w-[275px] h-[275px] top-[30px] left-[10px];
    }
  }
}
</style>
