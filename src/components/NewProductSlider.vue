<template>
  <div data-aos="zoom-in" data-aos-duration="2000">
    <div class="container content-wrapper mt-5 d-1">
      <div class="heading">
        <h1>New Product</h1>
      </div>
      <v-carousel cycle hide-delimiter-background class="new-p-slider">
        <v-carousel-item>
          <div class="new-product">
            <div class="row">
              <div class="col-6 d-flex">
                <div class="p-img me-5">
                  <img
                    src="../assets/pdetail/bamboo.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div class="new-p-content text-start">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div class="text-start mt-3">
                    <button class="btn shopnow-button">SHOP NOW</button>
                  </div>
                </div>
              </div>
              <div class="col-6 d-flex">
                <div class="p-img me-5">
                  <img
                    src="../assets/pdetail/spandex.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div class="new-p-content text-start">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div class="text-start mt-3">
                    <button class="btn shopnow-button">SHOP NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="new-product">
            <div class="row">
              <div class="col-6 d-flex">
                <div class="p-img me-5">
                  <img
                    src="../assets/pdetail/bamboo.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div class="new-p-content text-start">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div class="text-start mt-3">
                    <button class="btn shopnow-button">SHOP NOW</button>
                  </div>
                </div>
              </div>
              <div class="col-6 d-flex">
                <div class="p-img me-5">
                  <img
                    src="../assets/pdetail/modal.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div class="new-p-content text-start">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div class="text-start mt-3">
                    <button class="btn shopnow-button">SHOP NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="new-product">
            <div class="row">
              <div class="col-6 d-flex">
                <div class="p-img me-5">
                  <img
                    src="../assets/pdetail/bamboo.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div class="new-p-content text-start">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div class="text-start mt-3">
                    <button class="btn shopnow-button">SHOP NOW</button>
                  </div>
                </div>
              </div>
              <div class="col-6 d-flex">
                <div class="p-img me-5">
                  <img
                    src="../assets/pdetail/bamboo.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div class="new-p-content text-start">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div class="text-start mt-3">
                    <button class="btn shopnow-button">SHOP NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="container content-wrapper mt-5 mobile-new-p">
      <div class="heading">
        <h1>New Product</h1>
      </div>
      <v-carousel
        height="200"
        show-arrows="hover"
        cycle
        hide-delimiter-background
        class="new-p-slider"
      >
        <v-carousel-item v-for="product in mobileSlider" :key="product.id">
          <div class="mobile-p">
            <div class="d-flex aligin-items-center">
              <div class="p-img me-5">
                <img :src="product.img" alt="" class="img-fluid" />
              </div>
              <div class="new-p-content text-start">
                <p>{{ product.content }}</p>
                <div class="text-start mt-3">
                  <button class="btn shopnow-button">SHOP NOW</button>
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const mobileSlider = ref([
      {
        id: 1,
        img: require("@/assets/pdetail/bamboo.jpg"),
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
      {
        id: 2,
        img: require("@/assets/pdetail/modal.jpg"),
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
      {
        id: 3,
        img: require("@/assets/pdetail/spandex.jpg"),
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ]);
    return {
      mobileSlider,
    };
  },
};
</script>

<style scoped>
.new-product {
  align-items: center;
  padding: 0 80px;
  margin: 50px 0 0 20px;
}
.new-p-content {
  font-size: 20px;
}

.new-p-slider {
  margin-top: -30px;
  height: 300px !important;
}

.mobile-new-p {
  display: none;
}

.shopnow-button {
  width: 150px !important;
  height: 40px !important;
}

.p-img img {
  width: 300px;
  border: 1px solid #111111;
  border-radius: 10px;
}
@media (max-width: 1200px) {
  .new-p-slider {
    height: 250px !important;
  }
}

@media (max-width: 800px) {
  .new-product {
    margin: 80px 0 0 20px;
  }
  .new-p-content {
    font-size: 16px;
  }
  .new-p-slider {
    margin-top: -60px;
  }
}

@media (max-width: 500px) {
  .d-1 {
    display: none;
  }
  .p-img img {
    width: 160px;
    height: 100px;
  }
  .mobile-new-p {
    display: block !important;
  }
  .mobile-p {
    align-items: center;
    margin: 30px 0px 0px 40px;
    padding: 20px;
  }
  .new-p-content {
    font-size: 12px;
  }
  .new-p-slider {
    margin-top: -30px;
    height: 200px !important;
  }
  .shopnow-button {
    width: 100px !important;
    height: 30px !important;
    font-size: 12px;
  }
}
</style>
