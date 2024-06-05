<template>
  <div class="detail">
    <div class="container content-wrapper">
      <div class="row">
        <div class="col-6 left-photo">
          <div class="d-flex">
            <div class="mini-photo p-2">
              <img
                src="../../assets/product/a.jpg"
                class="img-fluid py-5"
                alt=""
              />
              <img
                src="../../assets/product/a.jpg"
                class="img-fluid py-5"
                alt=""
              />
              <img
                src="../../assets/product/a.jpg"
                class="img-fluid py-5"
                alt=""
              />
              <img
                src="../../assets/product/a.jpg"
                class="img-fluid py-5"
                alt=""
              />
            </div>
            <div class="max-photo p-2 mt-5">
              <img :src="product.img" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <div class="col-6 right-content">
          <div class="content-text text-start mt-5">
            <p class="code">Product Code: {{ product.code }}</p>
            <p>Color: {{ product.color }}</p>
            <p>Price: {{ product.price }}</p>
            <div class="size-guide d-flex justify-content-between">
              <p>Select your size</p>
              <p class="guide" @click="sizeGuide = !sizeGuide">Size Guide</p>
            </div>
            <div class="size-content" v-if="selectedSize">
              <p>
                Selected Size: <span>{{ selectedSize.sizedetail }}</span>
              </p>
            </div>
            <div class="size-list d-flex justify-content-start mt-3">
              <div
                class="size-card"
                id="size"
                v-for="size in sizes"
                :key="size.id"
                @click="selectSize(size)"
              >
                <p>{{ size.size }}</p>
              </div>
            </div>
            <div class="card-button-group mt-5">
              <div class="btn add-btn mb-3" @click="addToCart(product)">
                Add to Bag
              </div>
              <div class="btn wish-btn">Add to WishList</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const store = useStore();
    const productId = props.id;
    const products = computed(() => store.getters["products"]);
    const product = computed(() => {
      return store.getters.getProductById(productId);
    });
    const sizeGuide = ref(false);
    const selectedSize = ref(null);
    const selectSize = (size) => {
      selectedSize.value = size;
      // let colorsize = document.getElementById("size");
      // colorsize.classList.add("active");
    };
    const sizes = [
      {
        id: 1,
        size: "M",
        sizedetail: "Medium",
      },
      {
        id: 2,
        size: "L",
        sizedetail: "Large",
      },
      {
        id: 3,
        size: "XL",
        sizedetail: "X Large",
      },
      {
        id: 4,
        size: "XXL",
        sizedetail: "XXL",
      },
    ];
    return { product, sizeGuide, sizes, selectSize, selectedSize };
  },
};
</script>

<style scoped>
.detail {
  margin: 150px 0px;
}

.mini-photo {
  width: 100px;
  height: max-content;
  object-fit: cover;
}

.max-photo {
  width: 500px;
  height: 500px;
}

.content-text {
  font-family: "Kanit", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 24px;
  line-height: 45px;
}

.size-guide {
  padding: 0px 145px 0px 0px;
}

.size-guide p {
  font-family: "Kanit", sans-serif;
  font-weight: 200;
  font-style: italic;
}

.guide {
  text-decoration: underline;
  cursor: pointer;
}

.content-text h4 {
  font-weight: 200;
}

.size-img {
  width: 100%;
  position: absolute;
  top: 50;
  left: 50;
  transform: translate(-50%, -50%);
  background-color: rgba(1, 1, 1, 0.5);
}

.size-card {
  width: 100px;
  border: 1px solid #111;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  margin: 0px 30px 0px 0px;
}

.size-card:hover {
  background: red;
  color: #fff;
}

.size-card.active {
  background: red;
  color: #fff;
}

.size-content p {
  font-family: "Kanit", sans-serif;
  font-weight: 200;
  font-style: italic;
}

.size-content p span {
  color: red;
}

.add-btn,
.wish-btn {
  width: 490px;
  font-size: 24px;
}
</style>
