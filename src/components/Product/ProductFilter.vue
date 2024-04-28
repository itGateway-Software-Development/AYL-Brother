<template>
  <div class="product-filter text-start">
    <p class="mb-3">Product</p>
    <div class="filter-header">
      <h4 class="mb-2 fw-bold">Filter List</h4>
      <p class="mb-2"><span class="color-text">Boxer Briefs</span></p>
      <p><span class="color-text">Briefs</span></p>
    </div>
    <div class="filter-list mt-4">
      <div class="filter-price">
        <div class="d-flex justify-content-between">
          <h5 class="fw-bold">Price</h5>
          <span
            class="material-symbols-outlined"
            @click="price_show = !price_show"
          >
            expand_more
          </span>
        </div>
        <div
          class="price mt-2 ms-2"
          v-if="price_show"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="8000"
        >
          <ul>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault"
                  >10000MMK - 15000MMK
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault"
                  >15000MMK - 20000MMK
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault"
                  >20000MMK - 30000MMK
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="filter-fabric">
        <div class="d-flex justify-content-between">
          <h5 class="fw-bold">Fabric</h5>
          <span
            class="material-symbols-outlined"
            @click="fabric_show = !fabric_show"
          >
            expand_more
          </span>
        </div>
        <div
          class="price mt-2 ms-2"
          v-if="fabric_show"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="8000"
        >
          <ul>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault"
                  >Bamboo Fibre
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault"
                  >Lycra Modal
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault"
                  >Lycra Spandex
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let price_show = ref(false);
    let fabric_show = ref(false);

    return { price_show, fabric_show };
  },
};
</script>

<style>
.color-text {
  color: red;
  text-decoration: underline;
}
.filter-price {
  padding: 10px 0;
  border-top: 1px solid #111111;
  border-bottom: 1px solid #111111;
}

.filter-fabric {
  padding: 10px 0;
  border-bottom: 1px solid #111111;
}

.filter-list {
  width: 300px;
  padding: 10px;
  margin-left: -10px;
  z-index: 0;
}

.filter-price,
.filter-fabric .material-symbols-outlined {
  cursor: pointer;
}
</style>
