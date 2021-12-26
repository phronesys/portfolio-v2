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
    <ul class="skill-list">
      <li v-for="skill in skills" :key="skill.title" :title="skill.title">
        <a :href="skill.link" target="_blank">
          <the-skills :name="skill.title.toLowerCase()"></the-skills>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from "vue";
import TheSkills from "../components/Skills.vue";
import TheButton from "../components/Button.vue";

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
</script>

<style lang="postcss" scoped>
section {
  @apply flex flex-col gap-4 relative z-10;
  @apply text-white;
  & > .text {
    @apply text-center space-y-4;
    & > h1 {
      @apply text-3xl text-green-500;
    }
  }
}
section > .skill-list {
  @apply flex flex-row flex-wrap justify-center gap-4 mt-4;
  & > li {
    @apply cursor-pointer bg-white rounded-xl min-w-[32px] min-h-[32px] w-16 h-16;
    & > a {
      @apply w-full h-full grid place-items-center;
      & > svg {
        @apply w-12 h-12;
      }
    }
  }
}
</style>
