<template>
  <div class="add-to-cart">
    <div class="container content-wrapper justify-content-center">
      <div class="_cart mb-4">
        <div class="cart-heading">
          <h3 class="fs-4 text-start">Shopping Bag</h3>
        </div>
        <div class="flex-coloum">
          <div
            class="cart-card p-3 desktop-card"
            v-for="item in cartItems"
            :key="item.id"
          >
            <div class="d-flex justify-content-around align-items-center">
              <div class="cart-icon d-flex">
                <span class="material-symbols-outlined pe-4"> close </span>
                <span class="material-symbols-outlined ps-4"> favorite </span>
              </div>
              <div class="cart-img">
                <img :src="item.img" alt="" />
              </div>
              <div class="cart-descreption text-start">
                <p>
                  {{ item.descreption }}
                </p>
              </div>
              <div class="input-group cart-plus-minus">
                <span class="input-group-prepend">
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-number"
                    data-type="minus"
                    data-field="quant[1]"
                    @click="decreaseQuantity(item.id)"
                  >
                    <span class="material-symbols-outlined"> remove </span>
                  </button>
                </span>
                <input
                  type="text"
                  :value="item.quantity"
                  class="form-control input-number text-center"
                  min="1"
                  max="10"
                />
                <span class="input-group-append">
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-number"
                    data-type="plus"
                    data-field="quant[1]"
                    @click="increaseQuantity(item.id)"
                  >
                    <span class="material-symbols-outlined"> add </span>
                  </button>
                </span>
              </div>
              <div class="total-price">
                <p>{{ item.p }} MMK</p>
              </div>
            </div>
          </div>
          <div class="final-price row">
            <div class="col-10 text-start"><p>Total</p></div>
            <div class="col-2">
              <p>{{ cartTotal }} MMK</p>
            </div>
          </div>
          <div class="text-end desktop-button-group p-3">
            <button class="btn shopnow-button">Buy Now</button>
          </div>
          <div
            class="cart-card p-3 mobile-card"
            v-for="item in myCart"
            :key="item.id"
          >
            <div class="flex-column justify-content-around align-items-center">
              <div class="d-flex">
                <div class="cart-img">
                  <img :src="item.img" alt="" />
                </div>
                <div class="content ps-5 text-start">
                  <div class="cart-descreption text-start mb-2">
                    <p>
                      {{ item.descreption }}
                    </p>
                  </div>
                  <div class="input-group cart-plus-minus mb-2">
                    <span class="input-group-prepend">
                      <button
                        type="button"
                        class="btn btn-outline-secondary btn-number"
                        disabled="disabled"
                        data-type="minus"
                        data-field="quant[1]"
                      >
                        <span class="material-symbols-outlined"> remove </span>
                      </button>
                    </span>
                    <input
                      type="text"
                      name="quant[1]"
                      class="form-control input-number text-center"
                      value="1"
                      min="1"
                      max="10"
                    />
                    <span class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-outline-secondary btn-number"
                        data-type="plus"
                        data-field="quant[1]"
                      >
                        <span class="material-symbols-outlined"> add </span>
                      </button>
                    </span>
                  </div>
                  <div class="total-price mb-2">
                    <p>{{ item.p }}</p>
                  </div>
                  <div class="cart-icon d-flex">
                    <span class="material-symbols-outlined pe-3">
                      favorite
                    </span>
                    <span class="material-symbols-outlined"> close </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="text-end mobile-button-group p-3">
            <button class="btn shopnow-button">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { mapGetters, mapMutations, useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const cartItems = computed(() => store.getters["cartItems"]);
    const cartTotal = computed(() => store.getters["cartTotal"]);

    const increaseQuantity = (itemId) => {
      store.dispatch("increaseQuantity", itemId);
    };

    const decreaseQuantity = (itemId) => {
      store.dispatch("decreaseQuantity", itemId);
    };

    console.log(cartItems);

    return { cartItems, cartTotal, increaseQuantity, decreaseQuantity };
  },
};
</script>

<style>
.mobile-card {
  display: none;
}

._cart {
  width: 100%;
  height: 100%;
  border: 1px solid #111;
}

.cart-card {
  border: 1px solid #111;
}

.cart-heading {
  width: 100%;
  border: 1px solid #111;
  padding: 15px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.cart-descreption {
  width: 200px;
}

.cart-descreption p {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.cart-plus-minus {
  width: 150px;
}

.btn-number {
  height: 40px;
}

.cart-img img {
  width: 120px;
}

.total-price p {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.cart-icon {
  cursor: pointer;
}

.desktop-button-group {
  border: 1px solid #111;
}

.mobile-button-group {
  border: 1px solid #111;
  display: none;
}

.final-price {
  border: 1px solid #111;
}

.final-price {
  padding: 20px;
  margin: 0px;
  border: 1px solid #111;
}

.col-2 {
  border-left: 1px solid #111;
}

@media (max-width: 500px) {
  .desktop-card {
    display: none;
  }

  .desktop-button-group {
    border: 1px solid #111;
    display: none;
  }

  .mobile-button-group {
    display: block;
  }

  .mobile-card {
    display: block;
  }
  .cart-plus-minus .form-control {
    height: 35px;
  }

  .btn-number {
    height: 35px;
  }
  .btn-number .material-symbols-outlined {
    font-size: 16px;
  }
}
</style>
