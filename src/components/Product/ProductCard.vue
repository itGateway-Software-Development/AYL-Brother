<template>
  <div class="product-card container">
    <div class="row align-content-center">
      <div
        class="col-6 col-md-4 col-sm-6 mb-3 p-card-col"
        v-for="product in filteredItems"
        :key="product.id"
      >
        <div class="p-card mb-3">
          <div class="card-img mb-2">
            <img :src="product.img" class="img-fluid" alt="" />
          </div>
          <div class="p-color text-center mb-2">
            <p>Color : RED & White</p>
          </div>
          <div class="card-content text-start">
            <p class="code">Product-code: 5002</p>
            <p>2PCS in 1 BOX</p>
            <p>Price: 10700 MMK</p>
          </div>
          <div class="card-button-group mt-3">
            <div class="btn add-btn mb-3">Add to Bag</div>
            <div class="btn wish-btn">Add to WishList</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineProps, inject, onMounted, ref, watch } from "vue";
import { mapActions, useStore } from "vuex";
import product from "@/store/modules/product";
export default {
  props: ["price"],

  setup(props, context) {
    const store = useStore();
    const data = [
      {
        id: 1,
        name: "Romantic Underwear",
        img: require("@/assets/product/b.jpg"),
        price: "low",
        p: 12000,
      },
      {
        id: 2,
        name: "Romantic Underwear",
        img: require("@/assets/product/b.jpg"),
        price: "low",
        p: 12000,
      },
      {
        id: 3,
        name: "Romantic Underwear",
        img: require("@/assets/product/b.jpg"),
        price: "low",
        p: 12000,
      },
      {
        id: 4,
        name: "Romantic Underwear",
        img: require("@/assets/product/b.jpg"),
        price: "medium",
        p: 22000,
      },
      {
        id: 5,
        name: "Romantic Underwear",
        img: require("@/assets/product/b.jpg"),
        price: "medium",
        p: 22000,
      },
      {
        id: 6,
        name: "Romantic Underwear",
        img: require("@/assets/product/b.jpg"),
        price: "high",
        p: 32000,
      },
      {
        id: 7,
        name: "Romantic Underwear",
        img: require("@/assets/product/b.jpg"),
        price: "high",
        p: 32000,
      },
    ];

    let cartAdd = ref(true);

    let filteredItems = ref([]);

    function filterLow(data) {
      return data.price === "low";
    }
    function filterMedium(data) {
      return data.price === "medium";
    }
    function filterHigh(data) {
      return data.price === "high";
    }

    function applyFilters(data, low = true, medium = true, high = true) {
      const filters = [];
      if (low) {
        filters.push(filterLow);
      }
      if (medium) {
        filters.push(filterMedium);
      }
      if (high) {
        filters.push(filterHigh);
      }

      const filteredData = data.filter((item) =>
        filters.some((filter) => filter(item))
      );
      return filteredData;
    }

    watch(
      () => props.price,
      (newFilter, oldFilter) => {
        if (newFilter.islow === true && newFilter.ismedium === true) {
          filteredItems.value = applyFilters(data, true, true, false);
        } else if (newFilter.ismedium === true && newFilter.ishigh === true) {
          filteredItems.value = applyFilters(data, false, true, true);
        } else if (newFilter.islow === true && newFilter.ishigh === true) {
          filteredItems.value = applyFilters(data, true, false, true);
        } else if (newFilter.ishigh === true) {
          filteredItems.value = applyFilters(data, false, false, true);
        } else if (newFilter.ismedium === true) {
          filteredItems.value = applyFilters(data, false, true, false);
        } else if (newFilter.islow === true) {
          filteredItems.value = applyFilters(data, true, false, false);
        } else {
          filteredItems.value = applyFilters(data, true, true, true);
        }
        console.log(filteredItems);
      },

      onMounted(() => {
        filteredItems.value = applyFilters(data, true, true, true);
      })
    );

    const getProduct = (product) => {
      store.dispatch("getProduct", { ...product, quantity: 1 });
    };

    return { filteredItems, getProduct, name: "Romantic Underwear", cartAdd };
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

.add-btn {
  width: 300px;
  background: #111;
  color: #fff;
}

.add-btn:hover {
  background: #b7b7b7;
  color: #fff;
}

.wish-btn {
  width: 300px;
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

@media (max-width: 1200px) {
  .p-card-col {
    width: 33.3333%;
  }
  .add-btn,
  .wish-btn {
    width: 230px;
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
