<template>
  <div class="cart">
    <div>
      <AddtoCart></AddtoCart>
    </div>
  </div>
</template>

<script>
import AddtoCart from "../components/AddtoCart";
export default {
  components: { AddtoCart },
};
</script>

<style>
.cart {
  margin: 100px 0px;
  width: 100% !important;
  height: 100%;
  background-color: var(--secondary-background);
}

@media (max-width: 860px) {
  .cart {
    margin: 30px 0px;
  }
}
</style>
