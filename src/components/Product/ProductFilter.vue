<template>
  <div class="product-filter text-start">
    <div class="text-filter">
      <p class="mb-3 route-text">Men / {{ this.$route.name }}</p>
      <p class="mb-5 res">{{ filteredProducts.length }} Result</p>
    </div>
    <div class="f-1">
      <p class="mb-3 route-text">Men / {{ this.$route.name }}</p>
      <p class="mb-5 res">{{ filteredProducts.length }} Result</p>
      <div class="filter-header">
        <hr />
        <h4 class="fw-bold">Filter Product</h4>
        <!-- <p class="mb-2"><span class="color-text">Boxer Briefs</span></p>
        <p><span class="color-text">Briefs</span></p> -->
      </div>
      <div class="filter-list">
        <!-- <div class="filter-category">
          <div class="d-flex justify-content-between">
            <h5 class="fw-bold">Category</h5>
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
            <div>
              <label
                v-for="code in availableCode"
                :key="code"
                class="filter-cat"
              >
                <input type="checkbox" :value="code" v-model="selectedCat" />
                <p class="ps-2">RO: {{ code }}</p>
              </label>
            </div>
          </div>
        </div> -->

        <div class="filter-fabric">
          <div class="d-flex justify-content-between">
            <h5 class="fw-bold">Series</h5>
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
            <label class="filter-cat mb-2">
              <router-link class="nav-link" to="/products/bamboo/0">
                <p class="">Bamboo Series</p></router-link
              >
            </label>
            <label class="filter-cat mb-2">
              <router-link class="nav-link" to="/products/spandex/0">
                <p class="">Spandex Series</p></router-link
              >
            </label>
            <label class="filter-cat mb-2">
              <router-link class="nav-link" to="/products/lycra/0">
                <p class="">Lycra Modal Series</p></router-link
              >
            </label>
          </div>
        </div>
        <div class="filter-size">
          <div class="d-flex justify-content-between">
            <h5 class="fw-bold">Size Guide</h5>
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
          </div></v-list-item
        >
        <v-divider></v-divider>
        <v-divider></v-divider>
        <v-list-item>
          <div class="filter-fabric">
            <div class="d-flex justify-content-between">
              <h5 class="fw-bold">Series</h5>
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
              <label class="filter-cat mb-2">
                <router-link class="nav-link" to="/products/bamboo/0">
                  <p class="">Bamboo Series</p></router-link
                >
              </label>
              <label class="filter-cat mb-2">
                <router-link class="nav-link" to="/products/spandex/0">
                  <p class="">Spandex Series</p></router-link
                >
              </label>
              <label class="filter-cat mb-2">
                <router-link class="nav-link" to="/products/lycra/0">
                  <p class="">Lycra Modal Series</p></router-link
                >
              </label>
            </div>
          </div>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <div class="filter-size">
            <div class="d-flex justify-content-between">
              <h5 class="fw-bold">Size Guide</h5>
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
        </v-list-item>
        <v-divider></v-divider>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import router from "@/router";

export default {
  props: ["series", "code"],
  setup(props, context) {
    const store = useStore();
    const product = computed(() => store.getters.filteredProducts);
    const drawer = ref(false);
    const route = useRoute();

    const fabric = ref([]);

    let price_show = ref(false);
    let fabric_show = ref(false);
    let color_show = ref(false);
    let size_show = ref(true);

    let islow = ref(false);
    let ismedium = ref(false);
    let ishigh = ref(false);
    let priceFilter;
    priceFilter = () => {
      context.emit("priceFilter", {
        islow: islow.value,
        ismedium: ismedium.value,
        ishigh: ishigh.value,
      });
    };

    const selectedSeries = ref([]);
    const selectedCat = ref([]);
    const availableSeries = [
      "Bamboo Series",
      "Lycra Modal Series",
      "Spandex Series",
    ]; // Example series, this could be dynamically generated
    // const availableCode = ref([8028, 8027, 8018, 8017, 8003, 8002]); // Example categories, can be generated dynamically

    const products = computed(() => store.getters.filteredProducts);
    const filteredProducts = ref([]);
    const series = ref(props.series);
    const code = ref();

    const codeValue = () => {
      if (props.code == 0) {
        code.value = null;
      } else {
        code.value = props.code;
      }
    };

    const filter = () => {
      codeValue();
      filteredProducts.value = products.value.filter((product) => {
        if (series.value && code.value) {
          return product.series == series.value && product.code == code.value;
        }
        if (series.value && code.value == null) {
          return product.series == series.value;
        }
        if (!series.value && !code.value) {
          return products;
        }
      });
    };

    watch(route, () => {
      code.value = route.params.code;
      series.value = route.params.series;
      filter();
    });

    onMounted(() => {
      filter();
    });

    watch(
      selectedSeries,
      (newSeries) => {
        if (selectedSeries == "Bamboo") {
          router.push("/products/bamboo");
        } else if (selectedSeries == "Lycra Modal") {
          router.push("/products/");
        }
      },
      { immediate: true }
    );

    // watch(
    //   selectedCat,
    //   (newCat) => {
    //     store.dispatch("setSelectedCat", newCat);
    //   },
    //   { immediate: true }
    // );

    return {
      fabric,
      price_show,
      fabric_show,
      color_show,
      size_show,
      drawer,
      priceFilter,
      selectedSeries,
      availableSeries,
      selectedCat,

      product,
      filteredProducts,
    };
  },
};
</script>

<style scoped>
.f-2 {
  display: none;
}

.f-1 {
  position: fixed;
  height: max-content;
  z-index: 9999;
}

.text-filter {
  display: none;
}

.route-text {
  text-transform: capitalize;
}

.color-text {
  color: red;
  text-decoration: underline;
}
.filter-category {
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

.filter-cat {
  display: flex;
  flex-direction: row;
}

.filter-cat p {
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 400;
}

.filter-category,
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

/* .product-filter {
  position: fixed;
  left: 20px;
} */

@media (max-width: 1200px) {
  .f-1 {
    display: none;
  }
  .f-2 {
    display: block;
  }
  .text-filter {
    display: block;
  }
  .f-2 .filter-category,
  .filter-fabric,
  .filter-color,
  .filter-size {
    border: 0px;
  }

  .res {
    margin-right: -10px;
  }

  .head-filter {
    display: flex;
    justify-content: space-between;
  }

  .row {
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
    height: 1200px !important;
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
    height: 650px !important;
    overflow: scroll;
  }

  .row {
    flex-wrap: wrap;
    width: 100%;
  }
  .col-6 {
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
  .res {
    margin-left: 0px;
  }
}
</style>
