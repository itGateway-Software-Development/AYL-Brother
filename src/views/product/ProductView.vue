<template>
  <div class="product content-wrapper">
    <div class="row">
      <div class="col-12 col-md-3 col-sm-12 f-list">
        <ProductFilter
          @priceFilter="filterPrice"
          style="position: sticky; top: 150px"
        ></ProductFilter>
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
import { ref, onMounted } from "vue";
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

    onMounted(() => {
      window.scroll(0, 0);
    });

    return { filterPrice, selPrice };
  },
};
</script>

<style scoped>
.product {
  margin-top: 150px;
  z-index: 0;
  position: relative;
  background: var(--background-color);
}
.color-text {
  color: red;
  text-decoration: underline;
}

@media (max-width: 1400px) {
  .content-wrapper {
    padding: 0px 6%;
  }
}

@media (max-width: 1280px) {
  .col-md-3 {
    width: 100%;
  }
  .col-md-9 {
    width: 100%;
  }
  .product {
    margin: 150px auto 50px;
  }
  .content-wrapper {
    padding: 0px 3%;
  }
}

@media (max-width: 860px) {
  .product {
    margin: 50px auto;
  }
}

@media (max-width: 500px) {
  .product {
    display: block;
    margin: 20px auto;
  }
}
</style>
