<template>
  <component :is="skill"></component>
</template>

<script setup>
import * as Skills from "./skills/index";
import { computed } from "vue";

const props = defineProps({
  name: String,
});

const skills = {
  chrome: Skills.Chrome,
  figma: Skills.Figma,
  git: Skills.Git,
  jest: Skills.Jest,
  linux: Skills.Linux,
  react: Skills.React,
  node: Skills.Node,
  npm: Skills.Npm,
  nuxt: Skills.Nuxt,
  rollup: Skills.Rollup,
  storybook: Skills.Storybook,
  tailwind: Skills.Tailwind,
  vite: Skills.Vite,
  vue: Skills.Vue,
  zsh: Skills.Zsh,
};

const skill = computed(() => skills[props.name]);
</script>
