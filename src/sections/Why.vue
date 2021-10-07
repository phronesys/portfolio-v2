<template>
  <section>
    <header>
      <h2>¿Por qué trabajar conmigo?</h2>
    </header>
    <ul>
      <li>
        <div class="w-80 h-80 bg-green-400 rounded-lg p-4 flex flex-col justify-between" >
          <h4 class="text-white text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, neque.</h4>
          <button class="bg-purple-500 text-white max-w-max px-4 py-2 rounded-lg">Click me</button>
        </div>
        <container-benefit colored>
          <template #title>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            repudiandae cum.
          </template>
          <template #subtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aut
            pariatur consectetur, mollitia doloribus ipsa temporibus rerum esse!
            Quaerat, assumenda omnis. Autem tempora sapiente odit reiciendis
            aspernatur temporibus, animi fuga!
          </template>
        </container-benefit>
      </li>
      <li>
        <container-benefit colored left dark>
          <template #title>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            repudiandae cum.
          </template>
          <template #subtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aut
            pariatur consectetur, mollitia doloribus ipsa temporibus rerum esse!
            Quaerat, assumenda omnis. Autem tempora sapiente odit reiciendis
            aspernatur temporibus, animi fuga!
          </template>
        </container-benefit>
        <div class="w-80 h-80 bg-purple-500 rounded-lg p-4 flex flex-col justify-between" >
          <h4 class="text-white text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, neque.</h4>
          <button class="ml-auto bg-green-400 text-white max-w-max px-4 py-2 rounded-lg">Click me</button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import ContainerBenefit from "../components/containers/ContainerBenefit.vue";
export default {
  components: {
    ContainerBenefit,
  },
};
</script>

<style lang="postcss" scoped>
section {
  @apply h-[1200px] bg-indigo-100 flex flex-col items-center justify-start pt-20;
}
section > ul {
  @apply flex flex-col;
}
section > ul > li {
  @apply flex flex-row justify-between items-center gap-20 relative m-10;
}
section > header {
}
section > header > h2 {
  @apply text-6xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-green-400 bg-clip-text p-8 italic;
}
</style>
