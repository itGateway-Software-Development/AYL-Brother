<template>
  <div class="main-section">
    <div class="container content-wrapper">
      <div class="main-banner justify-content-center">
        <img src="../assets/promotion-banner.jpg" alt="" class="img-fluid" />
        <div class="promotion-text">
          <h3>Sign up with email & get an extra point</h3>
          <div class="butoon">
            <button class="btn sign-up-button">Sign UP</button>
          </div>
        </div>
      </div>
      <div class="row justify-content-center main-product-section">
        <div class="col-3 sub-col">
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
            <router-link to="/product"
              ><button class="btn shopnow-button">Shop Now</button></router-link
            >
          </div>
        </div>
        <div class="col-6 romantic-men">
          <div class="main-img">
            <img
              src="../assets/person-1.jpg"
              class="d-block img-fluid"
              alt=""
            />
          </div>
          <div class="main-text text-center">
            <h3>Romantic Sharing</h3>
            <h3>Superior Quality Underwears for Men</h3>
          </div>
        </div>
        <div class="col-3 sub-col">
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
            <router-link to="/product"
              ><button class="btn shopnow-button">Shop Now</button></router-link
            >
          </div>
        </div>
      </div>
      <div class="mobile-main-product-section">
        <div class="row justify-content-center">
          <div class="col-6 romantic-men">
            <div class="main-img">
              <img
                src="../assets/person-1.jpg"
                class="d-block img-fluid"
                alt=""
              />
            </div>
            <div class="main-text text-center">
              <h3>Romantic Sharing</h3>
              <h3>Superior Quality Underwears for Men</h3>
            </div>
          </div>
          <div class="col-3 sub-col">
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
          <div class="col-3 sub-col">
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
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const router = useRoute;
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

.romantic-men {
  padding: 48px;
}
.main-text {
  margin-top: 20px;
  font-family: "Kanit", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.promotion-text {
  position: absolute;
  top: 11%;
  left: 37.5%;
  transform: translate(-11%, -37.5%);
  color: #fff;
}

.main-banner {
  margin-left: 10px;
}

.main-banner img {
  width: 1300px;
  height: 200px;
  object-fit: cover;
}

.main-img img {
  height: 400px;
  object-fit: cover;
  margin-left: 5px;
}

.mobile-main-product-section {
  display: none;
}

@media (max-width: 1200px) {
  .main-img img {
    width: 400px;
    height: max-content;
    margin-left: 4px;
  }

  .main-text h3 {
    font-size: 22px;
  }

  .main-text-content h3 {
    font-size: 22px;
  }

  .promotion-text {
    top: 12%;
    left: 35%;
    transform: translate(-12%, -35%);
  }
}

@media (max-width: 800px) {
  .main-section {
    margin: 30px auto;
  }

  .main-banner {
    margin: 0px auto;
  }

  .main-banner img {
    width: 750px;
  }

  .promotion-text {
    top: 8%;
    left: 32%;
    transform: translate(-8%, -32%);
  }

  .promotion-text h3 {
    font-size: 20px;
  }

  .sign-up-button,
  .shopnow-button {
    width: 150px !important;
    height: 40px !important;
  }

  .main-product-section {
    margin: 0px auto;
  }

  .carousel-item img {
    width: 300px;
  }

  .sub-col {
    width: 25%;
  }
}

@media (max-width: 500px) {
  .main-banner img {
    width: 450px;
  }

  .main-banner {
    margin: 0px;
  }

  .mobile-main-product-section {
    display: block;
  }

  .promotion-text {
    top: 4.5%;
    left: 20%;
    transform: translate(-4.5%, -20%);
  }
  .main-product-section {
    display: none;
  }

  .romantic-men {
    width: 100%;
  }

  .sub-col {
    width: 50%;
  }
}

@media (max-width: 450px) {
  .promotion-text {
    top: 4.5%;
    left: 14%;
    transform: translate(-4.5%, -14%);
  }
}

@media (max-width: 400px) {
  .promotion-text {
    top: 4.5%;
    left: 12%;
    transform: translate(-4.5%, -12%);
  }
}
</style>
