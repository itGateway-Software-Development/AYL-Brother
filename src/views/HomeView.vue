<template>
  <div>
    <Slider></Slider>
    <BestSeller></BestSeller>
    <ProductDetail></ProductDetail>
    <NewProductSlider></NewProductSlider>
    <OurProduct></OurProduct>
    <News></News>
  </div>
</template>

<script>
import News from "../components/News";
import OurProduct from "../components/OurProduct";
import NewProductSlider from "../components/NewProductSlider";
import ProductDetail from "../components/ProductDetail";
import BestSeller from "../components/BestSeller";
import Slider from "../components/Slider";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    News,
    OurProduct,
    NewProductSlider,
    ProductDetail,
    BestSeller,
    Slider,
  },
};
</script>
<style></style>
