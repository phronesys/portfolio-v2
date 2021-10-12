<template>
  <section>
    <div>
      <h1>Proyectos</h1>
      <ul>
        <li>
          <image></image>
          <div>
            <the-card class="left" primary>
              <template #title>Project title</template>
              <template #body
                >Explicar en palabras simples que se soluciona o se crea con
                este proyecto y que aprendí</template
              >
            </the-card>
            <the-card class="right" secondary>
              <template #body>
                <div class="flex flex-col items-end gap-2">
                  <label class="w-full flex flex-row gap-4 items-center">
                    <the-button>DevTo</the-button>
                    Blog page
                  </label>
                  <label class="w-full flex flex-row gap-4 items-center">
                    <the-button>DevTo</the-button>
                    Blog page
                  </label>
                  <label class="w-full flex flex-row gap-4 items-center">
                    <the-button>DevTo</the-button>
                    Blog page
                  </label>
                  <label class="w-full flex flex-row gap-4 items-center">
                    <the-button>DevTo</the-button>
                    Blog page
                  </label>
                </div>
              </template>
            </the-card>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import TheButton from "../components/Button.vue";
import TheCard from "../components/Card.vue";

export default {
  name: "Projects",
  components: {
    TheButton,
    TheCard,
  },
};
</script>

<style lang="postcss" scoped>
section {
  @apply pt-20 h-[max-content] grid justify-items-center;
  @apply bg-gradient-to-b from-indigo-100 to-green-400;
}
section > div {
  @apply p-10 flex flex-col gap-5 min-w-[300px] w-2/3 bg-black text-white shadow-2xl;
}
section > div h1 {
  @apply text-4xl;
}
section > div h2 {
  @apply text-2xl;
}
section > div > ul {
  @apply flex flex-col;
}
section > div > ul li {
  @apply flex flex-col gap-4 items-end;
}
section > div > ul li > image {
  @apply bg-white p-4 h-96 w-full flex flex-row rounded-xl;
}
section > div > ul li > div {
  @apply flex flex-row gap-4;
}
section > div > ul li > div > .left {
  @apply w-2/3;
} 
section > div > ul li > div > .right {
  @apply w-1/3;
}

</style>
