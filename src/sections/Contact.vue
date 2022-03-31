<template>
  <Teleport to="form">
    <section ref="contact">
      <h1>{{ t("title") }}</h1>
      <ul class="contact-list">
        <li v-for="contact in contactList" :key="contact.title">
          <a :href="contact.link" target="_blank" :title="contact.title">
            <icon-contact :name="contactTitle(contact)"></icon-contact>
          </a>
        </li>
      </ul>
      <base-input name="email" />
      <base-textarea name="message" :placeholder="t('textarea')" />
      <base-button type="submit" primary @click.prevent="submitEmail">
        {{ t("button") }}
      </base-button>
    </section>
  </Teleport>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import IconContact from "../components/IconContact.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseTextarea from "../components/BaseTextarea.vue";
import BaseButton from "../components/BaseButton.vue";

const { t, locale } = useI18n({
  inheritLocale: true,
});

locale.value = "es";

const contactTitle = (contact) => contact.title.toLowerCase();
const submitEmail = () => {
  notSubmitted.value = false;
};

const contactList = ref([
  { title: "Devto", link: "https://dev.to/phronesys" },
  { title: "Github", link: "https://github.com/phronesys" },
  { title: "Linkedin", link: "https://linkedin.com/in/danieldazarola" },
  {
    title: "Upwork",
    link: "https://www.upwork.com/freelancers/~0124080cb096b4e1b3",
  },
]);
const notSubmitted = ref(true);

onMounted(() => {});
</script>

<i18n lang="yaml">
es:
  title: "Te interesa trabajar conmigo?"
  subtitle: "Dime como puedo ayudarte"
  button: "Enviar"
  textarea: "Mensaje"
  success: "Muchas gracias, te responderé pronto!!"
en:
  title: "Do you want to work with me?"
  subtitle: "Let me know how can I help"
  button: "Submit"
  textarea: "Message"
  success: "Thank you, I'll reach you out soon!!"
</i18n>

<style lang="postcss" scoped>
section {
  @apply w-full px-4 py-10 relative z-[2] mx-auto flex flex-col gap-10;
  @apply lg:w-1/2 2xl:w-[900px] lg:px-8;
  @apply text-center rounded-xl bg-gray-900/30 shadow-inner shadow-pink-500/20;
  & > h1 {
    @apply text-2xl text-white;
    @apply sm:text-3xl 2xl:text-5xl;
  }
}
section > .contact-list {
  @apply flex flex-row justify-center gap-4;
  & > li {
    @apply cursor-pointer bg-white rounded-xl min-w-[20px] min-h-[20px] w-10 h-10;
    @apply sm:w-12 sm:h-12 lg:w-14 lg:h-14;
    & > a {
      @apply w-full h-full grid place-items-center;
      & > svg {
        @apply w-8 h-8;
      }
    }
  }
}
</style>

<style lang="postcss">
form {
  @apply flex flex-col mx-auto gap-8 w-full z-20 relative;
  & h4 {
    @apply text-white;
  }
  & input,
  & textarea {
    @apply mx-auto w-full;
  }
  & button {
    @apply ml-auto mr-4;
  }
}
</style>
