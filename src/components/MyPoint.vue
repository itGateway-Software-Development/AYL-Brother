<template>
  <div class="point-history">
    <h5 class="mb-5 text-center">
      You have <span class="color-text">{{ availablePoint }}</span> points
      remain
    </h5>

    <h6 class="mt-5 text-start usage">Point Usage List</h6>
    <v-table>
      <thead>
        <tr>
          <th class="text-center">Date</th>
          <th class="text-center">Description</th>
          <th class="text-center">Status</th>
          <th class="text-center">Point</th>
          <th class="text-center">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in pointHistory" :key="item.id">
          <td>{{ formatDate(item.created_at) }}</td>
          <td>{{ item.reason }}</td>
          <td class="in-out">
            <span id="type" :class="getClass(item.type)">{{ item.type }}</span>
          </td>
          <td>
            <span :class="getSignClass(item.type)" class="me-3">{{
              getSign(item.type)
            }}</span
            >{{ item.points }}
          </td>
          <td>{{ item.total }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    let pointHistory = ref([]);
    let availablePoint = ref();
    const store = useStore();

    const getClass = (type) => {
      return {
        out: type === "out",
        in: type === "in",
      };
    };

    const getSign = (type) => {
      return type === "in" ? "+" : "-";
    };

    const getSignClass = (type) => {
      return {
        "sign-blue": type === "in",
        "sign-red": type === "out",
      };
    };

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1; // Months are zero-based
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    };

    watch(pointHistory.value, () => {
      pointHistory.value = JSON.parse(localStorage.getItem("pointHistory"));
    });

    onMounted(() => {
      pointHistory.value = JSON.parse(localStorage.getItem("pointHistory"));
      availablePoint.value = JSON.parse(
        localStorage.getItem("totalAvailablePoints")
      );
      store.dispatch("savePoints", availablePoint.value);
    });

    return {
      pointHistory,
      getClass,
      getSign,
      getSignClass,
      formatDate,
      availablePoint,
    };
  },
};
</script>

<style>
.point-history th {
  text-transform: uppercase;
}

.in-out span {
  padding: 5px 10px;
  border-radius: 50px;
  text-transform: uppercase;
}

.out {
  background-color: red;
  color: #ffffff;
}

.in {
  background-color: #696cff;
  color: #ffffff;
}

.sign-blue {
  color: rgb(3, 195, 236);
  font-size: 20px;
}

.sign-red {
  color: rgb(255, 62, 29);
  font-size: 20px;
}

.color-text {
  color: red;
  text-decoration: none;
}

.usage {
  text-decoration: underline;
}
</style>
