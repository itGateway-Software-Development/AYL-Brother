<template>
  <div>
    <MainSection></MainSection>
    <AvaFabric></AvaFabric>
    <ProductSlide></ProductSlide>
    <News></News>
    <ProductGallary></ProductGallary>
  </div>
</template>

<script>
import ProductGallary from "../components/ProductGallary";
import ProductSlide from "../components/ProductSlide";
import News from "../components/News";
import AvaFabric from "../components/AvaFabric";
import MainSection from "../components/MainSection";
// @ is an alias to /src

import { onMounted } from "vue";
export default {
  name: "HomeView",
  components: {
    ProductGallary,
    ProductSlide,
    News,
    AvaFabric,
    MainSection,
  },

  setup() {
    onMounted(() => {
      window.scroll(0, 0);
    });
  },
};
</script>
<style></style>
