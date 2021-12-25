<template>
  <component :is="contact"></component>
</template>

<script setup>
import * as Contact from "./contact/index";
import { computed } from "vue";

const props = defineProps({
  name: String,
});

const contactList = {
  github: Contact.Github,
  linkedin: Contact.Linkedin,
  devto: Contact.Devto,
  upwork: Contact.Upwork,
};

const contact = computed(() => contactList[props.name]);
</script>
