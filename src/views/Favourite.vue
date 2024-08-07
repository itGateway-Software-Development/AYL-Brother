<template>
  <div class="favourite">
    <div>
      <Fav></Fav>
    </div>
  </div>
</template>

<script>
import Fav from "../components/Fav";
export default {
  components: { Fav },
};
</script>

<style>
.favourite {
  margin: 100px 0px;
  width: 100% !important;
  height: 100%;
  background-color: var(--secondary-background);
}

@media (max-width: 860px) {
  .favourite {
    margin: 30px 0px;
  }
}
</style>
