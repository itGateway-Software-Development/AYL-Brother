<template>
  <div class="slide">
    <div class="content-wrapper">
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
          <div class="carousel-item active product-img">
            <div
              class="d-flex align-items-center justify-content-center content-carousel"
            >
              <img src="../assets/mini-photo/2.jpg" class="img-fluid" alt="" />
              <div class="text-carousel-content text-start">
                <h2>
                  Join our social community such as Facebook, Youtube, Viber and
                  Telegram to get more customer experience & communications.
                </h2>

                <div class="carousel-bottom d-flex align-items-center">
                  <div class="carousel-icon d-flex align-items-center">
                    <a
                      href="https://www.facebook.com/romanticmenunderwear/?ref=embed_page"
                      target="_blank"
                    >
                      <img
                        src="../assets/icon/icon-1.png"
                        alt=""
                        class="img-fluid icon-1"
                    /></a>
                    <a
                      href="https://www.youtube.com/@RomanticUnderwear"
                      target="_blank"
                    >
                      <img
                        src="../assets/icon/icon-2.png"
                        alt=""
                        class="img-fluid icon-2"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="../assets/icon/icon-3.png"
                        alt=""
                        class="img-fluid icon-3"
                      />
                    </a>
                    <a href="https://t.me/romanticmenunderwear" target="_blank">
                      <img
                        src="../assets/icon/icon-4.png"
                        alt=""
                        class="img-fluid icon-4"
                      />
                    </a>
                  </div>
                  <div class="carousel-btn">
                    <a
                      class="nav-link d-flex align-items-center btn-1 btn"
                      href="https://www.facebook.com/romanticmenunderwear/?ref=embed_page"
                      target="_blank"
                      ><p>Join Community</p>
                      <i class="fa-solid fa-arrow-right ms-4"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item product-img">
            <div
              class="d-flex align-items-center justify-content-center content-carousel"
            >
              <img src="../assets/mini-photo/4.jpg" class="img-fluid" alt="" />
              <div class="text-carousel-content text-start">
                <h2 class="second">
                  Choose the best products from our e-commerce website based on
                  size, color, model, and category to meet your needs.
                </h2>

                <div class="carousel-bottom d-flex align-items-center btn-5">
                  <div class="carousel-icon-text d-flex align-items-center">
                    <div class="carousel-btn-1">
                      <router-link
                        class="nav-link d-flex align-items-center btn btn-2"
                        to="/products/bamboo/0"
                        ><p>Bamboo</p>
                        <i class="fa-solid fa-arrow-right ms-4"></i
                      ></router-link>
                    </div>
                    <div class="carousel-btn-1">
                      <router-link
                        class="nav-link d-flex align-items-center btn btn-2"
                        to="/products/lycra/0"
                        ><p>Modal</p>
                        <i class="fa-solid fa-arrow-right ms-4"></i
                      ></router-link>
                    </div>
                    <div class="carousel-btn-1">
                      <router-link
                        class="nav-link d-flex align-items-center btn btn-2"
                        to="/products/spandex/0"
                        ><p>Spandex</p>
                        <i class="fa-solid fa-arrow-right ms-4"></i
                      ></router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item product-img">
            <div
              class="d-flex align-items-center justify-content-center content-carousel"
            >
              <img src="../assets/mini-photo/5.jpg" class="img-fluid" alt="" />
              <div class="text-carousel-content text-start">
                <h2>
                  You can order our products from the website using many payment
                  channels such as Kpay, AYA Pay, CB Pay, Wave Pay and Banking.
                </h2>

                <div class="carousel-bottom d-flex align-items-center">
                  <div class="carousel-icon d-flex align-items-center">
                    <a
                      href="https://www.facebook.com/romanticmenunderwear/?ref=embed_page"
                      target="_blank"
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
                    <a href="https://t.me/romanticmenunderwear" target="_blank">
                      <img
                        src="../assets/icon/icon-8.png"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <div class="carousel-btn btn-3">
                    <router-link
                      class="nav-link d-flex align-items-center btn btn-1"
                      to="/product"
                      ><p>Order Now</p>
                      <i class="fa-solid fa-arrow-right ms-4"></i
                    ></router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators-2"
            data-bs-slide="prev"
          >
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators-2"
            data-bs-slide="next"
          >
            <i class="fa-solid fa-angle-right"></i>
          </button> -->
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
  top: 100%;
  right: 0;
  margin-top: 20px;
}

.carousel-indicators [data-bs-target] {
  background-color: #111111;
  width: 50px;
}

.carousel-indicators .active {
  background-color: red;
}

.slide {
  margin-top: 150px;
}

.carousel-item {
  width: 100%;
}

.product-img img {
  width: auto;
  border-radius: 6px;
}

.text-carousel-content {
  height: 400px;
  background: #f2f2f2;
  padding: 100px;
  margin: 0px auto;
  margin-left: -20px;
  border-radius: 6px;
  align-content: center;
}

.carousel-icon img {
  width: 30px;
  margin: 10px 10px;
}

.icon-1 {
  width: 30px !important;
}

.icon-2,
.icon-4 {
  width: 40px !important;
}

.icon-3 {
  width: 35px !important;
}

.carousel-btn {
}

.btn-1 {
  margin: 0px 20px;
  width: 200px;
  border: 1px solid red;
  text-align: center;
  justify-content: center;
  padding: 5px 15px;
  position: relative;
  color: #111;
  background: red;
  z-index: 1;
  transition: 1s;
}

.btn-1::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 6px;
  z-index: -1;
  transform-origin: left;
  transition: transform 1s ease;
  transform: scaleX(1);
}

.btn-1:hover::before {
  transform-origin: right;
  transition: transform 0.5s ease;
  transform: scaleX(0);
}

.carousel-control-prev,
.carousel-control-next {
  width: 50px;
  height: 50px;
  padding: 8px;
  background: #fff;
  border-radius: 50%;
  top: 85%;
  justify-content: center;
  position: absolute;
  border: 0.5px solid #111;
  opacity: 1;
  color: #111;
  align-content: center;
}

.carousel-control-prev {
  left: 0.5%;
}

.carousel-control-next {
  right: 92%;
}

.carousel-control-next .fa-solid {
  font-size: 16px;
}
.carousel-control-prev .fa-solid {
  font-size: 16px;
}

.carousel-control-next:hover {
  background: #f2f2f2;
}

.carousel-control-prev:hover {
  background: #f2f2f2;
}

.btn-1 p {
  font-size: 18px;
}

.btn-3 {
  padding: 10px 30px;
}
.btn-3 p {
  font-size: 20px;
}

.btn-2 {
  margin: 20px 20px 0px 0px;
  width: 180px;
  border: 1px solid red;
  text-align: center;
  justify-content: center;
  padding: 5px 15px;
  font-size: 16px;
  position: relative;
  z-index: 1;
  background: red;
  color: #111;
  transition: 1s;
}

.btn-2::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 6px;
  z-index: -1;
  transform-origin: left;
  transition: transform 1s ease;
  transform: scaleX(1);
}

.btn-2:hover::before {
  transform-origin: right;
  transition: transform 0.5s ease;
  transform: scaleX(0);
}

.btn-1:hover {
  background: red;
  color: #fff;
}

.btn-2:hover {
  background: red;
  color: #fff;
}

.btn-2 p {
  font-size: 20px !important;
}

.btn-2 .fa-solid {
  font-size: 20px;
}

.btn-1 .fa-solid {
  font-size: 20px;
}

.nav-link:hover {
  color: #fff;
}

.carousel-icon-text p {
  font-size: 20px;
  margin-right: 20px;
}

.carousel-icon-text p:hover {
  color: #fff;
}

@media (max-width: 1790px) {
  .carousel-control-next {
    right: 91%;
  }
}

@media (max-width: 1390px) {
  .carousel-control-next {
    right: 89.5%;
  }

  .text-carousel-content {
    padding: 50px;
    height: 400px;
  }

  .text-carousel-content h2 {
    font-size: 24px;
  }

  .carousel-btn-1 p {
    font-size: 14px !important;
  }

  .btn-2 p {
    font-size: 14px;
  }

  .btn-2 .fa-solid {
    font-size: 14px;
  }

  .btn-2 {
    width: 140px;
  }
  .btn-1 p {
    font-size: 14px;
  }

  .btn-1 {
    width: 170px;
  }

  .btn-1 .fa-solid {
    font-size: 14px;
  }
}

@media (max-width: 1200px) {
  .content-wrapper {
    padding: 0px 3% !important;
  }
  .product-img img {
    width: 450px;
  }
  .carousel-icon img {
    width: 35px;
    margin-right: 10px;
  }
}

@media (max-width: 1000px) {
  .text-carousel-content h2 {
    font-size: 20px;
  }

  .text-carousel-content {
    padding: 50px;
    height: 300px;
  }

  .product-img img {
    width: 350px;
  }

  .icon-1 {
    width: 20px !important;
  }

  .icon-2,
  .icon-4 {
    width: 25px !important;
  }

  .icon-3 {
    width: 22px !important;
  }

  .btn-1 p {
    font-size: 12px;
  }

  .btn-1 {
    width: 150px;
  }

  .btn-1 .fa-solid {
    font-size: 12px;
  }

  .carousel-control-next,
  .carousel-control-prev {
    width: 40px;
    height: 40px;
    top: 84%;
  }

  .carousel-control-next {
    right: 88%;
  }
  .carousel-control-prev {
    left: 1.3%;
  }

  .carousel-btn-1 p {
    font-size: 12px !important;
  }

  .btn-2 p {
    font-size: 12px;
  }

  .btn-2 .fa-solid {
    font-size: 12px;
  }

  .btn-2 {
    width: 120px;
  }

  .carousel-icon img {
    width: 25px;
    margin-right: 10px;
  }
}

@media (max-width: 1400px) {
  .content-wrapper {
    padding: 0px 7%;
  }
}

/* @media (max-width: 1750px) {
  .carousel-indicators {
    left: -90px;
  }
} */

/* @media (max-width: 1024px) {
  .carousel-item {
    height: 350px;
  }

  .carousel-icon-text {
    flex-wrap: wrap;
    width: 500px;
  }

  .carousel-btn {
    padding: 15px 10px;
  }

  .text-carousel-content h2 {
    font-size: 22px;
  }

  .carousel-icon img {
    width: 30px;
  }

  .carousel-bottom {
    flex-direction: column;
    align-items: flex-start !important;
  }

  .carousel-btn {
    margin: 20px 0px;
    padding: 10px 20px;
    align-items: center;
  }

  .carousel-btn-1 {
    margin: 20px 20px 0px 0px;
  }

  .btn-3 {
    padding: 10px 40px;
  }
} */

@media (max-width: 860px) {
  .content-wrapper {
    padding: 0px;
  }

  .text-carousel-content h2 {
    font-size: 20px;
  }

  .text-carousel-content {
    padding: 20px;
  }
  .btn-3 {
    padding: 10px 0px;
  }

  .carousel-icon img {
    width: 30px;
  }

  .icon-1 {
    width: 30px !important;
  }

  .icon-2,
  .icon-4 {
    width: 35px !important;
  }

  .icon-3 {
    width: 32px !important;
  }
  .carousel-icon-text {
    flex-wrap: wrap;
  }
}

@media (max-width: 600px) {
  .text-carousel-content h2 {
    font-size: 20px;
  }

  .slide {
    margin: 0px 0px 50px;
  }

  .carousel-item img {
    display: none;
  }

  .carousel-icon img {
    display: block;
  }

  .text-carousel-content {
    width: 500px;
    margin: 0px;
    padding: 20px;
  }

  .content-wrapper {
    padding: 0px;
  }
}
</style>
