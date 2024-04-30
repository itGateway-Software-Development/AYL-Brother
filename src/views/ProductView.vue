<template>
  <div class="product container content-wrapper">
    <div class="row">
      <div class="col-12 col-md-3 col-sm-12">
        <ProductFilter></ProductFilter>
      </div>
      <div class="col-12 col-md-9 col-sm-12">
        <h1>Hello World</h1>
      </div>
    </div>
  </div>
</template>

<script>
import ProductFilter from "../components/Product/ProductFilter";
export default {
  components: { ProductFilter },
};
</script>

<style>
.product {
  margin-top: 100px;
}
.color-text {
  color: red;
  text-decoration: underline;
}

@media (max-width: 1200px) {
}

@media (max-width: 500px) {
  .product {
    margin: 0;
  }
}
</style>
