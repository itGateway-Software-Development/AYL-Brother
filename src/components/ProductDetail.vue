<template>
  <div class="mt-5">
    <div class="heading text-center">
      <h1>Product Detail</h1>
    </div>
    <div class="d-1 container content-wrapper">
      <div class="row">
        <div class="col-6 left-section p-5">
          <div class="row justify-content-center">
            <div class="col-6 left-items d-flex-column">
              <div class="item-1" @click="ChangeContent1">
                <img
                  src="../assets/pdetail/bamboo.jpg"
                  alt="photo"
                  class="p-detail-img img-fluid w-100"
                />
              </div>
              <div class="item-2" @click="ChangeContent2">
                <img
                  src="../assets/pdetail/spandex.jpg"
                  alt="photo"
                  class="p-detail-img img-fluid"
                />
              </div>
            </div>
            <div class="col-6 right-item">
              <div class="item-3" @click="ChangeContent3">
                <img
                  src="../assets/pdetail/modal.jpg"
                  alt="photo"
                  class="p-detail-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 right-section mt-5">
          <div class="content-1" v-if="content1">
            <h2 class="text-center product-heading mb-4">
              Bamboo Fiber Series
            </h2>
            <p class="text-start mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores rem sit minus necessitatibus dolor ex blanditiis,
              facere voluptatem sed atque perferendis quis eius vel deserunt
              explicabo neque. Quae et error deserunt aut laudantium numquam
              voluptas expedita, tempore provident cum maxime dolor, saepe
              voluptatibus praesentium vel.
            </p>
            <div class="text-start">
              <button class="btn shopnow-button">SHOP NOW</button>
            </div>
          </div>

          <div class="content-1" v-if="content2">
            <h2 class="text-center product-heading mb-4">Lycra Modal Series</h2>
            <p class="text-start mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores rem sit minus necessitatibus dolor ex blanditiis,
              facere voluptatem sed atque perferendis quis eius vel deserunt
              explicabo neque. Quae et error deserunt aut laudantium numquam
              voluptas expedita, tempore provident cum maxime dolor, saepe
              voluptatibus praesentium vel.
            </p>
            <div class="text-start">
              <button class="btn shopnow-button">SHOP NOW</button>
            </div>
          </div>

          <div class="content-1" v-if="content3">
            <h2 class="text-center product-heading mb-4">
              Lycra Spandex Series
            </h2>
            <p class="text-start mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores rem sit minus necessitatibus dolor ex blanditiis,
              facere voluptatem sed atque perferendis quis eius vel deserunt
              explicabo neque. Quae et error deserunt aut laudantium numquam
              voluptas expedita, tempore provident cum maxime dolor, saepe
              voluptatibus praesentium vel.
            </p>
            <div class="text-start">
              <button class="btn shopnow-button">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-2 container content-wrapper mt-5">
      <div class="d-flex-column">
        <div class="p-list">
          <div class="d-flex m-list">
            <div class="item-1" @click="ChangeContent1">
              <img
                src="../assets/pdetail/bamboo.jpg"
                alt="photo"
                class="p-detail-img img-fluid w-100"
              />
            </div>
            <div class="item-2" @click="ChangeContent2">
              <img
                src="../assets/pdetail/spandex.jpg"
                alt="photo"
                class="p-detail-img img-fluid"
              />
            </div>
            <div class="item-3" @click="ChangeContent3">
              <img
                src="../assets/pdetail/modal.jpg"
                alt="photo"
                class="p-detail-img img-fluid"
              />
            </div>
          </div>
        </div>
        <div class="contet-list mt-5">
          <div class="content-1" v-if="content1">
            <h2 class="text-center product-heading mb-3">
              Bamboo Fiber Series
            </h2>
            <p class="text-center mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores rem sit minus necessitatibus dolor ex blanditiis,
              facere voluptatem sed atque perferendis quis eius vel deserunt
              explicabo neque. Quae et error deserunt aut laudantium numquam
              voluptas expedita, tempore provident cum maxime dolor, saepe
              voluptatibus praesentium vel.
            </p>
            <div class="text-center">
              <button class="btn shopnow-button">SHOP NOW</button>
            </div>
          </div>

          <div class="content-1" v-if="content2">
            <h2 class="text-center product-heading mb-4">Lycra Modal Series</h2>
            <p class="text-center mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores rem sit minus necessitatibus dolor ex blanditiis,
              facere voluptatem sed atque perferendis quis eius vel deserunt
              explicabo neque. Quae et error deserunt aut laudantium numquam
              voluptas expedita, tempore provident cum maxime dolor, saepe
              voluptatibus praesentium vel.
            </p>
            <div class="text-center">
              <button class="btn shopnow-button">SHOP NOW</button>
            </div>
          </div>

          <div class="content-1" v-if="content3">
            <h2 class="text-center product-heading mb-4">
              Lycra Spandex Series
            </h2>
            <p class="text-center mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores rem sit minus necessitatibus dolor ex blanditiis,
              facere voluptatem sed atque perferendis quis eius vel deserunt
              explicabo neque. Quae et error deserunt aut laudantium numquam
              voluptas expedita, tempore provident cum maxime dolor, saepe
              voluptatibus praesentium vel.
            </p>
            <div class="text-center">
              <button class="btn shopnow-button">SHOP NOW</button>
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

.item-1,
.item-2,
.item-3 {
  width: 200px;
  height: 180px;
  border: 1px solid black;
  cursor: pointer;
  overflow: hidden;
}

.p-detail.img {
  object-fit: cover;
  width: 100%;
  height: 180px;
}

.item-1 {
  margin-bottom: 100px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
}
.item-2 {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.item-3 {
  margin-top: 120px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
}
.left-items {
  padding: 0px 60px;
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
  .item-1,
  .item-2,
  .item-3 {
    width: 130px;
    height: 130px;
  }
  .item-3 {
    margin-top: 100px;
  }
  .left-items {
    padding: 0 10px;
  }
}

@media (max-width: 500px) {
  .d-1 {
    display: none;
  }

  .d-2 {
    display: block;
  }

  .item-1,
  .item-2,
  .item-3 {
    margin: 0;
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }

  .m-list {
    justify-content: space-around;
  }

  .shopnow-button {
    width: 150px !important;
    height: 40px !important;
    font-size: 16px;
    border-radius: 5px !important;
  }
}
</style>
