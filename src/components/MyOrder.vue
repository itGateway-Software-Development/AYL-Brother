<template>
  <div class="myorder">
    <h5 class="text-center">Order History</h5>
    <v-table>
      <thead>
        <tr>
          <th class="text-center">Date</th>
          <th class="text-center">Order No</th>
          <th class="text-center">Customer Name</th>
          <th class="text-center">Payment Image</th>
          <th class="text-center">Status</th>
          <th class="text-center">Detail</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orderHistroy" :key="order.id">
          <td>{{ order.date }}</td>
          <td>{{ order.order_no }}</td>
          <td>{{ order.customer }}</td>
          <td v-if="order.img"><img :src="order.img" alt="" /></td>
          <td v-else><span class="no_image">No Image Avaliable</span></td>
          <td class="status">
            <span :class="getStatus(order.order_status)">{{
              order.order_status
            }}</span>
          </td>
          <td>
            <div class="text-center mt-1">
              <button @click="showDialog(order.order_no)">
                <span class="material-symbols-outlined"> info </span>
              </button>

              <v-dialog v-model="dialog" width="800px">
                <v-card max-width="auto">
                  <div class="modal-content">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <h5>Order History</h5>

                      <v-btn class="ms-auto" @click="dialog = false">
                        <span class="material-symbols-outlined">
                          close
                        </span></v-btn
                      >
                    </div>
                    <div class="top-content">
                      <p>Date: {{ orderDetail.date }}</p>
                      <p>Order No: {{ orderDetail.order_no }}</p>
                      <!-- <p>Customer: {{ order.customer }}</p>
                      <p>Phone: {{ order.phone }}</p>
                      <p>Address: {{ order.delivery_address }}</p>
                      <p>
                        Delivery Address:{{ order.delivery_address }},
                        {{ order.delivery_town }}, {{ order.delivery_city }}
                      </p> -->
                    </div>
                    <div class="list">
                      <v-table>
                        <thead>
                          <tr>
                            <th class="text-start">Product Code</th>
                            <th class="text-start">Size</th>
                            <th class="text-start">Color</th>
                            <th class="text-start">Qty</th>
                            <th class="text-start">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="item in orderDetail.order_items"
                            :key="item.id"
                          >
                            <td>{{ item.code }}</td>
                            <td>{{ item.size }}</td>
                            <td>{{ item.color }}</td>
                            <td>{{ item.quantity }}</td>
                            <td>{{ item.price }}</td>
                          </tr>
                        </tbody>
                      </v-table>
                    </div>
                    <div class="price-detail">
                      <div
                        class="d-flex justify-content-between align-items center"
                      >
                        <p>Sub Total:</p>
                        <p>{{ orderDetail.sub_total }} MMK</p>
                      </div>
                      <div
                        class="d-flex justify-content-between align-items center"
                      >
                        <p>Delivery Charges:</p>
                        <p>{{ orderDetail.delivery_charges }} MMK</p>
                      </div>
                      <div
                        class="d-flex justify-content-between align-items center"
                      >
                        <p>Point Discount:</p>
                        <p>{{ orderDetail.used_point }} MMK</p>
                      </div>
                      <div
                        class="d-flex justify-content-between align-items center"
                      >
                        <p>Grand Total:</p>
                        <p>{{ orderDetail.grand_total }} MMK</p>
                      </div>
                    </div>
                    <div class="justify-content-center detail-img">
                      <img :src="orderDetail.img" alt="" />
                    </div>
                  </div>
                </v-card>
              </v-dialog>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const orderHistroy = ref([]);
    const store = useStore();
    const dialog = ref(false);
    const orderDetail = ref();

    const showDialog = (id) => {
      dialog.value = true;
      orderDetail.value = orderHistroy.value.find((item) => {
        return item.order_no == id;
      });
    };

    // const formatDate = (dateString) => {
    //   const date = new Date(dateString);
    //   const day = date.getDate();
    //   const month = date.getMonth() + 1; // Months are zero-based
    //   const year = date.getFullYear();
    //   return `${day}-${month}-${year}`;
    // };

    const getStatus = (status) => {
      return {
        pending: status === "pending",
        done: status === "done",
      };
    };

    onMounted(() => {
      orderHistroy.value = JSON.parse(localStorage.getItem("orderHistroy"));
    });

    return {
      orderHistroy,
      getStatus,
      dialog,
      showDialog,
      orderDetail,
    };
  },
};
</script>

<style>
.myorder th {
  text-transform: uppercase;
}

.myorder h5 {
  text-decoration: underline;
}

.no_image {
  color: red;
}

.status span {
  padding: 5px 10px;
  text-transform: capitalize;
  border-radius: 50px;
  text-align: center;
  align-items: center;
}

.pending {
  background: rgb(255, 171, 0);
}

.done {
  background: lightgreen;
  color: #ffffff;
}

.modal-content {
  padding: 20px;
}

.top-content p {
  margin: 15px 0px;
}

.list th {
  background: red;
  color: #ffffff;
}

.price-detail {
  width: 300px;
  margin-top: 20px;
  align-self: flex-end;
  margin-right: 20px;
}

.price-detail p {
  margin: 5px 0px;
}

td img {
  width: 150px;
}

.detail-img img {
  max-width: 300px;
}

.detail-img {
  margin: 20px auto;
}
</style>
