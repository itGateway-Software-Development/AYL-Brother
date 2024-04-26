<template>
  <div
    class="container content-wrapper mt-3"
    data-aos="fade-down"
    data-aos-duration="2000"
  >
    <div class="heading">
      <h1>Best Seller</h1>
    </div>
    <div class="row">
      <div
        class="col-4 aligin-items-center p-2"
        v-for="product in bestseller"
        :key="product.id"
      >
        <div class="card">
          <img
            :src="product.img"
            alt="Product Photo"
            class="card-img-top product-img img-fluid"
          />
          <div class="product-icon">
            <div class="p-icon">
              <p class="modified-icon">
                <span class="material-symbols-outlined heart"> favorite </span>
              </p>
            </div>
            <div class="p-icon">
              <p class="modified-icon">
                <span class="material-symbols-outlined bag">
                  shopping_bag
                </span>
              </p>
            </div>
          </div>
        </div>
        <p class="text-center label">{{ product.label }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const bestseller = ref([
      {
        img: require("@/assets/sample.jpg"),
        label: "RO:8011",
        id: 1,
      },
      {
        img: require("@/assets/sample.jpg"),
        label: "RO:8012",
        id: 2,
      },
      {
        img: require("@/assets/sample.jpg"),
        label: "RO:8013",
        id: 3,
      },
    ]);

    return { bestseller };
  },
};
</script>

<style>
.card {
  width: 26rem;
  border: 1px solid #111111;
  border-radius: 10px;
}

.heading h1 {
  font-size: 36px;
  font-weight: bold;
}
.prodct-img {
  cursor: pointer;
  position: relative;
  object-fit: fill;
}

.prodct-img:hover {
  background: black;
}

.product-icon {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #111111;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  opacity: 0;
  transition: 0.6s;
  overflow: hidden;
}

.label {
  font-size: 20px;
  font-weight: 600;
}

.p-icon {
  margin-top: 10px;
  margin-bottom: 160px;
  margin-left: 360px;
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

.product-icon:hover {
  opacity: 1;
}

.modified-icon {
  border: 1px solid #fff;
  width: 35px;
  height: 35px;
  border-radius: 50px;
  transition: 0.5 ease-out;
}

.modified-icon:hover {
  background-color: #fff;
}

.modified-icon .material-symbols-outlined:hover {
  color: red;
}

@media (max-width: 1200px) {
  .card {
    width: 22rem;
  }
  .p-icon {
    margin-top: 10px;
    margin-bottom: 115px;
    margin-left: 300px;
    cursor: pointer;
  }
}

@media (max-width: 800px) {
  .card {
    width: 14rem;
  }
  .heading h1 {
    font-size: 30px !important;
  }
  .product-icon {
    display: none;
  }
}

@media (max-width: 500px) {
  .card {
    width: 7rem;
  }
  .label {
    font-size: 14px;
    font-weight: 600;
  }
  .heading h1 {
    font-size: 26px !important;
  }
  .product-icon {
    display: none;
  }
}
</style>
