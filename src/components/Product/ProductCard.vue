<template>
  <div class="product-card">
    <div class="row">
      <div
        class="col-12 col-md-4 col-sm-12 mb-3"
        v-for="product in data"
        :key="product.id"
      >
        <div class="p-card">
          <div class="upper-card">
            <div class="img">
              <img :src="product.img" alt="" />
            </div>
            <div class="modified-text">
              <p>12000MMK</p>
            </div>
            <div class="img-icon">
              <div class="icon-s">
                <p class="modified-icon">
                  <span class="material-symbols-outlined heart">
                    favorite
                  </span>
                </p>
              </div>
              <div class="icon-s">
                <p class="modified-icon">
                  <span class="material-symbols-outlined bag">
                    shopping_bag
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="lower-card text-start">
            <h5>Romantic Underwear</h5>
            <div class="color-hover">
              <p class="color-hover-text">+4 Color</p>
              <div class="d-flex color-control" id="color">
                <div class="circle-color color-red"></div>
                <div class="circle-color color-green"></div>
                <div class="circle-color color-royalblue"></div>
                <div class="circle-color color-dark"></div>
              </div>
            </div>
            <div class="rating d-flex me-1">
              <span class="material-symbols-outlined"> star_rate </span>
              <span class="material-symbols-outlined"> star_rate </span>
              <span class="material-symbols-outlined"> star_rate </span>
              <span class="material-symbols-outlined"> star_rate </span>
              <span class="material-symbols-outlined"> star_rate </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const data = [
      {
        id: 1,
        img: require("@/assets/product/b.jpg"),
      },
      {
        id: 2,
        img: require("@/assets/product/b.jpg"),
      },
      {
        id: 3,
        img: require("@/assets/product/b.jpg"),
      },
      {
        id: 4,
        img: require("@/assets/product/b.jpg"),
      },
      {
        id: 5,
        img: require("@/assets/product/b.jpg"),
      },
      {
        id: 6,
        img: require("@/assets/product/b.jpg"),
      },
      {
        id: 7,
        img: require("@/assets/product/b.jpg"),
      },
    ];

    return { data };
  },
};
</script>

<style>
.upper-card {
  position: relative;
}

.img img {
  width: 300px;
  position: relative;
  border-radius: 10px;
}

.img-icon {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  opacity: 1;
  transition: 0.6s;
  overflow: hidden;
  top: 0;
}

.icon-s {
  margin-top: 10px;
  margin-bottom: 300px;
  margin-left: 250px;
  cursor: pointer;
}

.heart {
  padding: 5px 0;
  color: #fff;
}
.bag {
  padding: 4px 0;
  color: #fff;
}

.modified-text {
  position: absolute;
  bottom: 0;
  background: #fff;
  margin-left: 20px;
  transition: 0.5 ease;
}
.modified-text p {
  padding: 3px;
}
.upper-card:hover .modified-text {
  margin-bottom: 5px;
  border: 1px solid #111111;
  transition: 0.5 ease;
}

.lower-card h5 {
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.color-hover {
  margin-top: -5px;
}

.color-hover p {
  opacity: 1;
  cursor: pointer;
  transition: 0.5 ease-in;
}

.circle-color {
  width: 30px;
  height: 30px;
  border: 1px solid #111111;
  border-radius: 50px;
  cursor: pointer;
  margin: -25px 4px 0px 0px;
  opacity: 0;
  transition: 0.5s ease-out;
}
.color-red {
  background: red;
}

.color-green {
  background: #00ff00;
}

.color-royalblue {
  background: #4169e1;
}

.color-dark {
  background: #111111;
}

.color-hover:hover .circle-color {
  opacity: 1;
}

.color-hover:hover .color-hover-text {
  opacity: 0;
}

.rating .material-symbols-outlined {
  color: gold;
}
</style>
