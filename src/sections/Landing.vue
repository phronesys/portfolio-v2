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
  @apply px-8 pt-20 bg-[#020202] h-[600px] w-full text-white overflow-hidden;
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
}
</style>
