<template>
  <component :is="skill"></component> 
</template>

<script setup>
import * as Skills from "./skills/index";
import { ref, defineProps, computed } from "vue";

const props = defineProps({
  name: String,
});

const skills = {
  chrome: Skills.SkillChrome, 
  figma: Skills.SkillFigma, 
  git: Skills.SkillGit, 
  jest: Skills.SkillJest, 
  linux: Skills.SkillLinux, 
  netlify: Skills.SkillNetlify, 
  node: Skills.SkillNode, 
  npm: Skills.SkillNpm, 
  nuxt: Skills.SkillNuxt, 
  rollup: Skills.SkillRollup, 
  storybook: Skills.SkillStorybook, 
  tailwind: Skills.SkillTailwind, 
  vite: Skills.SkillVite, 
  vue: Skills.SkillVue, 
  zsh: Skills.SkillZsh, 
}

const skill = computed(() => skills[props.name])
</script>
