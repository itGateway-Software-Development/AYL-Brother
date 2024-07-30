import { createStore } from "vuex";
import product from "./modules/product";
import { toast } from "vue3-toastify";
export default createStore({
  state: {
    locale: "EN",
  },
  getters: {
    getLocale(state) {
      return state.locale;
    },
  },
  mutations: {
    setLocale: (state, value) => (state.locale = value),
  },
  actions: {
    getLocale: (context, value) => {
      context.commit("setLocale", value);
    },
  },
  modules: {
    product,
  },
});
