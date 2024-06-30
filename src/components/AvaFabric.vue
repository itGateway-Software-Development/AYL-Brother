<template>
  <div class="ab-fabric">
    <div
      class="heading text-center"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <div class="justify-content-center container content-wrapper mt-5">
        <div class="fabric-heading text-start">
          <h2>Product Series</h2>
        </div>
        <div class="row px-2">
          <div class="col-4 item-col">
            <div class="product-series">
              <div class="item">
                <router-link to="/product"
                  ><img src="../assets/Picture1.png" class="img-fluid" alt=""
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
                  ><img src="../assets/Picture2.png" class="img-fluid" alt=""
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
                  <img src="../assets/Picture3.png" class="img-fluid" alt=""
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

<style>
.ab-fabric {
  margin: 80px 0;
}

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
  cursor: pointer;
  justify-content: center;
}

.p-btn {
  width: 200px;
  border: 1px solid red;
  border-radius: 50px;
  text-align: center;
  justify-content: center;
  margin: 10px 100px;
}
.p-btn p {
  padding: 0px 5px;
}

.p-btn:hover {
  background: red;
  color: #ffffff;
}

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

  .p-btn {
    margin: 10px 20px;
  }

  .b-text {
    padding: 0px 20px;
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
    height: 300px;
  }

  /* .item-text {
    display: none;
  } */

  .p-btn {
    margin: 10px 120px;
  }
}
</style>
