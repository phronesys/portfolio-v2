<template>
  <section ref="contact">
    <h1>{{ t("title") }}</h1>
    <ul class="contact-list">
      <li v-for="contact in contactList" :key="contact.title">
        <a :href="contact.link" target="_blank" :title="contact.title">
          <icon-contact :name="contactTitle(contact)"></icon-contact>
        </a>
      </li>
    </ul>
    <form
      v-if="!formSubmitted"
      class="contact-form"
      method="post"
      autocomplete="on"
    >
      <base-input v-model="name" :placeholder="t('name')" />
      <base-input v-model="email" :placeholder="t('email')" type="email" />
      <base-textarea v-model="message" :placeholder="t('textarea')" />
      <div class="flex flex-row justify-between items-center">
        <div
          class="g-recaptcha"
          data-sitekey="6Ldn7TQfAAAAAGqnKIDP6tiQ9ALHTPjaXfBlUZ4_"
        ></div>
        <base-button type="submit" primary @click.prevent="submitEmail">
          {{ t("button") }}
        </base-button>
      </div>
    </form>
    <div v-else>
      <h1 class="text-xl text-white">{{ t("success") }}</h1>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import Airtable from "airtable";

import IconContact from "../components/IconContact.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseButton from "../components/BaseButton.vue";
import BaseTextarea from "../components/BaseTextarea.vue";

const env = import.meta.env;
/* airtable config */
const baseKey = env.VITE_AIRTABLE;
const airtableBase = new Airtable({ apiKey: env.VITE_API_KEY }).base(baseKey);

/* language */
const { t, locale } = useI18n({
  inheritLocale: true,
});
locale.value = "es";

/* links */
const contactList = ref([
  { title: "Devto", link: "https://dev.to/phronesys" },
  { title: "Github", link: "https://github.com/phronesys" },
  { title: "Linkedin", link: "https://linkedin.com/in/danieldazarola" },
  {
    title: "Upwork",
    link: "https://www.upwork.com/freelancers/~0124080cb096b4e1b3",
  },
]);

/* form */
const formSubmitted = ref(false);
const validCaptcha = ref(false);
const name = ref("");
const message = ref("");
const email = ref("");

const contactTitle = (contact) => contact.title.toLowerCase();
const airtablePost = () => {
  airtableBase("Messages").create(
    [
      {
        fields: {
          Name: name.value,
          Email: email.value,
          Message: message.value,
        },
      },
    ],
    (err, records) => {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach((record) => {
        console.log(record.getId());
      });
    }
  );
};

const invalidForm = () =>
  email.value.length === 0 ||
  name.value.length === 0 ||
  message.value.length === 0 ||
  email.value.length > 50 ||
  name.value.length > 50 ||
  message.value.length > 300;

const validateCaptcha = (responseToken) => {
  fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    body: JSON.stringify({
      secret: "6Ldn7TQfAAAAAGqnKIDP6tiQ9ALHTPjaXfBlUZ4_",
    }),
  })
    .then((response) => {
      console.log(response);
      if (response.success) {
        alert('works!');
        validCaptcha.value = response.success;
      }
    })
    .catch((err) => console.error(err));
};

const submitEmail = () => {
  /* verify length */
  if (invalidForm()) return alert(":-|");

  /* verify email */
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(email.value)) return alert("invalid email!!");

  /* verify captcha */
  validateCaptcha();
  if (!validCaptcha.value) return alert('captcha invalid');

  airtablePost();
  formSubmitted.value = true;
};
</script>

<i18n lang="yaml">
es:
  title: "Te interesa trabajar conmigo?"
  subtitle: "Dime como puedo ayudarte"
  button: "Enviar"
  name: "Nombre"
  email: "Email"
  textarea: "Mensaje"
  success: "Muchas gracias, te responderé pronto!!"
en:
  title: "Do you want to work with me?"
  subtitle: "Let me know how can I help"
  button: "Submit"
  name: "Name"
  email: "Email"
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
