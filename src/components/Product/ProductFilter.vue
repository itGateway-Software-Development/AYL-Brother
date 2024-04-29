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
      <div class="filter-color">
        <div class="d-flex justify-content-between">
          <h5 class="fw-bold">Color</h5>
          <span
            class="material-symbols-outlined"
            @click="color_show = !color_show"
          >
            expand_more
          </span>
        </div>
        <div
          class="row mt-2"
          v-if="color_show"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="8000"
        >
          <div class="col-3 mb-3">
            <div class="color">
              <div class="color-circle red"></div>
              <p>Red</p>
            </div>
          </div>
          <div class="col-3 mb-3">
            <div class="color">
              <div class="color-circle brown"></div>
              <p>Brown</p>
            </div>
          </div>
          <div class="col-3 mb-3">
            <div class="color">
              <div class="color-circle grey"></div>
              <p>Grey</p>
            </div>
          </div>
          <div class="col-3 mb-3">
            <div class="color">
              <div class="color-circle navy"></div>
              <p>Navy</p>
            </div>
          </div>
          <div class="col-3 mb-3">
            <div class="color">
              <div class="color-circle green"></div>
              <p>Green</p>
            </div>
          </div>
          <div class="col-3 mb-3">
            <div class="color">
              <div class="color-circle dark-red"></div>
              <p>Dark</p>
              <p>Red</p>
            </div>
          </div>
          <div class="col-3 mb-3">
            <div class="color">
              <div class="color-circle white-smoke"></div>
              <p>White</p>
              <p>Smoke</p>
            </div>
          </div>
          <div class="col-3 mb-3">
            <div class="color">
              <div class="color-circle light-green"></div>
              <p>Light</p>
              <p>Green</p>
            </div>
          </div>
          <div class="col-3 mb-3">
            <div class="color">
              <div class="color-circle dim-grey"></div>
              <p>Dim</p>
              <p>Grey</p>
            </div>
          </div>
          <div class="col-3 mb-3">
            <div class="color">
              <div class="color-circle steel-blue"></div>
              <p>Steel</p>
              <p>Blue</p>
            </div>
          </div>
          <div class="col-3 mb-3">
            <div class="color">
              <div class="color-circle dark-grey"></div>
              <p>Dark</p>
              <p>Grey</p>
            </div>
          </div>
          <div class="col-3 mb-3">
            <div class="color">
              <div class="color-circle royal-blue"></div>
              <p>Royal</p>
              <p>Blue</p>
            </div>
          </div>
        </div>
      </div>
      <div class="filter-size">
        <div class="d-flex justify-content-between">
          <h5 class="fw-bold">Size</h5>
          <span
            class="material-symbols-outlined"
            @click="size_show = !size_show"
          >
            expand_more
          </span>
        </div>
        <div
          class="size-filter"
          v-if="size_show"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="8000"
        >
          <p>Size of Waist(Inch)</p>
          <div class="row mt-3 justify-content-between">
            <div class="col-6 mb-3">
              <div class="size">
                <p class="text-center">M(28-30)</p>
              </div>
            </div>
            <div class="col-6 mb-3">
              <div class="size">
                <p class="text-center">L(31-32)</p>
              </div>
            </div>
            <div class="col-6">
              <div class="size">
                <p class="text-center">XL(33-35)</p>
              </div>
            </div>
            <div class="col-6">
              <div class="size">
                <p class="text-center">XXL(36-38)</p>
              </div>
            </div>
          </div>
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
    let color_show = ref(false);
    let size_show = ref(false);

    return { price_show, fabric_show, color_show, size_show };
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

.filter-color {
  padding: 10px 0;
  border-bottom: 1px solid #111111;
}

.filter-size {
  padding: 10px 0;
  border-bottom: 1px solid #111111;
}

.color {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.color-circle {
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: 1px solid #111111;
  border-radius: 50%;
}

.red {
  background: red;
}

.brown {
  background: #964b00;
}

.grey {
  background: #808080;
}

.navy {
  background: #000080;
}

.green {
  background: #00ff00;
}

.dark-red {
  background: #8b0000;
}

.white-smoke {
  background: #f5f5f5;
}

.light-green {
  background: #90ee90;
}

.dim-grey {
  background: #696969;
}

.steel-blue {
  background: #4682b4;
}

.dark-grey {
  background: #a9a9a9;
}

.royal-blue {
  background: #4169e1;
}

.color p {
  font-weight: bold;
}

.size {
  width: 140px;
  height: 50px;
  border: 1px solid #111111;
  border-rsize: 5px;
  cursor: pointer;
}

.size p {
  font-size: 20px;
  font-weight: bold;
  padding: 9px 0;
}

.size:hover {
  background: red;
  color: #ffffff;
}
</style>
