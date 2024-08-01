<template>
  <v-app>
    <Navbar @themeChange="handleTheme" />
    <!-- Main content -->
    <v-main>
      <router-view :theme="theme" />
    </v-main>

    <Footer />
  </v-app>
  <loading v-if="isLoading" />
</template>

<script>
import Footer from "./components/Footer";
import HomeView from "./views/HomeView";
import Navbar from "./components/Navbar";
import { computed, onMounted, ref, watch } from "vue";
import { useZoom } from "@/assets/js/useZoom";
import Loading from '@/components/Loading.vue'
import { useRoute } from 'vue-router';

// @ is an alias to /src

export default {
  components: {
    Footer,
    HomeView,
    Navbar,
    Loading
  },

  setup() {
    const theme = ref("light");
    const handleTheme = (data) => (theme.value = data);
    const isLoading = ref(false);
    const route = useRoute();

    useZoom();

    const loadContent = () => {
        isLoading.value = true;
        
        setTimeout(() => {
          isLoading.value = false;
        }, 900);
    };

    onMounted(() => {
      window.addEventListener('load', () => {
        isLoading.value = false;
        })
    })

    watch(route, () => loadContent());

    return {
      theme,
      isLoading,
      handleTheme,
    };
  },
};
</script>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
