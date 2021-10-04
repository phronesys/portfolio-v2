<template>
  <section>
    <div>Dev 4 u</div>
    <ul>
      <li>About</li>
      <li>Blog</li>
      <li>Guides</li>
    </ul>
    <button>Let's create!</button>
  </section>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style lang="postcss" scoped>
section {
  @apply p-10 w-full h-20 flex flex-row items-center fixed top-0 left-0 right-0 z-10;
  @apply bg-gradient-to-r from-green-400 to-purple-500 text-white;
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
