<template>
  <div>
    <div class="product-card">
      <div class="row align-content-center card-list">
        <div
          class="col-6 col-md-4 col-sm-6 mb-5 p-card-col"
          v-for="product in products"
          :key="product.id"
        >
          <div class="p-card mb-3">
            <router-link
              :to="{ name: 'productDetail', params: { id: product.id } }"
              class="product-link"
            >
              <div class="card-img mb-2">
                <img :src="product.main_image" class="img-fluid" alt="" />
              </div>
            </router-link>

            <div class="p-color text-center mb-2">
              <p>Color: {{ product.name }}</p>
            </div>
            <div class="card-content text-start">
              <p class="code">Product-code: {{ product.series }}</p>
              <p>{{ product.product_info }}</p>
              <p>Price: {{ product.price }} MMK</p>
              <p v-if="selectedSize">
                Selected Size:
                {{ selectedSize }}
              </p>
              <p v-else>Selected Size: Please Select a Size to Order</p>
            </div>
            <div class="size-button">
              <div class="row mt-3 px-3 card-size">
                <button
                  class="size col-3 mb-3 size-col"
                  id="size"
                  @click="selectSize('M', product, $event)"
                  :disabled="product.m_size_stock < 1"
                  :class="{
                    'bg-grey-darken-2': product.m_size_stock < 1,
                    'd-none':
                      product.series == 'RO:9001' ||
                      product.series == 'RO:9002',
                  }"
                >
                  <p style="pointer-events: none">M</p>
                </button>
                <button
                  class="size col-3 mb-3 size-col"
                  id="size"
                  @click="selectSize('L', product, $event)"
                  :disabled="product.lg_size_stock < 1"
                  :class="{
                    'bg-grey-darken-2': product.lg_size_stock < 1,
                    'd-none':
                      product.series == 'RO:9001' ||
                      product.series == 'RO:9002',
                  }"
                >
                  <p style="pointer-events: none">L</p>
                </button>
                <button
                  class="size col-3 mb-3 size-col"
                  id="size"
                  @click="selectSize('XL', produc, $event)"
                  :disabled="product.xl_size_stock < 1"
                  :class="{
                    'bg-grey-darken-2': product.xl_size_stock < 1,
                    'd-none':
                      product.series == 'RO:9001' ||
                      product.series == 'RO:9002',
                  }"
                >
                  <p style="pointer-events: none">XL</p>
                </button>
                <button
                  class="size col-3 mb-3 size-col"
                  id="size"
                  @click="selectSize('XXL', produ, $event)"
                  :disabled="product.xxl_size_stock < 1"
                  :class="{
                    'bg-grey-darken-2': product.xxl_size_stock < 1,
                    'd-none':
                      product.series == 'RO:9001' ||
                      product.series == 'RO:9002',
                  }"
                >
                  <p style="pointer-events: none">XXL</p>
                </button>
                <button
                  class="size col-3 mb-3 size-col d-none"
                  id="size"
                  @click="selectSize('3XL', produ, $eventct)"
                  :disabled="product.xxxl_size_stock < 1"
                  :class="{
                    'bg-grey-darken-2': product.xxxl_size_stock < 1,
                    'd-block':
                      product.series == 'RO:9001' ||
                      product.series == 'RO:9002',
                  }"
                >
                  <p style="pointer-events: none">3XL</p>
                </button>
                <button
                  class="size col-3 mb-3 size-col d-none"
                  id="size"
                  @click="selectSize('4XL', produ, $eventct)"
                  :disabled="product.xxxxl_size_stock < 1"
                  :class="{
                    'bg-grey-darken-2': product.xxxxl_size_stock < 1,
                    'd-block':
                      product.series == 'RO:9001' ||
                      product.series == 'RO:9002',
                  }"
                >
                  <p style="pointer-events: none">4XL</p>
                </button>
              </div>
              <div class="card-button-group mt-3">
                <div
                  class="btn add-btn mb-3"
                  @click="addToCart(product)"
                  :disabled="product.m_size_stock < 1"
                >
                  Add to Bag
                </div>
                <div class="btn wish-btn">Add to WishList</div>
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
import axios from "axios";
import getProducts from "../../composable/getProduct";

export default {
  props: ["categories", "series"],
  setup(props) {
    const Swal = require("sweetalert2");
    const route = useRoute();
    const store = useStore();
    const categories = ref(props.categories);
    const series = ref(props.series);
    const code = ref();
    const cartItems = computed(() => store.getters["cartItems"]);

    let { products, error, getProduct } = getProducts();

    const filter = () => {
      // categories.value = id;
      // series.value = seriesID;
      // console.log(categories.value);
      // console.log(series.value);

      products.value = products.value.filter((product) => {
        if (categories.value && !series.value) {
          return product.category_id == categories.value;
        }
        if (series.value && categories.value) {
          return (
            product.series_id == series.value &&
            product.category_id == categories.value
          );
        }
        if (!categories.value && !series.value) {
          return product;
        }
      });
    };

    const items = computed(() => store.getters["product"]);

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
        code: product.series,
        color: product.name,
        price: product.price,
        pics: product.product_info,
        img: product.main_image,
        quantity: quantity.value,
        size: selectedSize.value,
      };

      const existingItem = cartItems.value.find(
        (item) =>
          item.code === productToAdd.code &&
          item.size === productToAdd.size &&
          item.color === productToAdd.color
      );

      if (existingItem) {
        Swal.fire({
          title: "Warning",
          text: "Already added to the cart",
          icon: "warning",
          confirmButtonText: "Ok",
        });
        return;
      } else {
        store.dispatch("addToCart", productToAdd);
      }
    };

    const selectSize = (size, product, event) => {
      document.querySelectorAll(".size-col").forEach((btn) => {
        btn.classList.remove("selected-size");
      });

      event.target.closest("button").classList.add("selected-size");
      selectedSize.value = size;
    };

    const scrollableElement = ref(null);
    const scrollHeight = ref(0);

    watch(route, async () => {
      categories.value = props.categories;
      series.value = props.series;
      await getProduct();
      filter();
      window.scroll(0, 0);
    });

    onMounted(async () => {
      await getProduct();
      filter();
      window.scroll(0, 0);
    });

    return {
      items,
      selectSize,
      selectedSize,
      addToCart,
      scrollHeight,
      products,
      categories,
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

.card-size {
  width: 300px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: 0px auto;
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
  margin: 0px 4px;
}

.diable-card {
  border-color: #b7b7b7;
  color: #b7b7b7;
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

  .size-button {
    width: 150px;
  }

  .card-size {
    width: 150px;
    flex-wrap: wrap;
    padding: 0px !important;
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
