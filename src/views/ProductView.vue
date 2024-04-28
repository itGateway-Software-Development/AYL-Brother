<template>
  <div class="product container content-wrapper">
    <div class="row">
      <div class="col-3">
        <ProductFilter></ProductFilter>
      </div>
      <div class="col-9"></div>
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
</style>
