<template>
  <div class="back">
    <div class="main-section">
      <div class="content-wrapper">
        <div
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
              <div class="d-flex">
                <img
                  src="../assets/banner-1.png"
                  class="d-block img-fluid"
                  alt="..."
                />
                <div class="content-box">
                  <div class="heading-text">
                    <h5>See the latest Promotion!</h5>
                  </div>
                  <div class="content-header text-start">
                    <h1>Choose Our Underwear Series</h1>
                  </div>
                  <div class="content-text text-start">
                    <h5>
                      Look and find what your need and our porducts will provide
                      you more confortable and reliable.
                    </h5>
                  </div>
                  <div class="content-buttom text-end bb-1">
                    <router-link class="nav-link" to="/product">
                      <button
                        class="btn d-flex align-items-center bs-content justify-content-center"
                      >
                        <p>Shop now</p>
                        <i class="fa-solid fa-arrow-right"></i></button
                    ></router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="d-flex">
                <img
                  src="../assets/banner-2.png"
                  class="d-block img-fluid"
                  alt="..."
                />
                <div class="content-box">
                  <div class="heading-text">
                    <h5>Join our communities to buy easily!</h5>
                  </div>
                  <div class="content-header text-start">
                    <h1>Many sale channels on Social Platforms.</h1>
                  </div>
                  <div class="content-text text-start">
                    <h5>
                      Join our social communities such as Facebook, Youtube,
                      Viber and Telegram to take customer experiences.
                    </h5>
                  </div>
                  <div class="content-buttom text-end">
                    <router-link class="nav-link" to="/product">
                      <button
                        class="btn d-flex align-items-center bs-content justify-content-center"
                      >
                        <p>Shop now</p>
                        <i class="fa-solid fa-arrow-right"></i></button
                    ></router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="d-flex">
                <img
                  src="../assets/banner-3.png"
                  class="d-block img-fluid"
                  alt="..."
                />
                <div class="content-box">
                  <div class="heading-text">
                    <h5>Select, Checkout and Order Quickly!</h5>
                  </div>
                  <div class="content-header text-start">
                    <h1>The Men Underwear With The Superiors Quality</h1>
                  </div>
                  <div class="content-text text-start">
                    <h5>
                      We are providing many product series for men’s underwear
                      and you can order and buy easily & quickly.
                    </h5>
                  </div>
                  <div class="content-buttom text-end">
                    <router-link class="nav-link" to="/product">
                      <button
                        class="btn d-flex align-items-center bs-content justify-content-center"
                      >
                        <p>Shop now</p>
                        <i class="fa-solid fa-arrow-right"></i></button
                    ></router-link>
                  </div>
                </div>
              </div>
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

<style scoped>
.back {
  padding-top: 150px;
}
.main-section {
  width: 100%;
  display: block;
  margin: 0px auto;
  align-items: center;
  justify-content: center;
  max-width: auto;
}

.content-wrapper {
  padding: 0px 8%;
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
  top: 95%;
  left: 1%;
  width: 150px;
  margin-left: 0;
}

.carousel-indicators [data-bs-target] {
  background-color: #111;
  width: 50px;
}

.carousel-indicators .active {
  background-color: red;
}

.carousel-item img {
  width: 900px;
}

.content-box {
  z-index: 99;
  background: 100%;
  width: 790px !important;
  height: 500px;
  background: #f2f2f2;
  padding: 50px 20px;
  margin-left: -30px;
  margin-top: 70px;
}

.carousel-control-next {
  left: 6%;
}

.carousel-control-prev {
  left: 1%;
}

.carousel-control-prev,
.carousel-control-next {
  justify-content: start;
  top: 80%;
}

.carousel-control-prev .fa-solid {
  font-size: 35px;
  color: #f2f2f2;
}

.carousel-control-next .fa-solid {
  font-size: 35px;
  color: #f2f2f2;
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
  width: 150px;
  height: auto;
  border: 1px solid red;
  transition: 0.5s ease-in;
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
  .carousel-item img {
    width: 750px;
  }

  .content-box {
    width: 750px;
    height: 440px;
    margin-top: 25px;
  }

  .bb-1 {
    margin-top: 50px;
  }

  .content-buttom {
    margin-top: 40px;
    margin-left: 320px;
  }
}

@media (max-width: 1400px) {
  .carousel-item img {
    width: 650px;
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
}

@media (max-width: 1200px) {
  .main-img img {
    width: 400px;
    height: max-content;
    margin-left: 4px;
  }

  .carousel-item img {
    width: 600px;
  }

  .content-box {
    width: 400px;
    height: 380px;
    margin-top: 20px;
  }

  .content-wrapper {
    padding: 0px 20px;
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
    margin-left: 400px;
  }

  .bb-1 {
    margin-top: 80px;
  }
}

@media (max-width: 1024px) {
  .content-header h1 {
    font-size: 36px;
  }
  .carousel-item img {
    width: 500px;
  }
  .content-box {
    width: 500px !important;
    height: 330px;
    margin-top: 10px;
    margin-left: -40px;
    padding: 30px 20px;
  }
  .content-header {
    margin: 10px 0px;
  }

  .content-header h1 {
    font-size: 28px;
  }
  .carousel-control-next {
    left: 7%;
  }

  .carousel-control-prev {
    left: 1%;
  }

  .carousel-control-prev,
  .carousel-control-next {
    justify-content: start;
    top: 78%;
  }
  .carousel-control-next .fa-solid {
    font-size: 32px;
  }
  .carousel-control-prev .fa-solid {
    font-size: 32px;
  }

  .carousel-indicators {
    top: 94%;
  }

  .content-buttom {
    margin-left: 220px;
    margin-top: 20px;
  }
}

@media (max-width: 800px) {
  .back {
    padding: 20px;
  }
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
  .carousel-item img {
    width: 380px;
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

@media (max-width: 500px) {
  .main-banner img {
    width: 450px;
  }

  .content-box {
    display: none;
  }

  .carousel-item img {
    width: 800px;
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
  .carousel-control-next {
    left: 14%;
  }

  .carousel-control-prev {
    left: 1%;
  }
  .carousel-control-prev,
  .carousel-control-next {
    justify-content: start;
    top: 65%;
  }

  .carousel-indicators {
    top: 90%;
  }
}
</style>
