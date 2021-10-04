<template>
  <section>
    <div>
      <h1>¿Necesitas una mano con tu negocio online?</h1>
      <h4>Te ayudaré a construir la página que imaginas</h4>
      <button>Conversemos</button>
    </div>
    <div class="image-1"></div>
    <div class="image-2"></div>
    <section-divider class="!w-full"></section-divider>
  </section>
</template>

<script>
import SectionDivider from "./utils/SectionDivider.vue";
export default {
  name: "Landing",
  components: {
    SectionDivider,
  },
};
</script>

<style lang="postcss" scoped>
section {
  @apply bg-gradient-to-r from-green-400 to-purple-500;
  @apply h-[800px] mt-20 relative flex justify-center items-center pb-40;
}
section > div {
  @apply text-white flex flex-col gap-8 w-[700px] items-center text-center;
}
section > div h1 {
  @apply text-6xl font-bold;
}
section > div h4 {
  @apply text-2xl;
}
section > div button {
  @apply bg-green-400 font-semibold text-xl px-6 py-3 text-white rounded-2xl w-56;
}
section >  :is(.image-1, .image-2) {
  @apply absolute bg-gray-50 rounded-3xl h-[300px] w-[300px];
}
section > .image-1 {
  @apply left-20 bottom-5 z-30;
  background: url('../assets/building_websites.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
section > .image-2 {
  @apply right-20 bottom-32;
  background: url('../assets/mobile_development.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
