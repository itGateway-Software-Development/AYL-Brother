<template>
  <div class="ab-fabric">
    <div class="heading text-center">
      <div class="justify-content-center content-wrapper mt-5 ab-fabrics">
        <div class="fabric-heading text-center">
          <h2>Product Series</h2>
        </div>
        <div class="row ab-row">
          <div class="col-4 item-col">
            <div class="product-series">
              <div class="item">
                <router-link to="/product"
                  ><img
                    src="../assets/mini-photo/3.jpg"
                    class="img-fluid"
                    alt=""
                /></router-link>
              </div>
              <div class="item-text text-start">
                <router-link to="/products/bamboo/0" class="nav-link"
                  ><button class="btn p-btn d-flex align-items-center">
                    <p>Bamboo Fiber Series</p>
                    <i class="fa-solid fa-arrow-right"></i></button
                ></router-link>
                <p class="b-text">
                  2 pcs in 1 box with color pair and over 10 color pairs to
                  choose
                </p>
              </div>
            </div>
          </div>
          <div class="col-4 item-col">
            <div class="product-series">
              <div class="item">
                <router-link to="/product"
                  ><img
                    src="../assets/mini-photo/1.jpg"
                    class="img-fluid"
                    alt=""
                /></router-link>
              </div>
              <div class="item-text text-start">
                <router-link to="/products/lycra/0" class="nav-link"
                  ><button class="btn p-btn d-flex align-items-center">
                    <p>Lycra Modal Series</p>
                    <i class="fa-solid fa-arrow-right"></i></button
                ></router-link>
                <p class="b-text">
                  2 pcs in 1 box with color pair and over 10 color pairs to
                  choose
                </p>
              </div>
            </div>
          </div>
          <div class="col-4 item-col">
            <div class="product-series">
              <div class="item">
                <router-link to="/product">
                  <img
                    src="../assets/mini-photo/6.jpg"
                    class="img-fluid"
                    alt=""
                /></router-link>
              </div>
              <div class="item-text text-start">
                <router-link to="/products/spandex/0" class="nav-link"
                  ><button class="btn p-btn d-flex align-items-center">
                    <p>Spandex Series</p>
                    <i class="fa-solid fa-arrow-right"></i></button
                ></router-link>
                <p class="b-text">
                  2 pcs in 1 box with color pair and over 10 color pairs to
                  choose
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-5 more-p">
          <router-link class="nav-link" to="/product"
            ><h4>See more products</h4></router-link
          >
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

<style scoped>
.ab-fabric {
  margin: 80px 0;
  background: var(--background-color);
  color: var(--font-color);
}

.ab-fabrics {
  width: 100%;
}

.content-wrapper {
  padding: 0px 9%;
}

.fabric-heading {
  margin: 40px 0px;
}

.d-1 {
  overflow: hidden;
}

.d-2 {
  display: none;
}

.item img {
  object-fit: cover;
  width: 420px;
  border-radius: 6px;
}

.item-text {
  margin: 10px 0px;
  cursor: pointer;
  justify-content: center;
}

.p-btn {
  position: relative;
  margin: 20px auto;
  width: 220px;
  justify-content: center;
  color: #111;
  background: red;
  border: 2px solid red;
  z-index: 1;
  transition: 1s;
}

.p-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: -1;
  transform-origin: left;
  transition: transform 1s ease;
  transform: scaleX(1);
  border-radius: 4px;
}

.p-btn:hover {
  color: #fff;
  background: red;
}

.p-btn:hover::before {
  transform-origin: right;
  transition: transform 0.5s ease;
  transform: scaleX(0);
}

.p-btn p {
  padding: 0px 5px;
}

/* .p-btn:hover {
  background: red;
  color: #ffffff;
} */

.b-text {
  padding: 0px 50px;
}

.product-heading {
  text-decoration: underline;
}

.more-p {
  text-decoration: underline;
  font-family: "Chakra Petch", sans-serif;
  font-weight: 700;
  font-style: normal;
}

@media (max-width: 1600px) {
}

@media (max-width: 1400px) {
  .content-wrapper {
    padding: 0px 7%;
  }
}

@media (max-width: 1280px) {
  .item img {
    width: 400px;
    height: 400px;
  }
  .p-col-2 h1 {
    font-size: 20px;
  }

  .content-wrapper {
    padding: 0px 3%;
  }
}

@media (max-width: 1024px) {
  .left-items {
    padding: 0 40px;
  }

  .item img {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 860px) {
  .p-col-2 {
    width: 100%;
  }
  .p-col-2 h1 {
    font-size: 20px;
  }

  .item img {
    width: auto;
    height: auto;
  }

  .b-text {
    padding: 0px 10px;
  }

  .ab-fabric {
    margin-top: 0px;
    margin-bottom: 80px;
  }
}

@media (max-width: 600px) {
  .p-col-2 h1 {
    font-size: 20px;
  }
  .item-col {
    width: 100%;
    margin: 20px 0px;
  }

  .item img {
    width: 400px;
    height: auto;
  }

  /* .item-text {
    display: none;
  } */

  .fabric-heading {
    margin: 20px 0px;
  }
}

@media (max-width: 400px) {
}
</style>
