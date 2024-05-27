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
  margin: 70px 0px;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
}

@media (max-width: 500px) {
  .cart {
    margin: 0px;
  }
}
</style>
