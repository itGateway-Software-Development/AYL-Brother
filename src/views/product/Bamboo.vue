<template>
  <div class="product container content-wrapper">
    <div class="row">
      <div class="col-12 col-md-3 col-sm-12">
        <ProductFilter @priceFilter="filterPrice"></ProductFilter>
      </div>
      <div class="col-12 col-md-9 col-sm-6 p-list">
        <ProductCard :price="selPrice"></ProductCard>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ProductCard from "../../components/Product/ProductCard";
import ProductFilter from "../../components/Product/ProductFilter";
export default {
  components: {
    ProductCard,
    ProductFilter,
  },
  setup() {
    let selPrice = ref("");

    let filterPrice = (selectedPrice) => {
      selPrice.value = selectedPrice;
    };

    return { filterPrice, selPrice };
  },
};
</script>

<style></style>
