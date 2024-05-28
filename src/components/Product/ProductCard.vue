<template>
  <div>
    <div class="product-card container">
      <div class="row align-content-center card-list">
        <div
          class="col-6 col-md-4 col-sm-6 mb-3 p-card-col"
          v-for="product in filteredProducts"
          :key="product.id"
        >
          <router-link
            :to="{ name: 'productDetail', params: { id: product.id } }"
            class="product-link"
          >
            <div class="p-card mb-3">
              <div class="card-img mb-2">
                <img :src="product.img" class="img-fluid" alt="" />
              </div>
              <div class="p-color text-center mb-2">
                <p>Color: {{ product.color }}</p>
              </div>
              <div class="card-content text-start">
                <p class="code">Product-code: {{ product.code }}</p>
                <p>{{ product.pics }}</p>
                <p>Price: {{ product.price }} MMK</p>
                <p v-if="selectedSize">Selected Size: {{ selectedSize }}</p>
              </div>
              <div class="row mt-3 justify-content-around px-3">
                <div
                  class="size col-3 mb-3 size-col"
                  id="size"
                  v-for="size in sizes"
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
                <div class="btn wish-btn">Add to WishList</div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineProps, inject, onMounted, ref, watch } from "vue";
import { mapActions, useStore, mapGetters } from "vuex";
import product from "../../store/modules/product";

export default {
  setup() {
    const store = useStore();

    const filteredProducts = computed(() => store.getters.filteredProducts);

    const items = computed(() => store.getters["product"]);

    const sizes = [
      {
        id: 1,
        size: "M",
      },
      {
        id: 2,
        size: "L",
      },
      {
        id: 3,
        size: "XL",
      },
      {
        id: 4,
        size: "XXL",
      },
    ];

    const selectedSize = ref(null);

    const quantity = ref(1);

    const addToCart = (product) => {
      if (!selectedSize.value) {
        alert("Please select a size");
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
    };

    const selectSize = (size) => {
      selectedSize.value = size;
    };

    return {
      items,
      sizes,
      selectSize,
      selectedSize,
      addToCart,
      filteredProducts,
    };
  },
};
</script>

<style>
.card-img img {
  border-radius: 5px;
}

.card-content {
  line-height: 35px;
}

.product-link {
  text-decoration: none;
  color: #111;
}

.add-btn {
  width: 370px;
  background: #111;
  color: #fff;
}

.add-btn:hover {
  background: #b7b7b7;
  color: #fff;
}

.wish-btn {
  width: 370px;
  border: 1px solid #111;
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
  width: 80px;
  height: 40px;
  border: 1px solid #111111;
  border-radius: 5px;
  cursor: pointer;
}

.size p {
  font-size: 14px;
  font-weight: bold;
  padding: 9px 0;
}

.size.active {
  background: red;
  color: #fff;
}

.size:hover {
  background: red;
  color: #ffffff !important;
}

.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid #fff;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-bottom: 4px solid #ff3d00;
  border-left: 4px solid transparent;
  animation-direction: 3s;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 1200px) {
  .p-card-col {
    width: 33.3333%;
  }
  .add-btn,
  .wish-btn {
    width: 250px;
  }

  .size-col {
    width: 21%;
  }
}

@media (max-width: 800px) {
  .p-card-col {
    width: 50%;
  }
  .p-card {
    width: 300px;
  }

  .card-list {
  }
}

@media (max-width: 500px) {
  .p-card-col {
    width: 50%;
  }
}

@media (max-width: 450px) {
  .add-btn,
  .wish-btn {
    width: 180px;
  }
}
</style>
