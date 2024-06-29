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

export default {
  name: "HomeView",
  components: {
    ProductGallary,
    ProductSlide,
    News,
    AvaFabric,
    MainSection,
  },
};
</script>
<style></style>
