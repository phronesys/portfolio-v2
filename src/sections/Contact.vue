<template>
  <section>
    <h1>Do you want to work with me?</h1>
    <ul class="contact-list">
      <li v-for="contact in contactList" :key="contact.title">
        <a :href="contact.link" target="_blank" :title="contact.title">
          <the-contact :name="contactTitle(contact)"></the-contact>
        </a>
      </li>
    </ul>
    <form action="">
      <h4>Let me know how can I help</h4>
      <the-input />
      <the-textarea></the-textarea>
      <the-button primary @click.prevent="submitEmail"> Submit </the-button>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";
import TheContact from "../components/Contact.vue";
import TheInput from "../components/Input.vue";
import TheTextarea from "../components/Textarea.vue";
import TheButton from "../components/Button.vue";

const contactTitle = (contact) => contact.title.toLowerCase();
const submitEmail = () => {
  console.log("email submitted!!")
}

const contactList = ref([
  { title: "Devto", link: "https://dev.to/phronesys" },
  { title: "Github", link: "https://github.com/phronesys" },
  { title: "Linkedin", link: "https://linkedin.com/in/danieldazarola" },
  {
    title: "Upwork",
    link: "https://www.upwork.com/freelancers/~0124080cb096b4e1b3",
  },
]);
</script>

<style lang="postcss" scoped>
section {
  @apply relative z-[2] mx-auto flex flex-col gap-10 text-center;
  & > h1 {
    @apply text-2xl text-white;
  }
}
section > .contact-list {
  @apply flex flex-row justify-center gap-4;
  & > li {
    @apply cursor-pointer bg-white rounded-xl min-w-[20px] min-h-[20px] w-10 h-10;
    & > a {
      @apply w-full h-full grid place-items-center;
      & > svg {
        @apply w-8 h-8;
      }
    }
  }
}
section > form {
  @apply flex flex-col mx-auto gap-8;
  & > h4 {
    @apply text-white;
  }
  & > input,
  & > textarea{
    @apply mx-auto;
  }
  & > button {
    @apply ml-auto mr-4;
  }
}
</style>
