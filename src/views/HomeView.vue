<template>
  <Slider></Slider>
  <BestSeller></BestSeller>
</template>

<script>
import BestSeller from "../components/BestSeller";
import Slider from "../components/Slider";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    BestSeller,
    Slider,
  },
};
</script>
<style></style>
