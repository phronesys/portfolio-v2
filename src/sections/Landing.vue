<template>
  <section>
    <div class="left">
      <h1>Hi there! <br> I'm Daniel Dazarola <br>a <span>Front End Developer</span></h1>
      <h3>I use the latest tech to build<br> powerful <span>web applications</span></h3>
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
    SvgLanding
  },
};
</script>

<style lang="postcss" scoped>
section {
  @apply bg-[#020202] h-[800px] w-full text-white px-36 overflow-hidden;
  @apply flex flex-row;
  & .left {
    @apply w-3/4 flex flex-col justify-center gap-10;
    & h1 {
      @apply text-7xl w-full leading-normal;
      & span {
        @apply text-green-500;
      }
    }
    & h3 {
      @apply text-4xl leading-tight;
      & span {
        @apply text-purple-600;
      }
    }
  }
  & .right {
    @apply w-1/4 relative flex flex-col justify-center items-center;
    & .circle {
      @apply rounded-full absolute z-0;
      &.purple {
        @apply w-[500px] h-[500px] bg-purple-600 left-0 top-[100px];
      }
      &.crimson {
        @apply w-[475px] h-[475px] bg-pink-600 right-0 bottom-[150px];
      }
    }
    & svg {
      @apply z-[2];
    }

  }
}
</style>
