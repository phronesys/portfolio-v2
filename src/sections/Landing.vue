<template>
  <section>
    <div class="title">
      <h1>
        Hi there! <br />
        I'm Daniel Dazarola <br /><span>a Front End Developer</span>
      </h1>
      <h3>
        I use the latest tech to build<br />
        <span>powerful web applications</span>
      </h3>
    </div>
  </section>
</template>

<script setup>
import TheButton from "../components/Button.vue";
</script>

<style lang="postcss" scoped>
section {
  @apply relative w-full text-white overflow-hidden z-[1];
  @apply flex flex-row justify-center gap-4;
  & .title {
    @apply flex flex-col gap-4;
    & h1 {
      @apply text-2xl leading-8;
      @apply xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl;
      @apply lg:leading-snug;
      & span {
        @apply bg-gradient-to-l from-green-500 to-white text-transparent bg-clip-text;
      }
    }
    & h3 {
      @apply text-xl leading-tight;
      @apply lg:leading-snug;
      @apply xs:text-2xl md:text-3xl lg:text-4xl;
      & span {
        @apply bg-gradient-to-l from-purple-500 via-purple-400 to-white text-transparent bg-clip-text;
      }
    }
  }
}
</style>
