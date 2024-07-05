<template>
  <div class="detail">
    <div class="container content-wrapper">
      <div
        class="modal"
        tabindex="-1"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Size Guide</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <img src="../../assets/size.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="row main-content">
        <div class="col-6 left-photo">
          <div class="d-flex photo-flex">
            <div class="mini-photo p-2">
              <img
                v-for="image in miniImages"
                :key="image.id"
                :src="image.url"
                class="img-fluid py-5 p-img nav-link"
                :class="{ active: tab === image.id }"
                alt=""
                @click="updateTab(image.id, image.url)"
              />

              <!-- <img
                src="../../assets/product/a.jpg"
                class="img-fluid py-5 p-img nav-link"
                :class="{ active: tab == 'p-1' }"
                alt=""
                @click="tab = 'p-1'"
              />

              <img
                src="../../assets/product/a.jpg"
                class="img-fluid py-5 p-img nav-link"
                alt=""
                :class="{ active: tab == 'p-2' }"
                @click="tab = 'p-2'"
              />

              <img
                src="../../assets/product/a.jpg"
                class="img-fluid py-5 p-img nav-link"
                alt=""
                :class="{ active: tab == 'p-3' }"
                @click="tab = 'p-3'"
              />
              <img
                src="../../assets/product/a.jpg"
                class="img-fluid py-5 p-img nav-link"
                alt=""
                :class="{ active: tab == 'p-4' }"
                @click="tab = 'p-4'"
              /> -->
            </div>
            <div class="max-photo p-2 mt-5">
              <img :src="product.img" class="img-fluid d-none" alt="" />
              <img
                :src="mainImage"
                alt=""
                class="img-fluid"
                @mousemove="moveMagnifier"
                @mouseover="showMagnifier"
                @mouseout="hideMagnifier"
              />
              <div
                class="magnifier"
                ref="magnifier"
                v-show="isMagnifierVisible"
              ></div>
              <button @click="prevImage" class="prev-button">
                <i class="fa-solid fa-chevron-left"></i>
              </button>
              <button @click="nextImage" class="next-button">
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-6 right-content">
          <div class="content-text text-start mt-5">
            <p class="code">Product Code: {{ product.code }}</p>
            <p>Color: {{ product.color }}</p>
            <p>Price: {{ product.price }} MMK</p>
            <div class="size-guide d-flex justify-content-between">
              <p>Select your size</p>
              <p
                class="guide"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Size Guide
              </p>
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
            <div class="detail-size">
              <div class="size-detail">
                <div
                  class="d-flex justify-content-between align-items-center detail-p"
                >
                  <p>Details</p>
                  <span
                    class="material-symbols-outlined"
                    @click="detail_content = !detail_content"
                  >
                    keyboard_arrow_down
                  </span>
                </div>
                <div class="detail-content" v-if="detail_content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, corrupti rem nesciunt, vitae reprehenderit ea ipsa
                    praesentium porro explicabo aut veniam? Et soluta
                    repellendus vel sint aspernatur qui repudiandae minus ipsam
                    expedita exercitationem nulla delectus autem doloremque
                    consequatur quo tenetur in aliquid sequi animi veniam
                    ratione, dolorum itaque? Quis numquam laboriosam, tenetur
                  </p>
                </div>
              </div>
              <div class="size-detail">
                <div
                  class="d-flex justify-content-between align-items-center size-p"
                >
                  <p>Size & Fits</p>
                  <span class="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </div>
              </div>
            </div>
            <!-- <div class="delivery-option mt-5">
              <div class="delivery-heading d-flex align-items-center pt-3 px-3">
                <span class="material-symbols-outlined"> local_shipping </span>
                <p>Delivery & Return</p>
              </div>
              <div class="delivery-text px-3">
                <p>
                  Find out aboout our delivery options and how to exchange or
                  return
                </p>
              </div>
            </div> -->
          </div>
        </div>
        <hr class="mt-5" />
      </div>

      <div>
        <div class="also-like">
          <p class="text-start">You May Also Like</p>
        </div>
        <div class="row align-items-center card-list mt-5">
          <div
            class="col-6 col-md-3 col-sm-3 mb-3 detail-card-col"
            v-for="product in randomProducts"
            :key="product.id"
          >
            <div class="slice-card p-card mb-3">
              <router-link
                :to="{ name: 'productDetail', params: { id: product.id } }"
                class="product-link"
                @click="refreshProducts()"
              >
                <div class="card-img mb-2 border-img">
                  <img :src="product.img" class="img-fluid" alt="" />
                </div>
              </router-link>

              <div class="p-color text-center mb-2">
                <p>Color: {{ product.color }}</p>
              </div>
              <div class="card-content text-start">
                <p class="code">Product-code: {{ product.code }}</p>
                <p>{{ product.pics }}</p>
                <p>Price: {{ product.price }} MMK</p>
                <p v-if="selectedSize">Selected Size: {{ selectedSize }}</p>
              </div>
              <!-- <div class="row mt-3 justify-content-around px-3 card-size">
              <div
                class="size col-3 mb-3 size-col"
                id="size"
                v-for="size in sizes"
                :key="size.id"
                @click="selectSize(size.size)"
              >
                <p>{{ size.size }}</p>
              </div>
            </div>
            <div class="card-button-group mt-3">
              <div class="btn add-btn mb-3" @click="addToCart(product)">
                Add to Bag
              </div>
              <div class="btn wish-btn">Add to WishList</div>
            </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const route = useRoute();
    const store = useStore();
    const productId = ref(props.id);
    const productCount = ref(4);
    const quantity = ref(1);
    const tab = ref("p-1");
    const isMagnifierVisible = ref(false);
    const magnifierSize = 150; // Size of magnifier square
    const zoomLevel = 2; // Zoom level for magnification

    const detail_content = ref(false);

    const products = computed(() => store.getters["products"]);
    const product = computed(() => {
      return store.getters.getProductById(productId.value);
    });

    const sizeGuide = ref(false);
    const selectedSize = ref(null);
    const refreshProducts = () => {
      fetchRandomProducts();
      window.scrollTo(0, 0);
    };

    let randomProducts = ref([]);

    const fetchRandomProducts = () => {
      randomProducts.value = store.getters.randomProducts(productCount.value);
      window.scroll(0, 0);
    };

    // Fetch products when component is mounted
    onMounted(() => {
      fetchRandomProducts();
    });
    // Watch for changes to productCount and re-fetch products
    watch(props, () => {
      fetchRandomProducts();
    });

    const miniImages = computed(() =>
      store.getters.getMiniImagesByProductId(productId.value)
    );
    const mainImage = ref(product.value.img);

    const updateTab = (selectedTab, imgUrl) => {
      tab.value = selectedTab;
      mainImage.value = imgUrl;
    };

    const getImageUrl = (tab) => {
      return store.getters.getImageUrlByTab(productId.value, tab);
    };

    const nextImage = () => {
      const currentIndex = miniImages.value.findIndex(
        (image) => image.id === tab.value
      );
      const nextIndex = (currentIndex + 1) % miniImages.value.length;
      const nextImage = miniImages.value[nextIndex];
      updateTab(nextImage.id, nextImage.url);
    };

    const prevImage = () => {
      const currentIndex = miniImages.value.findIndex(
        (image) => image.id === tab.value
      );
      const prevIndex =
        (currentIndex - 1 + miniImages.value.length) % miniImages.value.length;
      const prevImage = miniImages.value[prevIndex];
      updateTab(prevImage.id, prevImage.url);
    };

    const showMagnifier = () => {
      isMagnifierVisible.value = true;
    };

    const hideMagnifier = () => {
      isMagnifierVisible.value = false;
    };

    const moveMagnifier = (e) => {
      const img = e.target;
      const magnifier = img.nextElementSibling;
      const imgRect = img.getBoundingClientRect();
      const mouseX = e.clientX - imgRect.left;
      const mouseY = e.clientY - imgRect.top;

      // Prevent magnifier from going out of image bounds
      if (
        mouseX < 0 ||
        mouseY < 0 ||
        mouseX > imgRect.width ||
        mouseY > imgRect.height
      ) {
        hideMagnifier();
        return;
      }

      const backgroundX = (mouseX / imgRect.width) * 100;
      const backgroundY = (mouseY / imgRect.height) * 100;

      magnifier.style.backgroundImage = `url(${mainImage.value})`;
      magnifier.style.backgroundSize = `${imgRect.width * zoomLevel}px ${
        imgRect.height * zoomLevel
      }px`;
      magnifier.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;

      const magnifierX = mouseX - magnifierSize / 2;
      const magnifierY = mouseY - magnifierSize / 2;

      magnifier.style.left = `${magnifierX}px`;
      magnifier.style.top = `${magnifierY}px`;
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

    const addToCart = (product) => {
      if (!selectedSize.value) {
        alert("Please select a size");
        return;
      }
      const productToAdd = {
        id: product.id,
        series: product.series,
        cat: product.cat,
        code: product.code,
        color: product.color,
        price: product.price,
        pics: product.pics,
        img: product.img,
        quantity: quantity.value,
        size: selectedSize.value,
      };

      store.dispatch("addToCart", productToAdd);
      selectedSize.value = null;
    };

    const selectSize = (size) => {
      selectedSize.value = size;
    };

    // onMounted(productId, () => {
    //   product;
    // });

    watch(route, () => {
      productId.value = route.params.id;
    });
    watch(productCount, () => {
      sliceProduct();
    });
    return {
      product,
      sizeGuide,
      sizes,
      selectSize,
      selectedSize,
      randomProducts,
      productId,
      refreshProducts,
      addToCart,
      tab,
      updateTab,
      getImageUrl,
      miniImages,
      mainImage,
      nextImage,
      prevImage,
      isMagnifierVisible,
      showMagnifier,
      hideMagnifier,
      moveMagnifier,
      detail_content,
    };
  },
};
</script>

<style scoped>
.detail {
  margin: 150px 0px;
}

.modal-dialog {
  max-width: 1000px !important;
}

.modal-content {
  width: max-content;
}

.card-img img {
  border: 1px solid #f2f2f2 !important;
}

.mini-photo {
  width: 100px;
  height: max-content;
  object-fit: cover;
}

.max-photo {
  margin-left: 20px;
  width: 500px;
  position: relative;
}

.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  cursor: pointer;
  padding: 10px;
  color: red;
}

.prev-button,
.next-button .fa-solid {
  font-size: 32px;
  padding: 0px 20px;
}

.prev-button {
  left: 0;
}

.next-button {
  right: 0;
}

.magnifier {
  display: none;
  position: absolute;
  /* border: 3px solid #000; */
  width: 150px; /* Same as magnifierSize in script */
  height: 150px; /* Same as magnifierSize in script */
  pointer-events: none;
  border-radius: 50%;
}

.magnifier::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
}

.magnifier {
  display: block;
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

.detail-size {
  margin-top: 30px;
}

.size-detail {
  padding: 0px 145px 0px 0px;
}

.detail-p {
  border-top: 1px solid #111;
  padding: 12px 5px;
}

.detail-p .material-symbols-outlined {
  cursor: pointer;
}

.detail-content {
  width: 500px;
  padding: 0px 0px 10px 10px;
}

.size-p {
  border-top: 1px solid #111;
  border-bottom: 1px solid #111;
  padding: 12px 5px;
}

.size-p .material-symbols-outlined {
  cursor: pointer;
}

.delivery-option {
  border: 1px solid #111;
  margin: 0px 145px 0px 0px;
}

.delivery-heading .material-symbols-outlined {
  font-size: 28px;
}

.delivery-heading p {
  text-decoration: underline;
  padding: 0px 12px;
}

.delivery-text p {
  font-size: 18px;
}

.also-like p {
  font-weight: 600;
  text-decoration: underline;
}

.p-img {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  margin-bottom: 10px;
  margin-top: 20px;
  cursor: pointer;
}
.active {
  border: 5px solid red;
}

@media (max-width: 1200px) {
  .modal-dialog {
    max-width: 800px !important;
  }
  .detail-card-col {
    width: 25%;
  }
}

@media (max-width: 800px) {
  .detail {
    margin: 10px auto;
  }

  .left-photo,
  .right-content {
    width: 100%;
    margin: 30px auto;
  }
  .detail-card-col {
    width: 50%;
  }

  .right-content {
    margin-left: 70px;
  }

  .main-content {
    margin: 0px auto;
  }
}

@media (max-width: 500px) {
  .modal-dialog {
    max-width: 300px !important;
  }

  .size-list {
    margin: 0px auto;
  }

  .size-list .size-card {
    font-size: 14px;
    width: 120px;
  }

  .add-btn,
  .wish-btn {
    width: 340px;
  }
  .mini-photo {
    width: 100%;
    display: flex;
  }

  .mini-photo img {
    width: 60px;
    margin: 0px 5px 0px 0px;
  }

  .left-photo {
    margin: 0px auto;
  }

  .photo-flex {
    flex-wrap: wrap;
  }

  .max-photo {
    margin: 0px 0px 40px !important;
    padding: 0 !important;
  }

  .right-content {
    margin: 0px auto;
    margin-top: -50px;
  }

  .size-guide {
    padding: 0px;
  }

  .size-detail {
    padding: 0px;
  }

  .delivery-option {
    margin: 0px;
  }
  .card-list {
    padding: 0px 0px;
    margin-right: 5px;
  }
}

@media (width: 430px) {
  .mini-photo img {
    margin: 0px 16px;
  }
  .add-btn,
  .wish-btn {
    width: 380px;
  }
}

@media (width: 390px) {
  .mini-photo img {
    margin: 0px 11px;
  }
  .add-btn,
  .wish-btn {
    width: 340px;
  }
}
</style>
