<template>
  <div
    class="container content-wrapper mt-3 best-seller"
    data-aos="fade-down"
    data-aos-duration="2000"
  >
    <div class="heading">
      <div class="row align-items-center justify-content-center">
        <div class="col-5 line"><hr /></div>
        <div class="col-2 p-col-2"><h1>Best Seller</h1></div>
        <div class="col-5 line"><hr /></div>
      </div>
    </div>
    <div class="row card-list">
      <div class="col-4">
        <div class="p-card mb-3">
          <div class="card-img mb-2">
            <img src="../assets/product/a.jpg" class="img-fluid" alt="" />
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
      <div class="col-4">
        <div class="p-card mb-3">
          <div class="card-img mb-2">
            <img src="../assets/product/a.jpg" class="img-fluid" alt="" />
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
      <div class="col-4">
        <div class="p-card mb-3">
          <div class="card-img mb-2">
            <img src="../assets/product/a.jpg" class="img-fluid" alt="" />
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
import { ref } from "vue";
export default {
  setup() {
    const bestseller = ref([
      {
        img: require("@/assets/product/d.jpg"),
        label: "RO:8011",
        id: 1,
      },
      {
        img: require("@/assets/product/d.jpg"),
        label: "RO:8012",
        id: 2,
      },
      {
        img: require("@/assets/product/d.jpg"),
        label: "RO:8013",
        id: 3,
      },
    ]);

    return { bestseller };
  },
};
</script>

<style scoped>
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

.best-seller img {
  border-radius: 10px;
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
  margin-bottom: 450px;
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
    width: 20rem;
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
  .product-icon {
    display: none;
  }
  .heading h1 {
    font-size: 24px;
  }
  .p-col-2 {
    width: 100%;
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

  .product-icon {
    display: none;
  }

  .card-list {
    margin: 0px auto;
  }

  .card-content p {
    font-size: 12px;
  }

  .wish-btn,
  .add-btn {
    width: 120px;
    font-size: 12px;
  }
}
</style>
