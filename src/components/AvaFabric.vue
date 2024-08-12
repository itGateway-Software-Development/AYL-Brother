<template>
  <div class="ab-fabric">
    <div class="heading text-center">
      <div class="justify-content-center content-wrapper mt-5 ab-fabrics">
        <div class="fabric-heading text-center">
          <h2>Product Series</h2>
        </div>
        <div class="row fabric-row">
          <div class="col-4 item-col" v-for="item in categories" :key="item.id">
            <div class="product-series">
              <div class="item">
                <router-link :to="`/products/${item.id}`"
                  ><img :src="item.image" class="img-fluid" alt=""
                /></router-link>
              </div>
              <div class="item-text text-start">
                <router-link :to="`/products/${item.id}`" class="nav-link"
                  ><button class="btn p-btn d-flex align-items-center">
                    <p>{{ item.name }}</p>
                    <i class="fa-solid fa-arrow-right"></i></button
                ></router-link>
                <p class="b-text">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- <div class="col-4 item-col">
            <div class="product-series">
              <div class="item">
                <router-link to="/products/bamboo/0"
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
                <router-link to="/products/lycra/0"
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
                <router-link to="/products/spandex/0">
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
          </div> -->
        </div>

        <div class="text-center mt-5 more-p">
          <router-link class="nav-link see-more" to="/products"
            ><h4>See more products <i class="fa-solid fa-angles-right"></i></h4>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import getCategories from "../composable/getCategories";
export default {
  setup() {
    let category = ref([]);

    let { categories, err, getData } = getCategories();

    category.value = categories;

    onMounted(() => {
      getData();
      // console.log(categories.value);
    });

    return {
      categories,
      err,
      category,
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
  padding: 0px 8%;
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
  border: 1px solid #b7b7b7;
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
  transition: transform 0.5s ease-out;
  transform: scaleX(1);
  border-radius: 4px;
}

.p-btn:hover {
  color: #fff;
  background: red;
}

.p-btn:hover::before {
  transform-origin: right;
  transition: transform 0.5s ease-in;
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
  font-family: "Chakra Petch", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.see-more {
  width: auto;
  padding: 10px 10px;
  display: block;
  margin: 0px auto;
  position: relative;
  overflow: hidden;
  transition: 400ms;

  border-radius: 50px;
}

.see-more h4 {
  margin: 0px;
}

.see-more:hover {
  color: red;
  width: auto;
  padding-right: 20px;
}

.see-more .fa-solid {
  position: absolute;
  font-size: 14px;
  top: 39%;
  margin-left: 10px;
  transform: translateX(-60%);
  opacity: 0;
  transition: 0.5s;
}

.see-more:hover .fa-solid {
  opacity: 1;
  color: red;
  transform: translateX(0);
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
    width: 100%;
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
    width: 50%;
    margin: 20px 0px;
  }

  .item img {
    width: 200px;
    height: auto;
  }

  /* .item-text {
    display: none;
  } */

  .fabric-heading {
    margin: 20px 0px;
  }

  .fabric-row {
    align-content: center;
    justify-content: center;
  }

  .p-btn {
    font-size: 12px !important;
    width: 160px;
  }
}

@media (max-width: 400px) {
}
</style>
