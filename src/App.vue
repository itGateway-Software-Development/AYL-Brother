<template>
  <v-app>
    <Navbar @themeChange="handleTheme" />
    <!-- Main content -->
    <v-main>
      <router-view :theme="theme" />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import HomeView from "./views/HomeView";
import Navbar from "./components/Navbar";
import { computed, onMounted, ref, watch } from "vue";
// @ is an alias to /src

export default {
  components: {
    Footer,
    HomeView,
    Navbar,
  },

  setup() {
    const theme = ref("light");
    const handleTheme = (data) => (theme.value = data);

    return {
      theme,
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
