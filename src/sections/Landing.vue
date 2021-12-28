<template>
  <section>
    <h1>
      Hi there! <br />
      I'm Daniel Dazarola <br /><span>a Front End Developer</span>
    </h1>
    <h3>
      I use the latest tech to build<br />
      <span>powerful web applications</span>
    </h3>
  </section>
</template>

<script setup>
</script>

<style lang="postcss" scoped>
section {
  @apply relative w-max text-white overflow-hidden z-[1];
  @apply flex flex-col gap-4 mx-auto;
  @apply bg-gradient-to-r from-black to-transparent opacity-90;  
  @apply lg:gap-10;
  & h1 {
    @apply text-2xl leading-8;
    @apply xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl;
    @apply lg:leading-snug;
    @apply bg-gradient-to-l from-green-500 via-green-500 to-white text-transparent bg-clip-text;
  }
  & h3 {
    @apply text-xl leading-tight;
    @apply lg:leading-snug xl:leading-normal;
    @apply xs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl;
    @apply bg-gradient-to-l from-purple-500 via-purple-400 to-white text-transparent bg-clip-text;
  }
}
</style>
