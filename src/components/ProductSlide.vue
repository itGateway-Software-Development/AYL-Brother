<template>
  <div class="slide mt-5">
    <div
      id="carouselExampleIndicators-2"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators-2"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators-2"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators-2"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div
            class="d-flex align-items-center justify-content-center content-carousel"
          >
            <img src="../assets/Picture4.png" class="img-fluid" alt="" />
            <div class="text-carousel-content text-start">
              <h2>
                Join our social community such as Facebook, Youtube, Viber and
                Telegram to get more customer experience & communications.
              </h2>

              <div class="carousel-bottom d-flex align-items-center">
                <div class="carousel-icon d-flex align-items-center">
                  <a
                    href="https://www.facebook.com/romanticmenunderwear/?ref=embed_page"
                  >
                    <img
                      src="../assets/icon/icon-1.png"
                      alt=""
                      class="img-fluid"
                  /></a>
                  <a href="https://www.youtube.com/@RomanticUnderwear">
                    <img
                      src="../assets/icon/icon-2.png"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="../assets/icon/icon-3.png"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                  <a href="https://t.me/romanticmenunderwear">
                    <img
                      src="../assets/icon/icon-4.png"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
                <!-- <div class="carousel-btn">
                  <router-link class="nav-link d-flex align-items-center btn-1"
                    ><p>Join Community</p>
                    <i class="fa-solid fa-arrow-right ms-4"></i
                  ></router-link>
                </div> -->
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div
            class="d-flex align-items-center justify-content-center content-carousel"
          >
            <img src="../assets/Picture5.png" class="img-fluid" alt="" />
            <div class="text-carousel-content text-start">
              <h2 class="second">
                Choose the best products from our e-commerce website based on
                size, color, model, and category to meet your needs.
              </h2>

              <div class="carousel-bottom d-flex align-items-center btn-5">
                <div class="carousel-icon-text d-flex align-items-center">
                  <router-link class="nav-link"
                    ><p class="b">Bamboo</p></router-link
                  >
                  <router-link class="nav-link"
                    ><p class="ms-3 l">Lycra</p></router-link
                  >
                  <router-link class="nav-link"
                    ><p class="ms-3 s">Spandex</p></router-link
                  >
                </div>
                <div class="carousel-btn btn-2">
                  <router-link
                    class="nav-link d-flex align-items-center btn-1"
                    to="/product"
                    ><p>View Products</p>
                    <i class="fa-solid fa-arrow-right ms-4"></i
                  ></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div
            class="d-flex align-items-center justify-content-center content-carousel"
          >
            <img src="../assets/Picture6.png" class="img-fluid" alt="" />
            <div class="text-carousel-content text-start">
              <h2>
                You can order our products from the website using many payment
                channels such as Kpay, AYA Pay, CB Pay, Wave Pay and Banking.
              </h2>

              <div class="carousel-bottom d-flex align-items-center">
                <div class="carousel-icon d-flex align-items-center">
                  <a
                    href="https://www.facebook.com/romanticmenunderwear/?ref=embed_page"
                  >
                    <img
                      src="../assets/icon/icon-5.jpg"
                      alt=""
                      class="img-fluid"
                  /></a>
                  <a href="https://www.youtube.com/@RomanticUnderwear">
                    <img
                      src="../assets/icon/icon-6.png"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="../assets/icon/icon-7.png"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                  <a href="https://t.me/romanticmenunderwear">
                    <img
                      src="../assets/icon/icon-8.png"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
                <!-- <div class="carousel-btn btn-3">
                  <router-link class="nav-link d-flex align-items-center"
                    ><p>Order Now</p>
                    <i class="fa-solid fa-arrow-right ms-4"></i
                  ></router-link>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.carousel-indicators {
  left: 45.5%;
}

.carousel-item {
  width: 100%;
  height: 500px;
  background: linear-gradient(90deg, #ff1100, #ffbb00);
}

.content-carousel {
  padding: 0px 100px;
}

.text-carousel-content {
  padding: 0px 50px;
}

.carousel-icon img {
  width: 40px;
  margin: 10px 10px;
}

.carousel-btn {
  margin: 0px 20px;
  width: 300px;
  border: 1px solid red;
  border-radius: 20px;
  padding: 15px 30px;
}

.btn-1 p {
  font-size: 24px;
}

.btn-3 {
  padding: 15px 70px;
}
.btn-3 p {
  font-size: 24px;
}

.btn-1 .fa-solid {
  font-size: 20px;
}

.carousel-btn:hover {
  background: red;
  color: #fff;
}

.nav-link:hover {
  color: #fff;
}

.carousel-icon-text p {
  font-size: 24px;
  margin-right: 20px;
  text-decoration: underline;
}

.carousel-icon-text p:hover {
  color: #fff;
}

.b {
  color: #7030a0;
}

.l {
  color: #0070c0;
}

.s {
  color: #002060;
}

@media (max-width: 1400px) {
  .content-carousel {
    padding: 0px;
  }
}

@media (max-width: 1200px) {
  .carousel-item {
    height: 380px;
  }
}

@media (max-width: 1024px) {
  .carousel-item {
    height: 310px;
  }

  .carousel-btn {
    padding: 15px 10px;
  }

  .btn-2 {
    width: 220px;
  }
}

@media (max-width: 800px) {
  .text-carousel-content h2 {
    font-size: 22px;
  }

  .carousel-item {
    height: 260px;
  }
  .btn-1 p {
    font-size: 20px;
  }

  .content-carousel {
    padding: 0px 50px;
    margin: 0px 100px;
  }
  .text-carousel-content {
    padding: 0;
  }

  .btn-5 {
    flex-direction: column;
  }

  .btn-2 {
    margin-top: 10px;
    margin-left: -100px;
  }
}

@media (max-width: 500px) {
  .content-carousel img {
    display: none;
  }

  .text-carousel-content {
    padding: 0px;
    margin: 30px auto;
  }
  .carousel-indicators {
    left: 35.5%;
  }
  .carousel-btn {
    margin-top: 10px;
  }
  .btn-2 {
    margin-top: 10px;
  }
}
</style>
