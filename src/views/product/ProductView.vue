<template>
  <div class="product container content-wrapper">
    <div class="row">
      <div class="col-12 col-md-3 col-sm-12 f-list">
        <ProductFilter @priceFilter="filterPrice"></ProductFilter>
      </div>
      <div class="col-12 col-md-9 col-sm-6 p-list">
        <ProductCard
          :price="selPrice"
          :series="series"
          :code="code"
        ></ProductCard>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { defineProps } from "vue";
import ProductCard from "../../components/Product/ProductCard";
import ProductFilter from "../../components/Product/ProductFilter";
export default {
  components: {
    ProductCard,
    ProductFilter,
  },
  props: ["series", "code"],
  setup() {
    let selPrice = ref("");

    let filterPrice = (selectedPrice) => {
      selPrice.value = selectedPrice;
    };

    return { filterPrice, selPrice };
  },
};
</script>

<style>
.product {
  margin-top: 150px;
  z-index: 0;
  position: relative;
}
.color-text {
  color: red;
  text-decoration: underline;
}

@media (max-width: 1200px) {
  .col-md-3 {
    width: 100%;
  }
  .col-md-9 {
    width: 100%;
  }
  .product {
    margin: 150px auto 50px;
  }
}

@media (max-width: 800px) {
  .product {
    margin: 50px auto;
  }
}

@media (max-width: 500px) {
  .product {
    margin: 10px 20px;
  }

  .f-list {
    margin-left: 10px;
  }

  .p-list {
    margin-left: -10px;
  }
}
</style>
