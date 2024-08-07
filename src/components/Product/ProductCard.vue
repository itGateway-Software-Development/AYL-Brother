<template>
  <div>
    <div class="product-card">
      <div class="row align-content-center card-list">
        <div
          class="col-6 col-md-4 col-sm-6 mb-5 p-card-col"
          v-for="product in filteredProducts"
          :key="product.id"
        >
          <div class="p-card mb-3">
            <router-link
              :to="{ name: 'productDetail', params: { id: product.id } }"
              class="product-link"
            >
              <div class="card-img mb-2">
                <img :src="product.img" class="img-fluid" alt="" />
              </div>
            </router-link>

            <div class="p-color text-center mb-2">
              <p>Color: {{ product.color }}</p>
            </div>
            <div class="card-content text-start">
              <p class="code">Product-code: {{ product.code }}</p>
              <p>{{ product.pics }}</p>
              <p>Price: {{ product.price }} MMK</p>
              <p>
                Selected Size:
                {{ selectedSize }}
              </p>
              <p v-if="!selectedSize">Selected Size: Please Select the size</p>
            </div>
            <div class="size-button">
              <div class="row mt-3 px-3 card-size">
                <div
                  class="size col-3 mb-3 size-col"
                  id="size"
                  v-for="size in product.size"
                  :key="size.id"
                  @click="selectSize(size.size)"
                >
                  <p>{{ size.size }}</p>
                </div>
              </div>
              <div class="card-button-group mt-3">
                <div class="btn add-btn mb-3" @click="addToCart(product)">
                  Add to Bag
                </div>
                <div class="btn wish-btn d-none">Add to WishList</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <v-btn v-if="loading" :loading="loading" class="mx-auto my-4"
        >Loading...</v-btn
      > -->
    </div>
  </div>
</template>

<script>
import { computed, defineProps, inject, onMounted, ref, watch } from "vue";

import { mapActions, useStore, mapGetters } from "vuex";
import product from "../../store/modules/product";
import { useRoute } from "vue-router";

export default {
  props: ["series", "code"],
  setup(props) {
    const Swal = require("sweetalert2");
    const route = useRoute();
    const store = useStore();
    const series = ref(props.series);
    const code = ref();
    const filterSize = ref([]);

    // const filteredProducts = computed(() => store.getters.filteredProducts);
    const products = computed(() => store.getters.filteredProducts);
    const filteredProducts = ref([]);

    async function api() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            Array.from({ length: 10 }, (k, v) => v + items.value.at(-1) + 1)
          );
        }, 1000);
      });
    }
    async function load({ done }) {
      // Perform API call
      const res = await api();

      items.value.push(...res);

      done("ok");
    }

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
    const sizes = [
      {
        id: 1,
        size: "M",
        sizedetail: "Medium",
      },
      {
        id: 2,
        size: "L",
        sizedetail: "Large",
      },
      {
        id: 3,
        size: "XL",
        sizedetail: "X Large",
      },
      {
        id: 4,
        size: "XXL",
        sizedetail: "XXL",
      },
    ];

    const items = computed(() => store.getters["product"]);

    const size = computed(() => store.getters["sizes"]);

    const selectedSize = ref(null);

    const quantity = ref(1);

    const addToCart = (product) => {
      if (!selectedSize.value) {
        Swal.fire({
          title: "Warning",
          text: "Please Select Size !!",
          icon: "warning",
          confirmButtonText: "Ok",
        });
        return;
      }
      const productToAdd = {
        id: product.id,
        series: product.series,
        cat: product.cat,
        code: product.code,
        color: product.color,
        price: product.price,
        pics: product.pics,
        img: product.img,
        quantity: quantity.value,
        size: selectedSize.value,
      };

      store.dispatch("addToCart", productToAdd);
      selectedSize.value = "please select size";
    };

    const selectSize = (size) => {
      selectedSize.value = size;
    };

    const scrollableElement = ref(null);
    const scrollHeight = ref(0);

    // onMounted(() => {
    //   window.addEventListener("scroll", () => {
    //     const scrollable = document.documentElement.scrollHeight - 22998;
    //     const scrolled = window.scrollY;

    //     console.log(scrollable);

    //     if (Math.ceil(scrolled) === scrollable) {
    //       console.log("hello world");
    //       alert("Hello wolrd");
    //     }
    //   });
    // });

    onMounted(() => {
      window.scroll(0, 0);
    });

    return {
      items,
      sizes,
      selectSize,
      selectedSize,
      addToCart,
      filteredProducts,
      scrollHeight,
    };
  },
};
</script>

<style scoped>
.card-img img {
  border-radius: 5px;
  width: 100%;
  object-fit: cover;
}

.p-color {
  color: var(--font-color);
}

.card-content {
  line-height: 35px;
  color: var(--font-color);
}

.product-link {
  text-decoration: none;
  color: #111;
}

.size-button {
  width: 320px;
  margin: 0px auto;
}

.add-btn {
  width: 300px;
  background: #111;
  color: #fff;
  margin: 0px auto;
}

.add-btn:hover {
  background: #b7b7b7;
  color: #fff;
}

.selected-size {
  background-color: red !important;
  color: #fff !important;
}

.wish-btn {
  width: 300px;
  border: 1px solid var(--border-color);
  color: var(--font-color);
  margin: 0px auto;
}

.wish-btn:hover {
  background: #b7b7b7;
  color: #fff;
}

.code {
  font-weight: 100;
}

.card {
  margin: 0px auto;
}

.size {
  height: 40px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  cursor: pointer;
  color: var(--font-color);
  text-align: center;
  align-content: center;
  padding: 0px 10px;
  width: 60px;
  margin: 0px 10px;
}

.size p {
  font-size: 14px;
  font-weight: bold;
}

.size:hover {
  background: red;
  color: #ffffff !important;
}

@media (max-width: 1600px) {
  .add-btn,
  .wish-btn {
    width: 300px;
  }
}
/* 
@media (min-width: 100px) {
  .add-btn,
  .wish-btn {
    width: 350px;
  }
} */

@media (max-width: 1280px) {
  .p-card-col {
    width: 33.3333%;
  }
  .add-btn,
  .wish-btn {
    width: 350px !important;
  }

  .size-col {
    width: 21%;
  }
  .size-button {
    width: auto;
    padding: 0px 5px;
  }
}

@media (max-width: 1024px) {
  .add-btn,
  .wish-btn {
    width: 280px;
  }
}

@media (max-width: 1390px) {
  .add-btn,
  .wish-btn {
    width: 260px;
  }
  .size-col {
    width: 21%;
  }
}

@media (max-width: 1190px) {
  .add-btn,
  .wish-btn {
    width: 280px;
  }
}

/* @media (min-width: 900px) {
  .add-btn,
  .wish-btn {
    width: 280px;
  }
  .size-col {
    width: 40%;
  }
} */

@media (max-width: 860px) {
  .p-card-col {
    width: 50%;
  }
  .p-card {
    width: auto;
  }

  .add-btn,
  .wish-btn {
    width: auto;
  }
  .size-button {
    width: auto;
    margin: 0px auto;
  }
}

@media (max-width: 600px) {
  .p-card {
    width: 160px;
  }
  .add-btn,
  .wish-btn {
    width: 150px !important;
  }
  .p-color {
    font-size: 10px;
    font-weight: 700;
  }

  .card-size {
    flex-wrap: wrap;
  }

  .card-content {
    font-size: 14px;
    line-height: 22px;
    padding-left: 10px;
  }
  .size-col {
    width: 30%;
  }

  .size p {
    font-size: 12px;
  }

  .content-wrapper {
    padding: 0px;
  }

  .card-list {
    align-content: center;
    justify-content: center;
  }
}
</style>
