import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n/index';
import "./tailwind.css";

const i18n = createI18n({
  legacy: false,
})

createApp(App).use(i18n).mount('#app');
