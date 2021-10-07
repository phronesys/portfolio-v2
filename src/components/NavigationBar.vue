<template>
  <section :class="{ dark: scrollPosition > 700 }">
    <div>Dev 4 u</div>
    <ul>
      <li>About</li>
      <li>Blog</li>
      <li>Guides</li>
      <li>{{scrollPosition}}</li>
    </ul>
    <button>Let's create!</button>
  </section>
</template>

<script>
export default {
  name: "NavigationBar",
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    scrollPosition: 0,
  }),
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
  @apply p-10 w-full h-20 flex flex-row items-center fixed top-0 left-0 right-0 z-20;
  @apply bg-transparent text-white transition-all duration-200 ease-linear;
}
section.dark {
  @apply bg-black;
}
section > div {
  @apply font-semibold text-4xl;
}
section > ul {
  @apply ml-auto mr-32 flex flex-row gap-8 text-lg font-medium;
}
section > button {
  @apply bg-green-400 px-6 py-3 rounded-2xl text-white text-xl font-semibold;
}
</style>
