<template>
  <div v-if="isLoading">
    <Loading />
  </div>
  <div class="checkout-now">
    <div class="content-wrapper check-out">
      <router-link
        class="nav-link text-start mb-3 d-flex align-items-center heading-link"
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
          <form @submit="order" class="card">
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

                <div class="discount-point" v-if="user">
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
                        :min="1"
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

                <div class="choice-payment mt-5">
                  <div class="cash-delivery">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value="cash"
                        v-model="cod"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Cash on delivery
                      </label>
                    </div>
                  </div>
                  <div class="pay-up mt-3 mb-5">
                    <div class="online-pay">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          value="kpay"
                          v-model="cod"
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          K-pay
                        </label>
                      </div>
                    </div>
                    <div class="online-pay-form" v-if="cod == 'kpay'">
                      <div class="qr-heading mt-3">
                        <h4>Scan the QR and Pay Now</h4>
                      </div>
                      <div class="d-flex kpay-online">
                        <div class="qr-image me-3">
                          <v-img
                            width="300"
                            height="300"
                            lazy-src="https://picsum.photos/id/11/100/60"
                            :src="qrImage"
                            cover
                          >
                            <template v-slot:placeholder>
                              <div
                                class="d-flex align-center justify-center fill-height"
                              >
                                <v-progress-circular
                                  color="grey-lighten-4"
                                  indeterminate
                                ></v-progress-circular>
                              </div>
                            </template>
                          </v-img>
                        </div>
                        <div class="upload-image mt-3">
                          <v-file-input
                            accept="image/*"
                            label="File input"
                          ></v-file-input>
                          <p>Upload your transition screenshoot</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div clas="button-group mt-5">
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
          <div class="mini-product card">
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
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import Swal from "sweetalert2";
import axios from "axios";
import api from "@/service/api";
import router from "@/router";
import Loading from "@/components/Loading.vue";

export default {
  components: { Loading },
  setup() {
    const store = useStore();
    const route = useRoute();
    const selectedLocation = ref();
    const selectedSubLocation = ref();
    const name = ref("");
    const id = ref();
    const phoneNumber = ref("");
    const address = ref("");
    const rules = {
      required: (value) => !!value || "Field is required",
    };
    const cod = ref("cash");

    const isLoading = ref(false);

    const userLogin = ref("");

    const city = ref(null);
    const township = ref(null);

    const qrImage = ref(require("@/assets/sample.jpg"));

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

    const points = ref(store.getters.discountPoints);
    const user = ref();
    const LoginUser = ref(user.value);

    if (LoginUser.value) {
      userLogin.value = JSON.parse(localStorage.getItem("isLogin"));
      id.value = user.value.id;
      name.value = user.value.name;
    } else {
      userLogin.value = false;
    }

    const deliveryPrice = computed(() => store.getters.deliveryPrice);

    const enterPoints = ref();

    const minValue = () => {
      if (enterPoints.value < 1) {
        enterPoints.value = 0;
      }
    };

    const availablePoints = ref();

    const applyDiscount = () => {
      minValue();
      store.dispatch("applyDiscountPoints", enterPoints.value);
    };
    const onClear = () => {
      store.dispatch("returnPoint", points.value);
    };

    const availablePoint = ref();

    // const availablePoint = computed(() => store.getters.totalAvailablePoints);

    let order = async (e) => {
      e.preventDefault();
      const orderForm = ref({
        id: id.value,
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
        grand_total: grandTotal.value,
      });
      let orderDataFrom = new FormData();
      orderDataFrom.append("id", orderForm.value.id);
      orderDataFrom.append("name", orderForm.value.userName);
      orderDataFrom.append("phone", orderForm.value.phone);
      orderDataFrom.append("address", orderForm.value.address);
      orderDataFrom.append(
        "products",
        JSON.stringify(orderForm.value.products)
      );
      orderDataFrom.append("city", orderForm.value.city);
      orderDataFrom.append("town", orderForm.value.town);
      orderDataFrom.append("deliveryPrice", orderForm.value.deliverPrice);
      orderDataFrom.append("pointsUse", orderForm.value.pointsUse);
      orderDataFrom.append("totalPoint", orderForm.value.totalAvailablePoints);
      orderDataFrom.append("totalPrice", orderForm.value.price_total);
      orderDataFrom.append("garndtotal", orderForm.value.grand_total);

      console.log(orderForm.value);
      isLoading.value = true;

      let response = await axios.post(api.order, orderDataFrom);
      console.log(response.data);

      if (response.status == 200) {
        store.dispatch("usePoints", pointsUse.value);
        store.dispatch("clearCart");
        store.dispatch("clearDiscount");
        isLoading.value = false;
        Swal.fire({
          title: "Order Done",
          icon: "success",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/product");
          }
        });
      }
    };
    onMounted(() => {
      const users = JSON.parse(localStorage.getItem("user"));
      user.value = users;
      availablePoint.value = JSON.parse(
        localStorage.getItem("totalAvailablePoints")
      );
      store.dispatch("savePoints", availablePoint.value);
      availablePoints.value = availablePoint.value;
      window.scroll(0, 0);
    });

    watch(availablePoint.value, () => {
      availablePoints.value = availablePoint.value;
    });

    watch(route, () => {
      availablePoints.value = availablePoint.value;
    });

    watch(user, () => {
      if (user.value) {
        id.value = user.value.id;
        name.value = user.value.name;
        phoneNumber.value = user.value.phone;
        address.value = user.value.address;
      } else if (!user.value) {
        id.value = "";
        name.value = "";
        phoneNumber.value = "";
        address.value = "";
      }
    });

    return {
      isLoading,
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
      userLogin,
      cod,
      qrImage,
    };
  },
};
</script>

<style scoped>
.summary-list {
  display: none;
}

.heading-link {
  color: var(--font-color);
}

.checkout-now {
  width: 100%;
  height: 100%;
  background: var(--secondary-background);
}

.check-out {
  padding-top: 150px;
  padding-bottom: 100px;
  background: var(--secondary-background);
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
  color: var(--font-color);
  margin-top: 100px;
}

.points {
  color: red;
}

.online-pay-form {
  padding: 20px 20px;
  border-left: 1px solid #111;
  border-right: 1px solid #111;
  border-bottom: 1px solid #111;
  border-top: 1px solid #1773b0;
  border-radius: 10px;
  background-color: rgba(240, 247, 255, 1);
  width: 800px;
}

.cash-delivery,
.online-pay {
  width: 800px;
  height: 90px;
  border: 2px solid #1773b0;
  background-color: rgba(240, 247, 255, 1);
  border-radius: 10px;
  padding: 10px 20px;
  align-content: center;
}

.upload-image {
  width: 400px;
}

.upload-image p {
  margin-left: 10px;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.qr-heading {
  font-family: "Kanit", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.form-check-input:checked {
  background-color: #1773b0;
  border-color: #8cd3ff;
}

.form-check-label {
  font-family: "Kanit", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 22px;
}

@media (max-width: 1390px) {
  .cash-delivery,
  .online-pay {
    width: 650px;
  }
  .order-btn,
  .order-btn-2 {
    width: 650px;
  }
  .online-pay-form {
    width: 650px;
  }
}

@media (max-width: 1280px) {
  .order-btn {
    width: 650px;
  }

  .cash-delivery,
  .online-pay {
    width: 650px;
  }

  .discount {
    width: 450px;
  }

  .field {
    width: 320px;
  }

  .online-pay-form {
    width: 650px;
  }

  .form-select {
    width: 320px;
  }
}

@media (max-width: 1190px) {
  .cash-delivery,
  .online-pay {
    width: 550px;
  }
  .order-btn,
  .order-btn-2 {
    width: 550px;
  }

  .online-pay-form {
    width: 550px;
  }

  .detail-img {
    margin: 20px;
  }

  .content-wrapper {
    padding: 150px 3%;
  }
}
@media (max-width: 1024px) {
  .order-btn {
    width: 550px;
  }
  .discount {
    width: 320px;
  }

  .cash-delivery,
  .online-pay {
    width: 550px;
  }
  .online-pay-form {
    width: 550px;
  }
}

@media (max-width: 860px) {
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
    width: 650px;
  }
  .cash-delivery,
  .online-pay {
    width: 650px;
  }
  .online-pay-form {
    width: 650px;
  }
  /* .order-btn-2 {
    display: block;
    width: 630px;
  } */
  .check-out {
    margin-top: 20px;
    padding-top: 50px;
    padding-bottom: 100px;
  }
}

@media (max-width: 600px) {
  .order-btn-2 {
    width: 380px;
    font-size: 24px;
  }
  .order-btn {
    width: 320px;
  }
  .cash-delivery,
  .online-pay {
    width: 320px;
  }
  .online-pay-form {
    width: 320px;
  }
  .discount {
    width: 240px;
  }
  .promo-btn {
    width: 150px;
  }

  .kpay-online {
    flex-direction: column;
  }

  .upload-image {
    width: 250px;
  }
  .info-form {
    padding: 20px 15px;
  }
}

@media (max-width: 390px) {
  .order-btn-2 {
    width: 360px;
  }
  .promo-btn {
    margin-top: -10px;
    margin-bottom: 20px;
  }
  .discount {
    width: 300px;
  }
  .order-btn {
    width: 320px;
  }
  .cash-delivery,
  .online-pay {
    width: 320px;
  }
  .online-pay-form {
    width: 320px;
  }
}
</style>
