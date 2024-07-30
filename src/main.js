import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./css/style.css";
import "@/assets/js/theme.js";
import AOS from "aos";
import "aos/dist/aos.css";
import Vue3Toastify, { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import {createI18n} from "vue-i18n"
import EN from "./locale/en.json";
import MM from "./locale/mm.json";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

// Add a watcher for the 'locale' value in the Vuex store
store.watch(
  (state) => state.locale,
  (newLocale) => {
    i18n.global.locale = newLocale;
  }
);

const i18n = createI18n({
  locale: store.state.locale,
  messages: {
    EN: EN,
    MM: MM,
  },
});

AOS.init();

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .use(i18n)
  .use(Vue3Toastify, { autoClose: 3000 })
  .mount("#app");
