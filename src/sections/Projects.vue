<template>
  <section>
    <h1>Proyectos</h1>
    <div class="preview">
      <img src="sad.gif" alt="" />
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
          <p>{{ project.description }}</p>
        </div>
        <div class="links">
          <a :href="project.github" target="_blank">GitHub</a>
          <a :href="project.figma" target="_blank">Figma</a>
          <a :href="project.demo" target="_blank">Demo</a>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from "vue";

const selected = ref(0);
const projects = ref([
  {
    title: "Title of awesome project",
    description: `This is a very short 
    description of what this project is all about`,
    github: "https://github.com/",
    figma: "https://figma.com/",
    demo: "http://example.com/",
  },
  {
    title: "Title of awesome project",
    description: `This is a very short 
    description of what this project is all about`,
    github: "https://github.com/",
    figma: "https://figma.com/",
    demo: "http://example.com/",
  },
  {
    title: "Title of awesome project",
    description: `This is a very short 
    description of what this project is all about`,
    github: "https://github.com/",
    figma: "https://figma.com/",
    demo: "http://example.com/",
  },
]);
</script>

<style lang="postcss" scoped>
section {
  @apply px-8 py-20 h-[max-content] w-full text-white overflow-hidden z-[1];
  @apply flex flex-col gap-5 items-center relative;
  & > h1 {
    @apply text-4xl font-medium;
  }
  & > .preview {
    @apply bg-white w-full h-[360px] rounded-lg p-4;
    & > img {
      @apply rounded-lg h-full w-full;
    }
  }
  & > ul {
    @apply flex flex-col gap-4 w-full h-full;
  }
}
section > ul > li {
  @apply w-full h-24 px-4 flex flex-row gap-4 justify-between items-center;
  @apply text-white bg-gray-700 rounded-lg border-l-8 border-green-500;
  @apply transition-colors ease-linear duration-200 cursor-pointer;
  &:is(:hover, .selected) {
    @apply border-pink-600 bg-black;
    & > .links > a {
      @apply from-purple-400 via-white to-white;
      &:hover {
        @apply from-purple-400 via-purple-400 to-purple-400;
      }
      &:nth-child(3) {
        @apply from-pink-500 via-white to-white;
        &:hover {
          @apply from-pink-500 to-pink-500;
        }
      }
    }
  }
  & > .text {
    @apply flex flex-col gap-2 w-56;
    & > .h1 {
    }
    & > p {
      @apply text-xs;
    }
  }
  & > .links {
    @apply text-white text-sm flex flex-col gap-2;
    & > a {
      @apply px-2 bg-gradient-to-r text-transparent bg-clip-text;
      @apply from-white to-white transition-all ease-linear duration-300;

      &:nth-child(3) {
        @apply from-green-500 to-green-500;
      }
    }
  }
}
</style>
