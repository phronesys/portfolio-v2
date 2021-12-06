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
      <the-button primary >See projects</the-button>
    </div>
  </section>
</template>

<script setup>
import TheButton from "../components/Button.vue";
</script>

<style lang="postcss" scoped>
section {
  @apply px-8 py-20 bg-[#fff] h-[350px] w-full text-white overflow-hidden z-10;
  @apply flex flex-col gap-10;
  & .left {
    @apply flex flex-col justify-center gap-6 z-[2];
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
