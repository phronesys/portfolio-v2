<template>
  <section>
    <div class="wrapper">
      <div class="text">
        <h1>{{ t("title") }}</h1>
        <p>{{ t("p1") }}</p>
        <p>{{ t("p2") }}</p>
      </div>
      <ul class="skill-list" ref="skillList">
        <li
          v-for="(skill, index) in skills"
          :key="skill.title"
          :title="skill.title"
          :class="{ focus: focus === index }"
        >
          <a :href="skill.link" target="_blank">
            <icon-skills :name="skill.title.toLowerCase()"></icon-skills>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
import IconSkills from "../components/IconSkills.vue";
import { useElementVisibility } from "@vueuse/core";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n({
  inheritLocale: true,
});

locale.value = "es";

const focus = ref(0);
const skillList = ref(null);
const areSkillsVisible = useElementVisibility(skillList);
const skills = ref([
  {
    title: "Vue",
    link: "https://v3.vuejs.org/",
  },
  {
    title: "Tailwind",
    link: "https://tailwindcss.com/",
  },
  {
    title: "Figma",
    link: "https://figma.com/",
  },
  {
    title: "Angular",
    link: "https://angular.io/",
  },
  {
    title: "Nuxt",
    link: "https://v3.nuxtjs.org/",
  },
  {
    title: "Jest",
    link: "https://jestjs.io/",
  },
  {
    title: "Storybook",
    link: "https://storybook.js.org/",
  },
  {
    title: "Vite",
    link: "https://vitejs.dev/",
  },
  {
    title: "React",
    link: "https://reactjs.org/",
  },
  {
    title: "Git",
    link: "https://git-scm.com/",
  },
  {
    title: "Rollup",
    link: "https://rollupjs.org/guide/en/",
  },
  {
    title: "Node",
    link: "https://nodejs.org/es/",
  },
  {
    title: "Zsh",
    link: "https://ohmyz.sh/",
  },
  {
    title: "Linux",
    link: "https://github.com/torvalds/linux",
  },
  {
    title: "Npm",
    link: "https://www.npmjs.com/",
  },
]);

const length = skills.value.length;
const startInterval = () => {
  setInterval(() => {
    if (length === focus.value) focus.value = 0;
    else focus.value++;
  }, 1000);
  stop();
};
const stop = watch(areSkillsVisible, () => {
  startInterval();
});
</script>

<i18n lang="yaml">
es:
  title: "Mi stack actual"
  p1: "Lo que importa es la buena experiencia para usuarios como para desarrolladores, por lo que siempre ando buscando nuevas formas de generarla"
  p2: "No soy un experto en UI/UX, pero he aprendido harto prototipando con Figma"
en:
  title: "My current stack"
  p1: "What matters is the good experience for the users and developers, so I'm always exploring new ways to do so."
  p2: "I'm no UI/UX expert, but I've learned a lot by prototyping with Figma"
</i18n>

<style lang="postcss" scoped>
section {
  @apply w-full z-[2];
  @apply bg-gradient-to-b from-gray-900/20 via-gray-900/30 to-gray-900/20;
}
section .wrapper {
  @apply flex flex-col gap-20 relative  mx-auto w-11/12 py-32 lg:py-64;
  @apply lg:flex-row lg:justify-center lg:w-3/4 lg:gap-10;
  @apply xl:w-1/2;
  @apply text-white;
  & > .text {
    @apply text-center space-y-4 max-w-[300px] mx-auto;
    @apply bg-gray-900/75 p-4 rounded-lg shadow-inner shadow-green-500/20;
    @apply lg:min-w-[300px] lg:my-auto;
    & > h1 {
      @apply text-3xl text-green-500;
    }
  }
}
section .wrapper > .skill-list {
  & > li {
    @apply cursor-pointer bg-gray-900/80 shadow-inner shadow-green-500/20  rounded-xl min-w-[32px] min-h-[32px] w-16 h-16;
    @apply filter transition-colors duration-300 ease-linear;
    &:hover,
    &.focus {
      @apply bg-white shadow-lg shadow-pink-500;
    }
    & > a {
      @apply w-full h-full grid place-items-center;
      & > svg {
        @apply w-12 h-12;
      }
    }
  }
}
/* grid */
section .wrapper > .skill-list {
  @apply max-w-[500px] mx-auto flex flex-row flex-wrap justify-center gap-5 lg:grid;
  grid-template-areas:
    "a b c d e"
    ". i f g h"
    ". . k l m"
    ". . . n o"
    ". . . j .";
  & > li {
    &:nth-child(1) {
      grid-area: a;
    }
    &:nth-child(2) {
      grid-area: b;
    }
    &:nth-child(3) {
      grid-area: c;
    }
    &:nth-child(4) {
      grid-area: d;
    }
    &:nth-child(5) {
      grid-area: e;
    }
    &:nth-child(6) {
      grid-area: i;
    }
    &:nth-child(7) {
      grid-area: f;
    }
    &:nth-child(8) {
      grid-area: g;
    }
    &:nth-child(9) {
      grid-area: h;
    }
    &:nth-child(10) {
      grid-area: k;
    }
    &:nth-child(11) {
      grid-area: l;
    }
    &:nth-child(12) {
      grid-area: m;
    }
    &:nth-child(13) {
      grid-area: n;
    }
    &:nth-child(14) {
      grid-area: o;
    }
    &:nth-child(15) {
      grid-area: j;
    }
  }
}
</style>
