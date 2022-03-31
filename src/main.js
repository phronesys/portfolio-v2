import App from './App.vue';
import { createI18n } from 'vue-i18n';
import VueLazyLoad from 'vue3-lazyload'
import "./tailwind.css";
import { ViteSSG } from 'vite-ssg';

const i18n = createI18n({
  legacy: false,
})

export const createApp = ViteSSG(App, { routes: [] }, ({ app, initialState }) => {
  app.use(i18n)
  app.use(VueLazyLoad)
});
