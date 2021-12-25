<template>
  <section>
    <div class="title">
      <h1>
        Hi there! <br />
        I'm Daniel Dazarola <br />a <span>Front End Developer</span>
      </h1>
      <h3>
        I use the latest tech to build<br />
        powerful <span>web applications</span>
      </h3>
      <the-button primary>See projects</the-button>
    </div>
  </section>
</template>

<script setup>
import TheButton from "../components/Button.vue";
</script>

<style lang="postcss" scoped>
section {
  @apply px-8 py-20 relative w-full text-white overflow-hidden z-[1];
  @apply flex flex-row justify-center gap-4;
  & .title {
    @apply flex flex-col gap-4;
    & h1 {
      @apply text-2xl leading-8;
      @apply xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl lg:leading-normal;
      & span {
        @apply text-green-500;
      }
    }
    & h3 {
      @apply text-xl leading-tight;
      @apply xs:text-2xl md:text-3xl lg:text-4xl;
      & span {
        @apply text-purple-600;
      }
    }
  }
}
</style>
