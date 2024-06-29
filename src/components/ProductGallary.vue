<template>
  <div class="product-gallary">
    <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
      <h2 class="fs-3 text-center mt-4 mb-4 fw-bold">Product Grallary</h2>
      <swiper
        :slidesPerView="6"
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          ><div class="gallary-photo">
            <img src="../assets/product/5002/A.jpg" alt="" class="img-fluid" />
            <p class="text-center">
              Spandex Series <br />
              5002
            </p>
          </div></swiper-slide
        >
        <swiper-slide
          ><div class="gallary-photo">
            <img src="../assets/product/5003/4.jpg" alt="" class="img-fluid" />
            <p class="text-center">
              Spandex Series <br />
              5003
            </p>
          </div></swiper-slide
        ><swiper-slide
          ><div class="gallary-photo">
            <img src="../assets/product/5012/1.jpg" alt="" class="img-fluid" />
            <p class="text-center">
              Spandex Series <br />
              5012
            </p>
          </div></swiper-slide
        >
        <swiper-slide
          ><div class="gallary-photo">
            <img src="../assets/product/5013/5.jpg" alt="" class="img-fluid" />
            <p class="text-center">
              Spandex Series <br />
              5013
            </p>
          </div></swiper-slide
        ><swiper-slide
          ><div class="gallary-photo">
            <img src="../assets/product/8003/2.jpg" alt="" class="img-fluid" />
            <p class="text-center">
              Bamboo Series <br />
              8003
            </p>
          </div></swiper-slide
        >
        <swiper-slide
          ><div class="gallary-photo">
            <img src="../assets/product/8004/9.jpg" alt="" class="img-fluid" />
            <p class="text-center">
              Bamboo Series <br />
              8004
            </p>
          </div></swiper-slide
        ><swiper-slide
          ><div class="gallary-photo">
            <img src="../assets/product/8017/9.jpg" alt="" class="img-fluid" />
            <p class="text-center">
              Bamboo Series <br />
              8017
            </p>
          </div></swiper-slide
        >
        <swiper-slide
          ><div class="gallary-photo">
            <img src="../assets/product/8018/3.jpg" alt="" class="img-fluid" />
            <p class="text-center">
              Bamboo Series <br />
              8018
            </p>
          </div></swiper-slide
        ><swiper-slide
          ><div class="gallary-photo">
            <img src="../assets/product/8027/20.jpg" alt="" class="img-fluid" />
            <p class="text-center">
              Bamboo Series <br />
              8027
            </p>
          </div></swiper-slide
        >
        <swiper-slide
          ><div class="gallary-photo">
            <img src="../assets/product/8028/20.jpg" alt="" class="img-fluid" />
            <p class="text-center">
              Bamboo Series <br />
              8028
            </p>
          </div></swiper-slide
        >
        <swiper-slide
          ><div class="gallary-photo">
            <img src="../assets/product/8076/g.jpg" alt="" class="img-fluid" />
            <p class="text-center">
              Modal Series <br />
              8076
            </p>
          </div></swiper-slide
        >
        <swiper-slide
          ><div class="gallary-photo">
            <img src="../assets/product/8077/1.jpg" alt="" class="img-fluid" />
            <p class="text-center">
              Modal Series <br />
              8077
            </p>
          </div></swiper-slide
        >
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style>
.photo-gallary {
  margin: 50px auto;
}

.gallary-photo img {
  width: 150px;
}

.mySwiper {
  height: 300px;
  margin-bottom: 30px;
  padding: 20px;
}

.swiper-pagination {
  top: 90% !important;
}

.swiper-slide {
  margin-right: 0px;
}

.swiper-button-prev,
.swiper-button-next {
  color: #000;
}

.swiper-button-next {
  margin-right: 20px;
}
.swiper-button-prev {
  margin-left: 20px;
}

@media (max-width: 1200px) {
  .swiper-button-next {
    margin: 0;
  }
  .swiper-button-prev {
    margin: 0;
  }
}

@media (max-width: 1024px) {
  .swiper-button-prev {
    display: none !important;
  }
  .swiper-button-next {
    display: none !important;
  }
}

@media (max-width: 500px) {
  .mySwiper {
    height: 250px;
    padding: 0;
  }

  .swiper-slide {
    width: 110px !important;
  }
  .swiper-button-prev {
    display: none !important;
  }
  .swiper-button-next {
    display: none !important;
  }
}
</style>
