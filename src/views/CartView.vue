<template>
  <div class="cart">
    <AddtoCart></AddtoCart>
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
  margin-top: 100px;
}
</style>
