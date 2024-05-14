<template>
  <div class="product-card">
    <div class="row">
      <div
        class="col-6 col-md-4 col-sm-6 mb-3"
        v-for="product in filteredItems"
        :key="product.id"
      >
        <div class="p-card mb-2">
          <div class="upper-card">
            <div class="img">
              <img :src="product.img" alt="" />
            </div>
            <div class="modified-text">
              <p>12000MMK</p>
            </div>
            <div class="img-icon">
              <div class="icon-s">
                <p class="modified-icon">
                  <span class="material-symbols-outlined heart">
                    favorite
                  </span>
                </p>
              </div>
              <div class="icon-s">
                <p class="modified-icon">
                  <span class="material-symbols-outlined bag">
                    shopping_bag
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="mt-4 lower-card text-start">
            <h5 class="mb-3">Romantic Underwear</h5>
            <div class="color-hover mb-1">
              <p class="color-hover-text">+4 Color</p>
              <div class="d-flex color-control" id="color">
                <div class="circle-color color-red"></div>
                <div class="circle-color color-green"></div>
                <div class="circle-color color-royalblue"></div>
                <div class="circle-color color-dark"></div>
              </div>
            </div>
            <div class="rating d-flex me-1">
              <span class="material-symbols-outlined"> star_rate </span>
              <span class="material-symbols-outlined"> star_rate </span>
              <span class="material-symbols-outlined"> star_rate </span>
              <span class="material-symbols-outlined"> star_rate </span>
              <span class="material-symbols-outlined"> star_rate </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineProps, onMounted, ref, watch } from "vue";
export default {
  props: ["price"],

  setup(props, context) {
    const data = [
      {
        id: 1,
        img: require("@/assets/product/b.jpg"),
        price: "low",
      },
      {
        id: 2,
        img: require("@/assets/product/b.jpg"),
        price: "low",
      },
      {
        id: 3,
        img: require("@/assets/product/b.jpg"),
        price: "low",
      },
      {
        id: 4,
        img: require("@/assets/product/b.jpg"),
        price: "medium",
      },
      {
        id: 5,
        img: require("@/assets/product/b.jpg"),
        price: "medium",
      },
      {
        id: 6,
        img: require("@/assets/product/b.jpg"),
        price: "high",
      },
      {
        id: 7,
        img: require("@/assets/product/b.jpg"),
        price: "high",
      },
    ];

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

    return { filteredItems };
  },
};
</script>

<style>
.upper-card {
  position: relative;
}

.img img {
  width: 300px;
  position: relative;
  border-radius: 10px;
}

.img-icon {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  opacity: 1;
  transition: 0.6s;
  overflow: hidden;
  top: 0;
}

.icon-s {
  margin-top: 10px;
  margin-bottom: 300px;
  margin-left: 250px;
  cursor: pointer;
}

.heart {
  padding: 5px 0;
  color: #fff;
}
.bag {
  padding: 4px 0;
  color: #fff;
}

.modified-text {
  position: absolute;
  bottom: 0;
  background: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-left: 20px;
  transition: 0.5 ease;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: normal;
  border-bottom: 1px solid #ffff;
}
.modified-text p {
  padding: 3px;
}
.upper-card:hover .modified-text {
  margin-bottom: 5px;
  border: 1px solid #111111;
  transition: 0.5 ease;
  border-radius: 0px;
}

.lower-card h5 {
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.color-hover {
  margin-top: -5px;
}

.color-hover p {
  opacity: 1;
  cursor: pointer;
  transition: 0.5 ease-in;
}

.circle-color {
  width: 30px;
  height: 30px;
  border: 1px solid #111111;
  border-radius: 50px;
  cursor: pointer;
  margin: -25px 4px 0px 0px;
  opacity: 0;
  transition: 0.5s ease-out;
}
.color-red {
  background: red;
}

.color-green {
  background: #00ff00;
}

.color-royalblue {
  background: #4169e1;
}

.color-dark {
  background: #111111;
}

.color-hover:hover .circle-color {
  opacity: 1;
}

.color-hover:hover .color-hover-text {
  opacity: 0;
}

.rating .material-symbols-outlined {
  color: gold;
}

@media (max-width: 1200px) {
  .img img {
    width: 300px;
  }
  .icon-s {
    margin-top: 10px;
    margin-bottom: 290px;
    margin-left: 240px;
  }
  .lower-card {
    margin-left: 20px;
  }
}

@media (max-width: 500px) {
  .img img {
    width: 180px;
    position: relative;
  }
  .icon-s {
    margin-top: 10px;
    margin-bottom: 160px;
    margin-left: 170px;
  }
  .modified-icon .material-symbols-outlined {
    font-size: 16px !important;
  }
  .heart {
    padding: 4px 0;
    color: #fff;
  }
  .bag {
    padding: 3px 0;
    color: #fff;
  }
  .modified-text p {
    font-size: 14px;
  }
  .modified-text {
    margin-left: 30px;
  }

  .circle-color {
    width: 20px;
    height: 20px;
  }
  .color-hover-text {
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: italic;
  }

  .modified-icon {
    width: 25px;
    height: 25px;
  }

  .lower-card {
    margin-left: 30px;
  }

  .lower-card h5 {
    font-size: 16px;
  }
}

@media (max-width: 400px) {
  .modified-text {
    margin-left: 20px;
  }
  .lower-card {
    margin-left: 10px;
  }
}
</style>
