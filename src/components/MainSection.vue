<template>
  <div class="back">
    <div class="main-section">
      <div class="content-wrapper">
        <v-carousel show-arrows="hover" cycle hide-delimiters>
          <v-carousel-item v-for="image in carousel" :key="image.id">
            <div class="carousel-item active">
              <img :src="image.img" alt="" class="img-fluid" />
            </div>
          </v-carousel-item>
        </v-carousel>
        <!-- <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../assets/main-section/1.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/main-section/2.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/main-section/3.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <i class="fa-solid fa-arrow-left-long"></i>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <i class="fa-solid fa-arrow-right-long"></i>
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const router = useRoute;
    const carousel = [
      {
        id: 1,
        img: require("@/assets/main-section/1.jpg"),
      },
      {
        id: 2,
        img: require("@/assets/main-section/2.jpg"),
      },
      {
        id: 3,
        img: require("@/assets/main-section/3.jpg"),
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
      carousel,
      brief,
    };
  },
};
</script>

<style scoped>
.back {
  padding-top: 165px;
  background: var(--background-color);
  margin-bottom: 100px;
}
.main-section {
  width: 100%;
  display: block;
  margin: 0px auto;
  align-items: center;
  justify-content: center;
  max-width: auto;
}

.v-carousel {
  height: 600px !important;
}

.content-wrapper {
  padding: 0px 9%;
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
  left: 41%;
  transform: translate(-11%, -41%);
  color: #fff;
}

.main-banner {
  margin-left: 10px;
}

.main-banner img {
  width: 1500px;
  height: 200px;
  object-fit: cover;
}

.main-img img {
  height: 1000px;
  object-fit: cover;
  margin-left: 5px;
}

.mobile-main-product-section {
  display: none;
}

.carousel-indicators {
  top: 100%;
}

.carousel-indicators [data-bs-target] {
  background-color: #111;
  width: 50px;
}

.carousel-indicators .active {
  background-color: red;
}

.carousel-item img {
  width: 1920px;
  height: 600px;
}

.content-box {
  z-index: 99;
  background: 100%;
  width: 790px;
  height: 500px;
  background: #f2f2f2;
  padding: 50px 20px;
  margin-left: -30px;
  margin-top: 70px;
}

.carousel-control-next {
  right: 1.2%;
}

.carousel-control-prev {
  left: 1.2%;
}

.carousel-control-prev,
.carousel-control-next {
  width: 40px;
  height: 40px;
  padding: 7px;
  background: #fff;
  top: 50%;
  justify-content: center;
  position: absolute;
  border: 0.5px solid #111;
  opacity: 1;
  color: #111;
}

.carousel-control-next:hover {
  background: red;
  color: #fff;
}

.carousel-control-prev:hover {
  background: red;
  color: #fff;
}

.carousel-control-prev .fa-solid {
  font-size: 24px;
}

.carousel-control-next .fa-solid {
  font-size: 24px;
}

.heading-text {
  width: 400px;
  padding: 10px 10px;
  background: red;
  color: #fff;
}

.heading-text h5 {
  margin-bottom: 0px;
}

.content-buttom {
  margin-left: 400px;
  margin-top: 80px;
}

.bb-1 {
  margin-top: 120px;
}

.bs-content {
  width: 200px;
  height: auto;
  border: 1px solid red;
  transition: 0.5s ease-in;
  font-size: 20px;
}

.bs-content .fa-solid {
  margin-left: 10px;
}

.bs-content:hover {
  background: red;
  color: #fff;
}

.content-header h1 {
  font-size: 44px;
  font-weight: 700;
}

.content-header {
  margin: 35px 0px;
}

@media (max-width: 1600px) {
  /* .carousel-item img {
    width: 750px;
  } */

  .v-carousel {
    height: max-content !important;
  }

  .content-box {
    width: 750px;
    height: 480px;
    margin-top: 25px;
  }

  .bb-1 {
    margin-top: 50px;
  }

  .content-buttom {
    margin-top: 80px;
    margin-left: 360px;
  }
  /* .carousel-control-next,
  .carousel-control-prev {
    top: 88%;
  }

  .carousel-control-next {
    left: 5%;
  } */
}

@media (max-width: 1400px) {
  /* .carousel-item img {
    width: 650px;
  } */

  .content-wrapper {
    padding: 0px 7%;
  }

  .content-box {
    width: 550px;
    height: 400px;
    margin-top: 25px;
  }
  .bb-1 {
    margin-top: 70px;
  }

  .content-buttom {
    margin-left: 340px;
  }

  .content-header h1 {
    font-size: 30px;
  }
  /* .carousel-control-next {
    left: 5.5%;
  }
  .carousel-control-next,
  .carousel-control-prev {
    top: 87%;
  } */
}

@media (max-width: 1280px) {
  .main-img img {
    width: 400px;
    height: max-content;
    margin-left: 4px;
  }
  /* .v-carousel {
    height: 500px !important;
  } */

  .content-wrapper {
    padding: 0px 3%;
  }

  .carousel-item img {
    width: 1200px;
    height: 500px;
  }

  .content-box {
    width: 600px;
    height: 380px;
    margin-top: 20px;
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

  .content-header {
    margin: 20px 0px;
  }
  .content-buttom {
    margin-top: 60px;
    margin-left: 300px;
  }

  .bb-1 {
    margin-top: 80px;
  }
  /* .carousel-control-next,
  .carousel-control-prev {
    top: 86%;
  } */
  .back {
    margin-bottom: 0px;
  }
}

@media (max-width: 1024px) {
  .content-box {
    width: 520px;
    margin-left: -80px;
  }

  .bb-1 {
    margin-top: 65px !important;
  }

  .content-buttom {
    margin-top: 30px;
    margin-left: 200px;
  }
}

@media (max-width: 860px) {
  .back {
    padding: 20px 0px;
    margin-bottom: 50px;
  }
  .main-section {
    margin: 30px auto;
  }

  .content-wrapper {
    padding: 0px 0px;
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
    height: 400px;
  }

  .sub-col {
    width: 25%;
  }

  .content-box {
    width: 400px;
    height: 250px;
    margin-left: -50px;
    margin-top: 10px;
    padding: 20px 10px;
  }
  .content-header h1 {
    font-size: 24px;
  }

  .content-buttom {
    margin-left: 170px;
    margin-top: 10px;
  }

  .content-text h5 {
    font-size: 16px;
  }

  .bb-1 {
    margin-top: 50px;
  }
}

@media (max-width: 600px) {
  .main-banner img {
    width: 450px;
  }

  .content-wrapper {
    padding: 0px;
  }

  .back {
    margin-bottom: 0px;
    padding: 0px 0px;
  }

  .content-box {
    display: none;
  }

  .carousel-item img {
    width: 500px;
    height: 250px;
  }

  .main-banner {
    margin: 0px;
  }

  .mobile-main-product-section {
    display: block;
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

  .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }
  /* .carousel-control-next {
    left: 14%;
  }

  .carousel-control-prev {
    left: 1%;
  }
  .carousel-control-prev,
  .carousel-control-next {
    justify-content: start;
    top: 65%;
  } */

  /* .carousel-indicators {
    top: 90%;
  } */
}
</style>
