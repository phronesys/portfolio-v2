<template>
  <section>
    <div class="text">
      <h1>My current stack</h1>
      <p>
        What matters is the good experience for the users and developers, so I'm
        always exploring new ways to do so.
      </p>
      <p>
        I'm no UI/UX expert, but I've learned a lot by prototyping with Figma
      </p>
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
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
import IconSkills from "../components/IconSkills.vue";
import { useElementVisibility } from "@vueuse/core";

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
    title: "Chrome",
    link: "https://developer.chrome.com/",
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

<style lang="postcss" scoped>
section {
  @apply flex flex-col gap-20 relative z-[2] mx-auto w-11/12;
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
section > .skill-list {
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
section > .skill-list {
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
