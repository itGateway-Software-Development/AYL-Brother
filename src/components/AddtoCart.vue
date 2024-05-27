<template>
  <div class="addtoCart">
    <div class="container content-wrapper">
      <div class="heading-cart">
        <div class="addtocart-heading align-item-center text-start">
          <h3 class="pt-8 ps-3">Shopping Bag</h3>
          <p class="ms-4">{{ cartItemCount }} items</p>
        </div>
      </div>

      <div class="d-flex cart-main">
        <div class="d-flex cart-item-list">
          <div class="cart-item mb-3" v-for="item in cartItems" :key="item.id">
            <div class="d-flex justify-content-between cart-content">
              <div class="left-item d-flex">
                <div class="product-img me-3 p-3">
                  <img :src="item.img" alt="Img" />
                </div>
                <div class="product-detail text-start mt-3">
                  <h5>Romantic Underwear</h5>
                  <p>Color:Light Gray, Blue</p>
                  <p>Size: M</p>
                  <p>
                    Price: <span class="points">{{ item.p }}</span> MMK
                  </p>
                  <div class="input-group cart-plus-minus">
                    <span class="input-group-prepend"
                      ><button
                        type="button"
                        class="btn btn-outline-secondary btn-number"
                        data-type="minus"
                        data-field="quant[1]"
                        @click="decreaseQuantity(item.id)"
                      >
                        <span class="material-symbols-outlined"> remove </span>
                      </button></span
                    ><input
                      type="text"
                      :value="item.quantity"
                      class="form-control input-number text-center"
                      min="1"
                      max="10"
                    /><span class="input-group-append"
                      ><button
                        type="button"
                        class="btn btn-outline-secondary btn-number"
                        data-type="plus"
                        data-field="quant[1]"
                        @click="increaseQuantity(item.id)"
                      >
                        <span class="material-symbols-outlined"> add </span>
                      </button></span
                    >
                  </div>
                </div>
              </div>
              <div class="right-icon d-flex align-items-end">
                <span
                  class="material-symbols-outlined p-2"
                  @click="removeItem(item.id)"
                >
                  delete
                </span>
                <span class="material-symbols-outlined p-2"> favorite </span>
              </div>
            </div>
          </div>
        </div>
        <div class="check-out">
          <div class="checkout-heading mt-3">
            <h3>Order Summary</h3>
          </div>
          <div class="total-price d-flex justify-content-between">
            <p>Sub-Total</p>
            <p>{{ cartTotal }} MMK</p>
          </div>

          <!-- <div class="promo-point mt-5">
            <div class="use-point mt-5 d-flex justify-content-between px-2">
              <input
                type="number"
                v-model.number="points"
                :max="availablePoints"
                placeholder="Enter discount points"
                class="point-input"
              />
              <button @click="applyDiscount" class="btn promo-btn">
                Apply Points
              </button>
            </div>
            <p class="m-3">
              You have <span class="points">{{ availablePoints }}</span> points
              left
            </p>
          </div> -->

          <div class="total-price d-flex justify-content-between">
            <p>Total(MMK)</p>
            <p>{{ cartTotal }} MMK</p>
          </div>

          <div class="delivery-note">
            <div class="info">
              <span class="material-symbols-outlined"> info </span>
              <p>
                Addational Derivery Charges may be added base on your location
              </p>
            </div>
          </div>
          <div class="checkout-button">
            <button class="btn checkout-btn">Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { computed, ref } from "vue";
import { mapGetters, mapMutations, useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const cartItems = computed(() => store.getters["cartItems"]);
    const cartTotal = computed(() => store.getters["cartTotal"]);
    const cartFinal = computed(() => store.getters["cartFinal"]);
    const deliveryPrice = computed(() => store.getters["deliveryPrice"]);
    const grandTotal = computed(() => store.getters["grandTotal"]);
    const cartItemCount = computed(() => {
      return store.getters.cartItemCount;
    });
    const points = ref(store.getters.discountPoints);
    const usePoints = ref(store.getters.usePoints);
    const availablePoints = computed(() => store.getters.totalAvailablePoints);

    const increaseQuantity = (itemId) => {
      store.dispatch("increaseQuantity", itemId);
    };

    const decreaseQuantity = (itemId) => {
      store.dispatch("decreaseQuantity", itemId);
    };

    const removeItem = (itemId) => {
      store.dispatch("removeItem", itemId);
    };

    const applyDiscount = () => {
      store.dispatch("applyDiscountPoints", points.value);
    };

    return {
      cartItems,
      cartTotal,
      cartFinal,
      points,
      deliveryPrice,
      grandTotal,
      increaseQuantity,
      decreaseQuantity,
      removeItem,
      applyDiscount,
      usePoints,
      availablePoints,
      cartItemCount,
    };
  },
};
</script>

<style>
.content-wrapper {
  padding: 0px 0px;
}

.addtoCart {
  background: #f2f2f2;
  width: 100%;
  height: 100%;
}

.heading-cart {
  padding: 50px 0 10px 0px;
}

.heading-cart h3 {
  font-family: "Kanit", sans-serif;
  font-weight: 600;
  font-style: normal;
}

.product-detail p {
  line-height: 35px;
}

.addtocart-heading {
  height: 130px;
  background-color: #ffffff;
  border-radius: 5px;
}

.cart-item {
  width: 950px;
  height: 210px;
  background-color: #ffffff;
  border-radius: 5px;
}

.cart-item-list {
  flex-direction: column;
}

.check-out {
  width: 400px;
  height: 280px;
  background-color: #ffffff;
  margin-left: 10px;
  border-radius: 5px;
}

.cart-plus-minus {
  width: 150px;
}

.product-img img {
  width: 120px;
}

.btn-number {
  height: 40px;
}

.right-icon {
  cursor: pointer;
}

.points {
  color: red;
  font-weight: 300;
}

.promo-btn {
  background: #111;
  color: #ffffff;
}

.point-input {
  width: 180px;
  border: 1px solid;
  border-radius: 5px;
}

.promo-point {
  border-top: 1px solid;
  border-bottom: 1px solid;
  margin: 0px 10px;
}

.checkout-btn {
  width: 300px;
  background: #111;
  color: #ffffff;
}

.total-price {
  padding: 10px 30px;
}

.promo-point {
  padding: 10px 10px;
}

.product-detail h5 {
  font-family: "Kanit", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.product-detail p {
  font-family: "Kanit", sans-serif;
  font-weight: 200;
  font-style: normal;
  padding: 0px 0px 4px 0px;
}

.checkout-btn:hover {
  background: #b7b7b7;
  color: #ffffff;
}

.delivery-note {
  width: 300px;
  background: #e1f4fe;
  color: #0d3a6f;
  min-height: 40px;
  margin: 10px auto;
  border-radius: 5px;
}

.info {
  display: flex;
  padding: 5px 5px;
  text-align: center;
  align-content: center;
  align-items: center;
}

.delivery-note p {
  padding: 0px 10px;
}

@media (max-width: 1200px) {
  .cart-item {
    width: 600px;
  }
}

@media (max-width: 800px) {
  .cart-item {
    width: 720px;
    height: 250px;
  }
  .check-out {
    width: 720px;
    height: 280px;
  }

  .check-out p {
    margin: 15px 30px;
  }
  .point-input {
    width: 50px;
    border: 1px solid;
    border-radius: 5px;
  }
  .promo-btn {
    font-size: 14px;
  }

  .total-price {
    margin: 10px auto;
    padding: 0px 30px;
  }

  .delivery {
    margin: 0px;
    padding: 0px 12px;
  }

  .total-price {
    margin: 0px;
    padding: 0px 12px;
  }
  .cart-content {
    flex-direction: column;
  }

  .cart-main {
    flex-direction: column;
    margin: 0px auto;
    align-items: center;
  }
  .right-icon {
    margin-left: 150px;
    margin-top: 10px;
  }

  .delivery-note {
    width: 640px;
  }

  .checkout-btn {
    width: 640px;
  }

  .info {
    padding: 10px 20px;
  }

  .info p {
    margin: 0px 30px;
  }
}

@media (max-width: 500px) {
  .cart-item {
    width: 400px;
    height: 250px;
  }

  .check-out {
    width: 400px;
    height: 320px;
    margin: 0px 0px 15px 0px;
  }

  .point-input {
    width: 200px;
    border: 1px solid;
    border-radius: 5px;
  }

  .delivery-note {
    width: 320px;
  }

  .checkout-btn {
    width: 320px;
  }

  .info p {
    margin: 0px;
  }

  .heading {
    padding: 10px 0px;
  }
}
</style>
