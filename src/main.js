import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import VueLazyLoad from 'vue3-lazyload'
import "./tailwind.css";

const i18n = createI18n({
  legacy: false,
})

const app = createApp(App)
app.use(i18n)
app.use(VueLazyLoad)
app.mount('#app');
