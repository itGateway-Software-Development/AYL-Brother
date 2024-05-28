<template>
  <div class="mt-5 mb-5">
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
    <div class="d-1 container content-wrapper mt-5">
      <div class="row">
        <div class="col-4">
          <div class="product-series">
            <div class="item">
              <img
                src="../assets/pdetail/bamboo.jpg"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="item-text text-start">
              <router-link to="#" class="nav-link"
                ><p>Bamboo Fiber Series</p></router-link
              >
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="product-series">
            <div class="item">
              <img src="../assets/pdetail/modal.jpg" class="img-fluid" alt="" />
            </div>
            <div class="item-text text-start">
              <router-link to="#" class="nav-link"
                ><p>Lycra Modal Series</p></router-link
              >
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="product-series">
            <div class="item">
              <img
                src="../assets/pdetail/spandex.jpg"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="item-text text-start">
              <router-link to="#" class="nav-link"
                ><p>Spandex Series</p></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="d-2 container content-wrapper mt-5"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <div class="d-flex-column">
        <div class="p-series">
          <router-link to="#"
            ><div class="item">
              <img
                src="../assets/pdetail/bamboo.jpg"
                class="img-fluid"
                alt=""
              /></div
          ></router-link>
        </div>
        <div class="p-series">
          <router-link to="#"
            ><div class="item">
              <img
                src="../assets/pdetail/modal.jpg"
                class="img-fluid"
                alt=""
              /></div
          ></router-link>
        </div>
        <div class="p-series">
          <router-link to="#"
            ><div class="item">
              <img
                src="../assets/pdetail/spandex.jpg"
                class="img-fluid"
                alt=""
              /></div
          ></router-link>
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
  width: 550px;
  height: 450px;
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
  .item-1,
  .item-2,
  .item-3 {
    width: 150px;
    height: 150px;
  }
  .item-1 {
    margin-bottom: 80px;
  }
  .item-3 {
    margin-top: 90px;
  }
  .left-items {
    padding: 0 70px;
  }
}

@media (max-width: 1024px) {
  .left-items {
    padding: 0 40px;
  }
}

@media (max-width: 800px) {
  .line {
    width: 28.5%;
  }
  .col-3 {
    width: 33%;
  }
  .d-1 {
    display: none;
  }
  .d-2 {
    display: block;
  }
  .item img {
    width: max-content;
  }
  .p-series {
    width: max-content;
    margin: 10px auto;
  }
}

@media (max-width: 500px) {
  .d-1 {
    display: none;
  }

  .d-2 {
    display: block;
  }

  .item img {
    width: 380px;
    height: 250px;
    object-fit: cover;
  }
  .line {
    width: 18%;
  }
  .col-3 {
    width: 55%;
  }
}
</style>
