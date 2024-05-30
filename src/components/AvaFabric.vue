<template>
  <div class="mb-5">
    <div
      class="heading text-center"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <div class="row align-items-center justify-content-center">
        <div class="col-4 line"><hr /></div>
        <div class="col-3 p-col-2"><h1>Avaliable Fabric</h1></div>
        <div class="col-4 line"><hr /></div>
      </div>
    </div>
    <div class="justify-content-center container content-wrapper mt-5">
      <div class="row px-2">
        <div class="col-4 item-col">
          <div class="product-series">
            <div class="item">
              <router-link to="/product"
                ><img
                  src="../assets/pdetail/bamboo.jpg"
                  class="img-fluid"
                  alt=""
              /></router-link>
            </div>
            <div class="item-text text-start">
              <router-link to="/product" class="nav-link"
                ><p>Bamboo Fiber Series</p></router-link
              >
            </div>
          </div>
        </div>
        <div class="col-4 item-col">
          <div class="product-series">
            <div class="item">
              <router-link to="/product"
                ><img
                  src="../assets/pdetail/modal.jpg"
                  class="img-fluid"
                  alt=""
              /></router-link>
            </div>
            <div class="item-text text-start">
              <router-link to="product" class="nav-link"
                ><p>Lycra Modal Series</p></router-link
              >
            </div>
          </div>
        </div>
        <div class="col-4 item-col">
          <div class="product-series">
            <div class="item">
              <router-link to="/product">
                <img
                  src="../assets/pdetail/spandex.jpg"
                  class="img-fluid"
                  alt=""
              /></router-link>
            </div>
            <div class="item-text text-start">
              <router-link to="/product" class="nav-link"
                ><p>Spandex Series</p></router-link
              >
            </div>
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
    let content1 = ref(true);
    let content2 = ref(false);
    let content3 = ref(false);

    let ChangeContent1 = () => {
      content1.value = true;
      content2.value = false;
      content3.value = false;
    };

    let ChangeContent2 = () => {
      content1.value = false;
      content2.value = true;
      content3.value = false;
    };

    let ChangeContent3 = () => {
      content1.value = false;
      content2.value = false;
      content3.value = true;
    };

    return {
      content1,
      content2,
      content3,
      ChangeContent1,
      ChangeContent2,
      ChangeContent3,
    };
  },
};
</script>

<style>
.d-1 {
  overflow: hidden;
}

.d-2 {
  display: none;
}

.item img {
  width: 500px;
  height: 400px;
  object-fit: cover;
}

.item-text {
  margin: 10px 0px;
  text-decoration: underline;
  cursor: pointer;
}

.item-text:hover {
  color: red;
}

.product-heading {
  text-decoration: underline;
}

@media (max-width: 1200px) {
  .item img {
    height: 250px;
  }
  .p-col-2 h1 {
    font-size: 20px;
  }
}

@media (max-width: 1024px) {
  .left-items {
    padding: 0 40px;
  }
}

@media (max-width: 800px) {
  .p-col-2 {
    width: 100%;
  }
  .p-col-2 h1 {
    font-size: 20px;
  }

  .item img {
    height: 200px;
  }
}

@media (max-width: 500px) {
  .p-col-2 h1 {
    font-size: 20px;
  }
  .item-col {
    width: 100%;
    margin: 20px 0px;
  }

  .item img {
    height: max-content;
  }

  .item-text {
    display: none;
  }
}
</style>
