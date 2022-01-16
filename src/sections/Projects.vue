<template>
  <section>
    <div class="head">
      <h1>Preview</h1>
      <div class="preview">
        <img src="../../sad.gif" alt="" />
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
      @apply rounded-lg p-4 aspect-square min-w-[200px] w-[300px];
      @apply bg-gray-900/20 shadow-inner shadow-pink-500/20;
      & > img {
        @apply rounded-lg h-full w-full;
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
