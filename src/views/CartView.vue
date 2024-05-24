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
  margin-top: 70px;
  width: 100%;
  height: 100%;
  background-color: lightgray;
}
</style>
