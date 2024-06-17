<template>
  <div class="checkout-now">
    <div class="container content-wrapper check-out">
      <router-link
        class="nav-link text-start mb-3 d-flex align-items-center"
        to="/cart"
        ><span class="material-symbols-outlined"> arrow_back </span>
        <p>Return to Cart</p>
      </router-link>
      <div class="row check-main">
        <div class="summary-list">
          <div
            class="summary d-flex justify-content-between align-items center"
          >
            <h5>Order Summary</h5>
            <h5>{{ grandTotal }} MMK</h5>
          </div>
        </div>
        <div class="col-8 col-sm-12 col-md-8 check-1-custom">
          <form @submit="order">
            <div class="info-form text-start">
              <div
                class="head d-flex justify-content-between align-items-center"
              >
                <h3>Contact</h3>
                <router-link to="/login" class="nav-link" v-if="!user"
                  >Login</router-link
                >
              </div>

              <div class="input-form mt-5">
                <div class="d-flex flex-wrap justify-content-between">
                  <div class="field">
                    <h4>Name</h4>
                    <v-text-field
                      required
                      :rules="[rules.required]"
                      clearable
                      v-model="name"
                      label="Enter your Name"
                      variant="outlined"
                    ></v-text-field>
                  </div>
                  <div class="field">
                    <h4>Phone Number</h4>
                    <v-text-field
                      required
                      :rules="[rules.required]"
                      clearable
                      type="number"
                      v-model="phoneNumber"
                      label="Enter your phone number"
                      variant="outlined"
                    ></v-text-field>
                  </div>
                </div>
                <div class="address-field">
                  <h4>Address</h4>
                  <v-text-field
                    required
                    :rules="[rules.required]"
                    clearable
                    v-model="address"
                    label="Enter your full address"
                    variant="outlined"
                  ></v-text-field>
                </div>
              </div>
              <!-- <div class="input-form mt-5" v-if="user">
              <div class="d-flex flex-wrap justify-content-between">
                <div class="field">
                  <h4>Name</h4>

                  <v-text-field
                    :rules="[rules.required]"
                    clearable
                    label="Enter your Name"
                    v-model="name"
                    variant="outlined"
                  ></v-text-field>
                </div>
                <div class="field">
                  <h4>Phone Number</h4>
                  <v-text-field
                    :rules="[rules.required]"
                    clearable
                    type="number"
                    label="Enter your phone number"
                    v-model="phoneNumber"
                    variant="outlined"
                  ></v-text-field>
                </div>
              </div>
              <div class="address-field">
                <h4>Address</h4>
                <v-text-field
                  :rules="[rules.required]"
                  clearable
                  v-model="address"
                  label="Enter your full address"
                  variant="outlined"
                ></v-text-field>
              </div>
            </div> -->

              <hr />
              <div class="form-contact text-start mt-5">
                <div class="form-location text-start">
                  <h3>Delivery</h3>

                  <div class="selcect-form">
                    <div
                      class="location d-flex flex-wrap justify-content-between align-items-center"
                    >
                      <div
                        class="d-flex justify-content-between align-items-center mb-5"
                      >
                        <div class="field">
                          <h4>Select Regions</h4>
                          <select
                            required
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
                      </div>
                      <div
                        class="d-flex justify-content-between align-items-center mb-5"
                      >
                        <div class="field">
                          <h4>Select City</h4>
                          <select
                            required
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
                      </div>
                    </div>
                  </div>
                </div>
                <hr />

                <div class="discount-point">
                  <div
                    class="d-flex flex-wrap justify-content-between align-items-center"
                  >
                    <div class="discount">
                      <h4>Points</h4>
                      <v-text-field
                        clearable
                        type="number"
                        v-model.number="enterPoints"
                        :max="availablePoints"
                        label="Enter Discount Point"
                        variant="outlined"
                        @click:clear="onClear()"
                      ></v-text-field>
                    </div>
                    <div class="button-group">
                      <div class="promo-btn btn" @click="applyDiscount()">
                        Apply Discount
                      </div>
                    </div>
                  </div>
                  <h5>
                    You have
                    <span class="points">{{
                      availablePoints - discountPrice
                    }}</span>
                    points lefts
                  </h5>
                </div>

                <div class="button-group mt-5">
                  <button class="btn order-btn">Order Now</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="col-4 col-sm-12 col-md-4 check-2-custom">
          <div class="mt-3 price-list">
            <div class="d-flex justify-content-between mb-3">
              <h5>Sub-Total:</h5>
              <h5>{{ total }} MMK</h5>
            </div>
            <div class="d-flex justify-content-between mb-3">
              <h5>Delivery Charges:</h5>
              <h5>{{ deliveryPrice }} MMK</h5>
            </div>
            <!-- <div class="d-flex justify-content-between mb-3">
                <h5>Use Point:</h5>
                <h5>{{ pointsUse }} points</h5>
              </div> -->
            <div class="d-flex justify-content-between mb-3">
              <h5>Discount:</h5>
              <h5>- {{ discountPrice }} MMK</h5>
            </div>
            <div class="d-flex justify-content-between mb-3">
              <h5>Total:</h5>
              <h5>{{ grandTotal }} MMK</h5>
            </div>
          </div>
          <div class="mini-product">
            <div
              class="product-list d-flex flex-column"
              v-for="item in cartItems"
              :key="item.id"
            >
              <div
                class="product-detail d-flex align-items-center justify-content-between"
              >
                <div class="detail-img">
                  <img :src="item.img" alt="" />
                </div>
                <div class="detail-content d-flex flex-column text-start">
                  <p>Product Code: {{ item.code }}</p>
                  <p>Color: {{ item.color }}</p>
                  <p>Size: {{ item.size }}</p>
                  <p>Quantity: {{ item.quantity }}</p>
                  <p>Price: {{ item.price }} MMK</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <!-- <div class="button-group mt-5">
          <button class="btn order-btn-2" @click="order()">Order Now</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/service/api";
import axios from "axios";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const selectedLocation = ref();
    const selectedSubLocation = ref();
  
    const rules = {
      required: (value) => !!value || "Field is required",
    };

    const city = ref(null);
    const township = ref(null);

    const cartItems = computed(() => store.getters["cartItems"]);
    const total = computed(() => store.getters["totalPrice"]);
    const grandTotal = computed(() => store.getters["grandTotal"]);
    const discountPrice = computed(() => store.getters["discountPrice"]);
    const pointsUse = computed(() => store.getters["discountPoints"]);

    const locations = computed(() => store.getters.locations);
    const subLocations = computed(() => store.getters.getSubLocations);

    const onLocationChange = () => {
      store.dispatch("chooseLocation", selectedLocation.value);
      store.dispatch("calculateDeliveryPrice");
      city.value = selectedLocation.value.location;
    };

    const onSubLocationChange = () => {
      store.dispatch("chooseSubLocation", selectedSubLocation.value);
      store.dispatch("calculateDeliveryPrice");
      township.value = selectedSubLocation.value;
    };

    const user = JSON.parse(localStorage.getItem("user"));
    const points = ref(store.getters.discountPoints);
    const name = ref(user ? user.name : '');
    const address = ref(user ? user.address : '');
    const phoneNumber = ref("");


    const deliveryPrice = computed(() => store.getters.deliveryPrice);

    const enterPoints = ref();

    const availablePoints = computed(() => store.getters.totalAvailablePoints);
    const applyDiscount = () => {
      store.dispatch("applyDiscountPoints", enterPoints.value);
    };
    const onClear = () => {
      store.dispatch("returnPoint", points.value);
    };

    let order = async (e) => {
      e.preventDefault();
      const orderForm = ref({
        userName: name.value,
        phone: phoneNumber.value,
        address: address.value,
        products: cartItems.value,
        city: city.value,
        town: township.value,
        deliverPrice: deliveryPrice.value,
        pointsUse: discountPrice.value ? discountPrice.value : 0,
        totalAvailablePoints: availablePoints.value,
        price_total: total.value,
      });
      let orderDataFrom = new FormData();
      orderDataFrom.append("user_id", user ? user.id : null);
      orderDataFrom.append("name", orderForm.value.userName);
      orderDataFrom.append("phone", orderForm.value.phone);
      orderDataFrom.append("address", orderForm.value.address);
      orderDataFrom.append("products", JSON.stringify(orderForm.value.products));
      orderDataFrom.append("city", orderForm.value.city);
      orderDataFrom.append("town", orderForm.value.town);
      orderDataFrom.append("deliveryPrice", orderForm.value.deliverPrice);
      orderDataFrom.append("pointsUse", orderForm.value.pointsUse);
      orderDataFrom.append("totalPoint", orderForm.value.totalAvailablePoints);
      orderDataFrom.append("subTotal", orderForm.value.price_total);

      let response = await axios.post(api.order, orderDataFrom);

      console.log(response);
    };

    return {
      locations,
      subLocations,
      selectedLocation,
      selectedSubLocation,
      onSubLocationChange,
      onLocationChange,
      user,
      cartItems,
      name,
      phoneNumber,
      address,
      order,
      total,
      deliveryPrice,
      grandTotal,
      discountPrice,
      availablePoints,
      applyDiscount,
      pointsUse,
      onClear,
      enterPoints,
      points,
      rules,
    };
  },
};
</script>

<style>
.summary-list {
  display: none;
}

.checkout-now {
  width: 100%;
  height: 100%;
  background: #f2f2f2;
}

.check-out {
  padding-top: 150px;
  padding-bottom: 100px;
  background: #f2f2f2;
}

.form-select {
  width: 380px;
}

.info-form {
  background: #ffff;
  width: 100%;
  height: max-content;
  padding: 20px 30px;
}

.mini-product {
  width: 100%;
  height: max-content;
  background: #f2f2f2;

  position: relative;
}

.product-list {
  background-color: #fff;
  padding: 20px;
}

.field {
  width: 380px;
}

.address-field {
  width: 100%;
}

.head .nav-link {
  text-decoration: underline;
}

.discount {
  width: 500px;
}

.promo-btn {
  width: 200px;
  height: 50px;
  background: #111;
  color: #ffff;
  text-align: center;
  align-content: center;
  margin-top: 20px;
  font-family: "Kanit", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.detail-img img {
  width: 80px;
}

.order-btn,
.order-btn-2 {
  width: 800px;
  background: #111;
  color: #fff;
  height: 60px;
  font-size: 28px;
  align-content: center;
  text-align: center;
  font-family: "Kanit", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.order-btn-2 {
  display: none;
}

.promo-btn:hover {
  background: red;
  color: #fff;
}

.detail-content {
  width: 200px;
}

.order-btn:hover {
  background: red;
  color: #fff;
}

.order-btn-2:hover {
  background: red;
  color: #fff;
}

.price-list {
  width: 100%;
  padding: 10px 20px;

  margin-top: 100px;
}

.points {
  color: red;
}

@media (max-width: 1200px) {
  .order-btn {
    width: 650px;
  }

  .discount {
    width: 450px;
  }

  .field {
    width: 320px;
  }

  .form-select {
    width: 320px;
  }
}
@media (max-width: 1024px) {
  .order-btn {
    width: 550px;
  }
  .discount {
    width: 320px;
  }
}

@media (max-width: 800px) {
  .check-main {
    display: flex !important;
    flex-direction: column !important;
  }
  .summary-list {
    display: block;
    margin: 20px 0px;
    background: #fff;
    width: 100%;
    height: 50px;
    align-content: center;
    align-items: center;
  }
  .check-1-custom {
    width: 100%;
  }

  .check-2-custom {
    width: 100%;
    margin-top: 20px;
  }
  .discount {
    width: 380px;
  }
  .order-btn {
    display: none;
  }
  .order-btn-2 {
    display: block;
    width: 630px;
  }
  .check-out {
    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 100px;
  }
}

@media (max-width: 500px) {
  .order-btn-2 {
    width: 380px;
    font-size: 24px;
  }
  .discount {
    width: 240px;
  }
  .promo-btn {
    width: 150px;
  }
}

@media (max-width: 390px) {
  .order-btn-2 {
    width: 36ေ0px;
  }
  .promo-btn {
    margin-top: -10px;
    margin-bottom: 20px;
  }
  .discount {
    width: 300px;
  }
}
</style>
