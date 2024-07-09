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

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

AOS.init();

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .use(Vue3Toastify, { autoClose: 3000 })
  .mount("#app");
