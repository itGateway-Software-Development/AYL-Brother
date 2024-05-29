<template>
  <div class="main-section">
    <div class="container content-wrapper">
      <div class="main-banner">
        <img src="../assets/sample.jpg" alt="" class="img-fluid" />
      </div>
      <div class="row justify-content-center">
        <div class="col-3">
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="2000"
          >
            <div class="carousel-inner">
              <div
                class="carousel-item active"
                v-for="item in boxer"
                :key="item.id"
              >
                <img :src="item.img" class="img-fluid" alt="..." />
              </div>
            </div>
          </div>
          <div class="main-text-content">
            <h3 class="text-center mb-5">Boxer</h3>
            <button class="btn shopnow-button">Shop Now</button>
          </div>
        </div>
        <div class="col-5 p-5">
          <div class="main-img">
            <img src="../assets/sample.jpg" class="d-block img-fluid" alt="" />
          </div>
          <div class="main-text text-center">
            <h3>Romantic Sharing</h3>
            <h3>Superior Quality Underwears for Men</h3>
          </div>
        </div>
        <div class="col-3">
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="2000"
          >
            <div class="carousel-inner">
              <div
                class="carousel-item active"
                v-for="item in brief"
                :key="item.id"
              >
                <img :src="item.img" class="d-block img-fluid" alt="..." />
              </div>
            </div>
          </div>
          <div class="main-text-content">
            <h3 class="text-center mb-5">Brief</h3>
            <button class="btn shopnow-button">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const boxer = [
      {
        id: 1,
        img: require("@/assets/product/5003/1.jpg"),
      },
      {
        id: 2,
        img: require("@/assets/product/5003/2.jpg"),
      },
      {
        id: 3,
        img: require("@/assets/product/5003/3.jpg"),
      },
    ];

    const brief = [
      {
        id: 1,
        img: require("@/assets/product/5002/A.jpg"),
      },
      {
        id: 2,
        img: require("@/assets/product/5002/B.jpg"),
      },
      {
        id: 3,
        img: require("@/assets/product/5002/C.jpg"),
      },
    ];

    return {
      boxer,
      brief,
    };
  },
};
</script>

<style>
.main-section {
  margin-top: 150px;
}

.main-text-content h3 {
  font-family: "Kanit", sans-serif;
  font-weight: 500;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.main-text {
  margin-top: 100px;
  font-family: "Kanit", sans-serif;
  font-weight: 700;
  font-style: normal;
}
</style>
