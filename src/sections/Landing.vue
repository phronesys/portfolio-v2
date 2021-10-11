<template>
  <section>
    <div>
      <h1>¿Imaginas esa página que destacará tu marca?</h1>
      <h4>
        Si aun no lo haces, permíteme ayudar con la imagen y construcción de tu
        sitio
      </h4>
      <the-button primary big>Conversemos 🚀</the-button>
    </div>
    <div class="image-1"></div>
    <div class="image-2">
      <div class="text-black text-left p-4 h-full justify-between">
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
    </div>
    <section-divider class="!w-full"></section-divider>
  </section>
</template>

<script>
import SectionDivider from "./utils/SectionDivider.vue";
import TheButton from "../components/Button.vue";
export default {
  name: "Landing",
  components: {
    SectionDivider,
    TheButton,
  },
};
</script>

<style lang="postcss" scoped>
section {
  @apply bg-gradient-to-r from-green-400 to-purple-500;
  @apply h-[800px] pt-24 relative flex justify-center items-center pb-80;
}
section > div {
  @apply text-white flex flex-col gap-8 w-[800px] items-center text-center;
}
section > div h1 {
  @apply text-6xl font-bold;
}
section > div h4 {
  @apply text-2xl w-2/3;
}
section > :is(.image-1, .image-2) {
  @apply absolute bg-gray-50 rounded-3xl h-[300px] w-[300px];
}
section > .image-1 {
  @apply left-44 bottom-5 z-10;
  background: url("../assets/building_websites.svg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
section > .image-2 {
  @apply right-20 top-32;
  background: url("../assets/mobile_development.svg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
section > .image-2 > div {
  @apply bg-white w-80 h-80 absolute bottom-[-267px] -right-1 rounded-lg shadow-xl;
}
</style>
