<template>
  <div class="product-filter text-start">
    <p class="mb-3 route-text">Men / {{this.$route.name}}</p>
    <div class="f-1">
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
            <div class="col-3 col-md-2 mb-3">
              <div class="color">
                <div class="color-circle red"></div>
                <p>Red</p>
              </div>
            </div>
            <div class="col-3 col-md-2 mb-3">
              <div class="color">
                <div class="color-circle brown"></div>
                <p>Brown</p>
              </div>
            </div>
            <div class="col-3 col-md-2 mb-3">
              <div class="color">
                <div class="color-circle grey"></div>
                <p>Grey</p>
              </div>
            </div>
            <div class="col-3 col-md-2 mb-3">
              <div class="color">
                <div class="color-circle navy"></div>
                <p>Navy</p>
              </div>
            </div>
            <div class="col-3 col-md-2 mb-3">
              <div class="color">
                <div class="color-circle green"></div>
                <p>Green</p>
              </div>
            </div>
            <div class="col-3 col-md-2 mb-3">
              <div class="color">
                <div class="color-circle dark-red"></div>
                <p>Dark</p>
                <p>Red</p>
              </div>
            </div>
            <div class="col-3 col-md-2 mb-3">
              <div class="color">
                <div class="color-circle white-smoke"></div>
                <p>White</p>
                <p>Smoke</p>
              </div>
            </div>
            <div class="col-3 col-md-2 mb-3">
              <div class="color">
                <div class="color-circle light-green"></div>
                <p>Light</p>
                <p>Green</p>
              </div>
            </div>
            <div class="col-3 col-md-2 mb-3">
              <div class="color">
                <div class="color-circle dim-grey"></div>
                <p>Dim</p>
                <p>Grey</p>
              </div>
            </div>
            <div class="col-3 col-md-2 mb-3">
              <div class="color">
                <div class="color-circle steel-blue"></div>
                <p>Steel</p>
                <p>Blue</p>
              </div>
            </div>
            <div class="col-3 col-md-2 mb-3">
              <div class="color">
                <div class="color-circle dark-grey"></div>
                <p>Dark</p>
                <p>Grey</p>
              </div>
            </div>
            <div class="col-3 col-md-2 mb-3">
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
    <div class="f-2 mb-3">
      <div class="app-bar d-flex">
        <p>Filter & Sort</p>
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          variant="text"
          class="app-bar"
        >
          <span class="material-symbols-outlined"> page_info </span>
        </v-app-bar-nav-icon>
      </div>
      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <v-list-item
          ><div class="filter-header">
            <div class="d-flex justify-content-between mb-3">
              <h4 class="fw-bold mt-3">Filter & Sort</h4>
              <v-app-bar-nav-icon @click.stop="drawer = !drawer" variant="text">
                <span class="material-symbols-outlined">
                  close
                </span></v-app-bar-nav-icon
              >
            </div>
            <div class="d-flex justify-content-between">
              <p><span class="color-text">Boxer Briefs</span></p>
              <p><span class="color-text">Briefs</span></p>
            </div>
          </div></v-list-item
        >
        <v-divider></v-divider>
        <v-list-item>
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
            <div class="price mt-2 ms-2" v-if="price_show">
              <ul>
                <li>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="low"
                      id="flexCheckDefault"
                      v-model="islow"
                      @change="priceFilter"
                    />
                    <label class="form-check-label" for="10000MMK-15000MMK"
                      >10000MMK - 15000MMK
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="medium"
                      id="flexCheckDefault"
                      v-model="ismedium"
                      @change="priceFilter"
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
                      value="high"
                      id="flexCheckDefault"
                      v-model="ishigh"
                      @change="priceFilter"
                    />
                    <label class="form-check-label" for="flexCheckDefault"
                      >20000MMK - 30000MMK
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
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
            <div class="row mt-2" v-if="color_show">
              <div class="col-3 col-md-2 mb-3">
                <div class="color">
                  <div class="color-circle red"></div>
                  <p>Red</p>
                </div>
              </div>
              <div class="col-3 col-md-2 mb-3">
                <div class="color">
                  <div class="color-circle brown"></div>
                  <p>Brown</p>
                </div>
              </div>
              <div class="col-3 col-md-2 mb-3">
                <div class="color">
                  <div class="color-circle grey"></div>
                  <p>Grey</p>
                </div>
              </div>
              <div class="col-3 col-md-2 mb-3">
                <div class="color">
                  <div class="color-circle navy"></div>
                  <p>Navy</p>
                </div>
              </div>
              <div class="col-3 col-md-2 mb-3">
                <div class="color">
                  <div class="color-circle green"></div>
                  <p>Green</p>
                </div>
              </div>
              <div class="col-3 col-md-2 mb-3">
                <div class="color">
                  <div class="color-circle dark-red"></div>
                  <p>Dark</p>
                  <p>Red</p>
                </div>
              </div>
              <div class="col-3 col-md-2 mb-3">
                <div class="color">
                  <div class="color-circle white-smoke"></div>
                  <p>White</p>
                  <p>Smoke</p>
                </div>
              </div>
              <div class="col-3 col-md-2 mb-3">
                <div class="color">
                  <div class="color-circle light-green"></div>
                  <p>Light</p>
                  <p>Green</p>
                </div>
              </div>
              <div class="col-3 col-md-2 mb-3">
                <div class="color">
                  <div class="color-circle dim-grey"></div>
                  <p>Dim</p>
                  <p>Grey</p>
                </div>
              </div>
              <div class="col-3 col-md-2 mb-3">
                <div class="color">
                  <div class="color-circle steel-blue"></div>
                  <p>Steel</p>
                  <p>Blue</p>
                </div>
              </div>
              <div class="col-3 col-md-2 mb-3">
                <div class="color">
                  <div class="color-circle dark-grey"></div>
                  <p>Dark</p>
                  <p>Grey</p>
                </div>
              </div>
              <div class="col-3 col-md-2 mb-3">
                <div class="color">
                  <div class="color-circle royal-blue"></div>
                  <p>Royal</p>
                  <p>Blue</p>
                </div>
              </div>
            </div>
          </div>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
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
            <div class="size-filter" v-if="size_show">
              <p>Size of Waist(Inch)</p>
              <div class="row mt-3 all-size justify-content-between">
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
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
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
            <div class="price mt-2 ms-2" v-if="fabric_show">
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
        </v-list-item>
        <v-divider></v-divider>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup(props, context) {
    const drawer = ref(false);

    let price_show = ref(false);
    let fabric_show = ref(false);
    let color_show = ref(false);
    let size_show = ref(false);

    let islow = ref(false)
    let ismedium = ref(false)
    let ishigh = ref(false)
    let priceFilter
      priceFilter = () =>{
     context.emit("priceFilter", {islow:islow.value,ismedium:ismedium.value,ishigh:ishigh.value} )
   }





    

    return { price_show, fabric_show, color_show, size_show, drawer , priceFilter, islow, ismedium , ishigh };
  },
};
</script>

<style scoped>
.f-2 {
  display: none;
}

.route-text{
  text-transform: capitalize;
}

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

.filter-color {
  padding: 10px 0;
  border-bottom: 1px solid #111111;
}

.filter-size {
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
.filter-fabric,
.filter-color,
.filter-size .material-symbols-outlined {
  cursor: pointer;
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
  border-radius: 5px;
  cursor: pointer;
}

.size p {
  font-size: 20px;
  font-weight: bold;
  padding: 9px 0;
}


.size:hover {
  background: red;
  color: #ffffff !important;
}

@media (max-width: 1200px) {
 .f-1{
  display: none;
 }
 .f-2{
  display: block;
 }
  .f-2 .filter-price,
  .filter-fabric,
  .filter-color,
  .filter-size {
    border: 0px;
  }

 .row{
  flex-wrap: nowrap;
  width: 50%;
 }

 .col-6 {
  width: 0%;
 }

  .product-filter {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }
  .app-bar {
    align-items: center;
    padding: 0 !important;
    margin: 0 !important;
  }
   .v-navigation-drawer {
    width: 1200px !important;
    height: 1300px !important;
    overflow: scroll;
  }
}

@media (max-width: 500px) {
  .f-2 {
    display: block;
  }
  .product-filter {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }
  .v-navigation-drawer {
    width: 500px !important;
    height: 870px !important;
    overflow: scroll;
  }

  .row {
  flex-wrap:  wrap;
  width: 100%;
}
.col-6{
  width: 50%;
}

 
  .app-bar {
    align-items: center;
    padding: 0 !important;
    margin: 0 !important;
  }
  .app-bar p {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: normal;
  }
}
</style>
