<template>
  <div class="addtoCart">
    <div class="add-to-cart content-wrapper">
      <div class="add-back">
        <div class="heading-cart">
          <router-link
            class="nav-link text-start mb-3 d-flex align-items-center heading-link"
            to="/product"
            ><span class="material-symbols-outlined"> arrow_back </span>
            <p>Continue Shopping</p>
          </router-link>
          <div class="addtocart-heading align-item-center text-start">
            <h3 class="pt-8 ps-3">Shopping Bag</h3>
            <p class="ms-4" v-if="cartItemCount <= 1">
              {{ cartItemCount }} item
            </p>
            <p class="ms-4" v-if="cartItemCount > 1">
              {{ cartItemCount }} items
            </p>
          </div>
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
                  <p>Product Code: {{ item.code }}</p>
                  <p>Color: {{ item.color }}</p>
                  <p>Size: {{ item.size }}</p>
                  <p>
                    Price: <span class="points">{{ item.price }}</span> MMK
                  </p>
                  <div class="input-group cart-plus-minus">
                    <span class="input-group-prepend"
                      ><button
                        type="button"
                        class="btn btn-outline-secondary btn-number"
                        data-type="minus"
                        data-field="quant[1]"
                        @click="decreaseQuantity(item)"
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
                        @click="increaseQuantity(item)"
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
                  @click="removeFromCart(item)"
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
            <p class="text-start sub-product">Sub-total:</p>
            <p>{{ total }} MMK</p>
          </div>
          <!-- <div class="total-price d-flex justify-content-between">
            <p class="text-start sub-product">Promo Point:</p>
            <p>0 point</p>
          </div> -->

          <!-- <div class="promo-point mt-3" v-if="user">
            <div
              class="use-point mt-5 d-flex justify-content-between px-2 align-items-middle"
            >
              <input
                type="number"
                v-model.number="points"
                :max="availablePoints"
                placeholder="Enter discount points"
                class="point-input"
              />
              <v-text-field
                class="mx-auto"
                max-width="100"
                type="number"
                label="Enter discount points"
                v-model.number="points"
                :max="availablePoints"
                variant="outlined"
              ></v-text-field>

              <div class="ps-5">
                <button @click="applyDiscount" class="btn promo-btn">
                  Apply Points
                </button>
              </div>
            </div>
            <p class="m-3">
              You have <span class="points">{{ availablePoints }}</span> points
              left
            </p>
          </div> -->

          <!-- <div class="location" v-if="cartItems.length > 0">
            <div class="d-flex justify-content-between align-items-center mb-5">
              <label for="location">Select Location:</label>
              <select
                class="form-select"
                aria-label="Default select example"
                id="location"
                v-model="selectedLocation"
                @change="onLocationChange"
              >
                <option
                  v-for="location in locations"
                  :key="location.id"
                  :value="location"
                >
                  {{ location.location }}
                </option>
              </select>
            </div>
            <hr />
            <div
              class="d-flex justify-content-between align-items-center mt-3 mb-5"
            >
              <label v-if="subLocations.length > 0" for="subLocation"
                >Select Sub-Location:</label
              >
              <select
                class="form-select"
                aria-label="Default select example"
                v-if="subLocations.length > 0"
                id="subLocation"
                v-model="selectedSubLocation"
                @change="onSubLocationChange"
              >
                <option
                  v-for="subLocation in subLocations"
                  :key="subLocation.id"
                  :value="subLocation.township"
                >
                  {{ subLocation.township }}
                </option>
              </select>
            </div>
          </div> -->

          <!-- <div class="total-price d-flex justify-content-between">
            <p>Delivery Charges(MMK)</p>
            <p>{{ deliveryPrice }} MMK</p>
          </div> -->
          <!-- <div class="total-price d-flex justify-content-between">
            <p>Total(MMK)</p>
            <p>{{ grandTotal }} MMK</p>
          </div> -->

          <div class="delivery-note" v-if="!user">
            <div class="info">
              <span class="material-symbols-outlined"> info </span>
              <p>
                Your are not Sigin. If you login you can use dicount point and
                you can earn point back
              </p>
            </div>
          </div>
          <div class="checkout-button mt-3" v-if="cartItems.length > 0">
            <button class="btn checkout-btn" @click="checkOut()">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { computed, onMounted, ref, watch } from "vue";
import { mapGetters, mapMutations, useStore } from "vuex";
import router from "@/router";
export default {
  setup() {
    const store = useStore();
    const selectedLocation = ref(null);
    const selectedSubLocation = ref(null);
    const Swal = require("sweetalert2");

    const locations = computed(() => store.getters.locations);
    const subLocations = computed(() => store.getters.getSubLocations);

    const onLocationChange = () => {
      store.dispatch("chooseLocation", selectedLocation.value);
      store.dispatch("calculateDeliveryPrice");
    };

    const onSubLocationChange = () => {
      store.dispatch("chooseSubLocation", selectedSubLocation.value);
      store.dispatch("calculateDeliveryPrice");
    };

    const deliveryPrice = computed(() => store.getters.deliveryPrice);

    const cartItems = computed(() => store.getters["cartItems"]);
    const cartItemCount = computed(() => store.getters["cartItemCount"]);
    const total = computed(() => store.getters["totalPrice"]);
    const grandTotal = computed(() => store.getters["grandTotal"]);
    const increaseQuantity = (item) => {
      store.dispatch("increaseQuantity", { id: item.id, size: item.size });
    };
    const decreaseQuantity = (item) => {
      store.dispatch("decreaseQuantity", { id: item.id, size: item.size });
    };
    const removeFromCart = (item) => {
      store.dispatch("removeFromCart", {
        id: item.id,
        size: item.size,
        code: item.code,
      });
    };
    const points = ref(store.getters.discountPoints);
    const availablePoints = computed(() => store.getters.totalAvailablePoints);
    const applyDiscount = () => {
      store.dispatch("applyDiscountPoints", points.value);
    };
    const checkOut = () => {
      if (!user) {
        Swal.fire({
          title: "Warning",
          text: "Do you want to sigin to get point or Do you want to continue without sigin",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sigin",
          cancelButtonText: "Continue",
          reverseButtons: true,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "You will be redirect to Login page",
              icon: "success",
              confirmButtonText: "Ok",
            }).then((result) => {
              if (result.isConfirmed) {
                router.push("/login");
              }
            });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            router.push("/cart/checkout");
          }
        });
      } else {
        router.push("/cart/checkout");
      }
    };

    const user = localStorage.getItem("user");

    onMounted(() => {
      window.scroll(0, 0);
    });

    return {
      cartItems,
      total,
      increaseQuantity,
      decreaseQuantity,
      cartItemCount,
      removeFromCart,
      selectedLocation,
      selectedSubLocation,
      locations,
      subLocations,
      onLocationChange,
      onSubLocationChange,
      deliveryPrice,
      grandTotal,
      checkOut,
      availablePoints,
      applyDiscount,
      points,
      user,
    };
  },
};
</script>

<style scoped>
.content-wrapper {
  padding: 0px 8%;
}
.addtoCart {
  background: var(--secondary-background);
  width: 100%;
  height: 100%;
}
.container {
  max-width: 1400px;
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
  width: 1050px;
  height: max-content;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 15px 0px;
}
.cart-item-list {
  flex-direction: column;
}
.check-out {
  width: 400px;
  height: max-content;
  background-color: #ffffff;
  padding: 20px 10px;
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
  margin: 0px auto;
}
.total-price {
  padding: 10px 30px;
  border-bottom: 1px solid;
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
.sub-product {
  line-height: 30px;
}

@media (max-width: 1400px) {
  .content-wrapper {
    padding: 0px 3%;
  }
}

@media (max-width: 1280px) {
  .cart-item {
    width: 800px;
  }
  .content-wrapper {
    padding: 0px 4%;
  }
}
@media (max-width: 1024px) {
  .cart-item {
    width: 600px;
  }
}

@media (max-width: 860px) {
  .content-wrapper {
    padding: 0px 5%;
  }
  .cart-item {
    width: 720px;
    height: auto;
  }
  .check-out {
    width: 720px;
    height: max-content;
    padding: 20px 0px;
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
@media (max-width: 600px) {
  .cart-item {
    width: auto;
    padding: 20px;
  }
  .check-out {
    width: auto;
    height: 320px;
    margin: 0px 0px 15px 0px;
    padding: 20px;
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

  .content-wrapper {
    padding: 0px;
  }
}
</style>
