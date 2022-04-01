<template>
  <section>
    <div class="head">
      <h1>{{ t("title") }}</h1>
      <div class="preview">
        <img
          v-lazy="{
            src: lazyOptions.src,
            lifecycle: lazyOptions.lifecycle,
          }"
          @click="openDemo"
        />
      </div>
    </div>
    <ul>
      <li
        v-for="(project, index) in projects"
        :key="index"
        :class="{ selected: selected === index }"
        @click="selected = index"
      >
        <div class="text">
          <h1>{{ project.title }}</h1>
          <p>{{ t(`${index + 1}`) }}</p>
        </div>
        <div class="links">
          <a :href="project.github" target="_blank">GitHub</a>
          <!-- <a :href="project.figma" target="_blank">Figma</a> -->
          <a :href="project.demo" target="_blank">Demo</a>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useI18n } from "vue-i18n";
/* i18n */
const { t, locale } = useI18n({
  inheritLocale: true,
});

locale.value = "es";

/* project list */
const selected = ref(0);
const projects = ref([
  {
    title: "Hou Movies  🍿🎥",
    github: "https://github.com/phronesys/hou-movies",
    figma: "https://figma.com/",
    demo: "https://hou-movies.vercel.app/",
    src: "../../houmovies.png",
    id: "houmovies",
  },
  {
    title: "Giftty  🎁🔍",
    github: "https://github.com/phronesys/tenor-angular",
    figma: "https://figma.com/",
    demo: "https://giftty.netlify.app/",
    src: "../../giftty.png",
    id: "giftty",
  },
  {
    title: "Pokedex  👾👾👾",
    github: "https://github.com/phronesys/pokedex-v2",
    figma: "https://figma.com/",
    demo: "https://pokedex-gen01.netlify.app/",
    src: "../../pokedex.png",
    id: "pokedex",
  },
]);

/* 
gets current selected src 
sets src updated to gif 
*/
const src = computed({
  get: () => projects.value[selected.value].src,
  set: (value) => {
    const newSrc = `../../${value}.gif`;
    projects.value[selected.value].src = newSrc;
  },
});

/* current selected id */
const id = computed(() => projects.value[selected.value].id);

/* lazy loading */
const lazyOptions = reactive({
  src: src,
  lifecycle: {
    loading: (el) => {
      /* in loading hook image is already set */
    },
    error: (el) => {
      console.log("image error", el);
    },
    loaded: (el) => {
      /* once is loaded we set the gif */
      src.value = id.value;
    },
  },
});

/* open demo on gif click */
const openDemo = () => {
  const url = projects.value[selected.value].demo;
  window.open(url, "_blank");
};
</script>

<i18n lang="yaml">
es:
  title: "Mis Proyectos"
  1: "Lista infinita al hacer scroll con las peliculas de TheMovieDB. Hecho con React y Tailwind"
  2: "Busca gif's disponibles en la API de Tenor, con autocompletado. Hecho con Angular y Sass"
  3: "Busca tus pokemones favoritos traidos desde la PokeAPI. Hecho con Vue y Tailwind"
en:
  title: "My Projects"
  1: "Infinite scroll with TheMovieDB movies. Made with React + Tailwind"
  2: "Search gif's with suggestions from Tenor API. Made with Angular + Sass"
  3: "Search your favorites pokemons from the PokeAPI and see their stats. Made with Vue + Tailwind"
</i18n>

<style lang="postcss" scoped>
section {
  @apply h-[max-content] w-full text-white overflow-hidden z-[1];
  @apply flex flex-col gap-5 items-center mx-auto relative;
  @apply lg:w-11/12 xl:w-[950px] 2xl:w-[1200px] lg:flex-row-reverse;
  & > .head {
    @apply flex flex-col gap-4 mx-auto;
    & > h1 {
      @apply text-4xl font-medium mx-auto;
      @apply xl:text-5xl;
    }
    & > .preview {
      @apply rounded-lg p-4 min-w-[200px];
      @apply bg-gray-900/20 shadow-inner shadow-pink-500/20 transition-shadow duration-300;
      @apply cursor-pointer hover:shadow-pink-500/50;
      & > img {
        @apply rounded-sm aspect-video;
        @apply w-80 lg:w-[450px];
      }
    }
  }
  & > ul {
    @apply flex flex-col gap-4 w-full h-full;
    @apply md:w-[550px] 2xl:w-[700px];
  }
}
section > ul > li {
  @apply w-full mx-auto px-5 py-8 flex flex-row gap-4 justify-around items-start;
  @apply text-white bg-gray-900/50 rounded-lg border-l-8 border-green-500;
  @apply shadow-inner shadow-green-500/20;
  @apply transition-colors ease-linear duration-200 cursor-pointer;
  @apply xs:w-11/12 sm:w-10/12;

  & > .text {
    @apply flex flex-col gap-2 w-56;
    & > h1 {
      @apply text-base xs:text-lg sm:text-xl;
    }
    & > p {
      @apply text-sm sm:text-base text-gray-400;
    }
  }
  & > .links {
    @apply text-white text-sm flex flex-col gap-2;
    @apply sm:text-base xl:text-lg;

    & > a {
      @apply px-2 bg-gradient-to-r text-transparent bg-clip-text;
      @apply transition-all ease-linear duration-300 from-gray-300 via-gray-400 to-gray-500;
    }
  }
  &:hover,
  &.selected {
    @apply border-pink-600 bg-black;
    @apply shadow-pink-500/50;
    & > .links > a {
      @apply from-pink-200 via-purple-400 to-pink-400;
      &:hover {
        @apply from-purple-600 to-pink-500;
      }
    }
  }
}
</style>
