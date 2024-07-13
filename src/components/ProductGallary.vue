<template>
  <div class="product-gallary">
    <div class="photo-list">
      <div class="photo-slider">
        <div class="photo-card">
          <img src="../assets/product/5002/A.jpg" alt="" />
          <p class="text-center">Spandex Series</p>
          <p class="text-center">5002</p>
        </div>
        <div class="photo-card">
          <img src="../assets/product/5003/1.jpg" alt="" />
          <p class="text-center">Spandex Series</p>
          <p class="text-center">5003</p>
        </div>
        <div class="photo-card">
          <img src="../assets/product/5012/1.jpg" alt="" />
          <p class="text-center">Spandex Series</p>
          <p class="text-center">5012</p>
        </div>
        <div class="photo-card">
          <img src="../assets/product/5013/1.jpg" alt="" />
          <p class="text-center">Spandex Series</p>
          <p class="text-center">5013</p>
        </div>
        <div class="photo-card">
          <img src="../assets/product/8003/1.jpg" alt="" />
          <p class="text-center">Bamboo Series</p>
          <p class="text-center">8003</p>
        </div>
        <div class="photo-card">
          <img src="../assets/product/8004/1.jpg" alt="" />
          <p class="text-center">Bamboo Series</p>
          <p class="text-center">8004</p>
        </div>
        <div class="photo-card">
          <img src="../assets/product/8017/1.jpg" alt="" />
          <p class="text-center">Bamboo Series</p>
          <p class="text-center">8017</p>
        </div>
        <div class="photo-card">
          <img src="../assets/product/8018/9.jpg" alt="" />
          <p class="text-center">Bamboo Series</p>
          <p class="text-center">8018</p>
        </div>
        <div class="photo-card">
          <img src="../assets/product/8027/20.jpg" alt="" />
          <p class="text-center">Bamboo Series</p>
          <p class="text-center">8027</p>
        </div>
        <div class="photo-card">
          <img src="../assets/product/8028/20.jpg" alt="" />
          <p class="text-center">Bamboo Series</p>
          <p class="text-center">8028</p>
        </div>
        <div class="photo-card">
          <img src="../assets/product/8076/I.jpg" alt="" />
          <p class="text-center">Modal Series</p>
          <p class="text-center">8076</p>
        </div>
        <div class="photo-card">
          <img src="../assets/product/8077/7.jpg" alt="" />
          <p class="text-center">Modal Series</p>
          <p class="text-center">8077</p>
        </div>
      </div>
      <div class="photo-slider">
        <div class="photo-card">
          <img src="../assets/product/5002/A.jpg" alt="" />
          <p class="text-center">Spandex Series</p>
          <p class="text-center">5002</p>
        </div>
        <div class="photo-card">
          <img src="../assets/product/5003/1.jpg" alt="" />
          <p class="text-center">Spandex Series</p>
          <p class="text-center">5003</p>
        </div>
        <div class="photo-card">
          <img src="../assets/product/5012/1.jpg" alt="" />
          <p class="text-center">Spandex Series</p>
          <p class="text-center">5012</p>
        </div>
        <div class="photo-card">
          <img src="../assets/product/5013/1.jpg" alt="" />
          <p class="text-center">Spandex Series</p>
          <p class="text-center">5013</p>
        </div>
        <div class="photo-card">
          <img src="../assets/product/8003/1.jpg" alt="" />
          <p class="text-center">Bamboo Series</p>
          <p class="text-center">8003</p>
        </div>
        <div class="photo-card">
          <img src="../assets/product/8004/1.jpg" alt="" />
          <p class="text-center">Bamboo Series</p>
          <p class="text-center">8004</p>
        </div>
        <div class="photo-card">
          <img src="../assets/product/8017/1.jpg" alt="" />
          <p class="text-center">Bamboo Series</p>
          <p class="text-center">8017</p>
        </div>
        <div class="photo-card">
          <img src="../assets/product/8018/9.jpg" alt="" />
          <p class="text-center">Bamboo Series</p>
          <p class="text-center">8018</p>
        </div>
        <div class="photo-card">
          <img src="../assets/product/8027/20.jpg" alt="" />
          <p class="text-center">Bamboo Series</p>
          <p class="text-center">8027</p>
        </div>
        <div class="photo-card">
          <img src="../assets/product/8028/20.jpg" alt="" />
          <p class="text-center">Bamboo Series</p>
          <p class="text-center">8028</p>
        </div>
        <div class="photo-card">
          <img src="../assets/product/8076/I.jpg" alt="" />
          <p class="text-center">Modal Series</p>
          <p class="text-center">8076</p>
        </div>
        <div class="photo-card">
          <img src="../assets/product/8077/7.jpg" alt="" />
          <p class="text-center">Modal Series</p>
          <p class="text-center">8077</p>
        </div>
      </div>
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
.product-gallary {
  margin: 100px auto 50px;
  color: var(--font-color);
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.photo-list {
  overflow: hidden;
  display: flex;
}

.photo-slider {
  display: flex;
  animation: 25s slide infinite linear;
}

.photo-card {
  width: max-content;
  padding: 12px;
  margin: 0px 50px;
}

.photo-card img {
  height: 180px;
}

.photo-card p {
  font-size: 20px;
  font-weight: 500;
  padding-top: 5px;
}

.photo-list:hover .photo-slider {
  animation-play-state: paused;
}

/* @media (max-width: 860px) {
  .photo-card img {
    width: 150px;
    height: 100px;
  }
} */

@media (max-width: 500px) {
  .photo-card {
    margin: 0px 20px;
  }
}
</style>
