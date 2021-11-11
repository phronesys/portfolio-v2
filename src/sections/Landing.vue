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
      <div class="circle crimson"></div>
      <div class="circle purple"></div>
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
  @apply bg-[#020202] h-[700px] w-full text-white px-8 pt-20 overflow-hidden;
  @apply xl:h-[800px] xl:px-36 xl:flex-row;
  @apply flex flex-col gap-10;
  & .left {
    @apply flex flex-col justify-center gap-4 z-[2];
    @apply xl:w-3/4 xl:gap-10;
    & h1 {
      @apply text-3xl w-full leading-9;
      @apply xl:text-7xl xl:leading-normal;
      & span {
        @apply text-green-500;
      }
    }
    & h3 {
      @apply text-xl leading-tight;
      @apply xl:text-4xl;
      & span {
        @apply text-purple-600;
      }
    }
  }
  & .right {
    @apply w-full relative flex flex-row justify-center items-center;
    @apply xl:w-1/4 xl:flex-col;
    & .circle {
      @apply rounded-full absolute z-[0];
      &.purple {
        @apply bg-purple-600 left-[-30px] w-64 h-64;
        @apply xl:w-[500px] xl:h-[500px] xl:top-[100px] xl:left-0;
      }
      &.crimson {
        @apply bg-pink-600 right-0 w-52 h-52;
        @apply xl:w-[475px] xl:h-[475px] xl:bottom-[150px];
      }
    }
    & svg {
      @apply z-[1];
    }
  }
}
</style>
