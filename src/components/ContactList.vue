<template>
  <ul class="contact-list">
    <li v-for="contact in contactList" :key="contact.title">
      <a :href="contact.link" target="_blank" :title="contact.title">
        <icon-contact :name="contactTitle(contact)"></icon-contact>
      </a>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import IconContact from "../components/IconContact.vue";

const contactTitle = (contact) => contact.title.toLowerCase();
const contactList = ref([
  { title: "Devto", link: "https://dev.to/phronesys" },
  { title: "Github", link: "https://github.com/phronesys" },
  { title: "Linkedin", link: "https://linkedin.com/in/danieldazarola" },
]);
</script>

<style lang="postcss" scoped>
.contact-list {
  @apply flex flex-row justify-center gap-4 mt-20;
  & > li {
    @apply cursor-pointer bg-slate-800/80 shadow-inner shadow-purple-500/50  rounded-xl min-w-[32px] min-h-[32px] w-12 h-12;
    @apply filter transition-colors duration-300 ease-linear;
    &:hover,
    &.focus {
      @apply bg-white shadow-lg shadow-pink-500;
    }
    & > a {
      @apply w-full h-full grid place-items-center;
      & > svg {
        @apply w-8 h-8;
      }
    }
  }
}
</style>
