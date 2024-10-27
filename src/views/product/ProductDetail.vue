<template>
  <div class="detail">
    <div class="content-wrapper">
      <div
        class="modal"
        tabindex="-1"
        id="exampleModal-1"
        aria-labelledby="exampleModalLabel-1"
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
              <img src="../../assets/size_chart.png" class="img-fluid" alt="" />
              <img src="../../assets/size_chart.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal"
        tabindex="-1"
        id="exampleModal-2"
        aria-labelledby="exampleModalLabel-2"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title">Write a Review</h2>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="text-start mb-5">
                  <h5 class="ms-2">Rating</h5>
                  <v-rating
                    required
                    v-model="rating"
                    clearable
                    active-color="orange"
                    color="orange-lighten-1"
                  ></v-rating>
                </div>
                <v-textarea
                  required
                  clearable
                  v-model="comment"
                  label="Comment"
                  variant="outlined"
                ></v-textarea>
              </form>
              <div class="button-group d-flex">
                <button
                  class="btn comment-btn cancel-btn"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  class="btn comment-btn sumbit-btn"
                  @click="sumbitComment"
                  data-bs-dismiss="modal"
                >
                  Sumbit Comment
                </button>
              </div>
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
            </div>
            <div class="max-photo p-2 mt-5">
              <img :src="mainImage" class="img-fluid d-none" alt="" />
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
            <p class="code">Product Code: {{ product.series }}</p>
            <p>Color: {{ product.name }}</p>
            <p>Price: {{ product.price }} MMK</p>
            <div class="size-guide d-flex justify-content-between">
              <p>Select your size</p>
              <p
                class="guide"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal-1"
              >
                Size Guide
              </p>
            </div>
            <div class="size-content" v-if="selectedSize">
              <p>
                Selected Size: <span>{{ selectedSize }}</span>
              </p>
            </div>
            <!-- <div class="size-list d-flex justify-content-start mt-3">
              <div
                class="size-card"
                id="size"
                v-for="size in product.size"
                :key="size.id"
                @click="selectSize(size)"
              >
                <p>{{ size.size }}</p>
              </div>
            </div> -->
            <div class="size-button">
              <div class="row mt-3 px-3 card-size">
                <button
                  class="size col-3 mb-3 size-col"
                  id="size"
                  @click="selectSize('M', product, $event)"
                  :disabled="product.m_size_stock < 1"
                  :class="{
                    'bg-grey-darken-2': product.m_size_stock < 1,
                    'd-none':
                      product.series == 'RO:9001' ||
                      product.series == 'RO:9002',
                  }"
                >
                  <p style="pointer-events: none">M</p>
                </button>
                <button
                  class="size col-3 mb-3 size-col"
                  id="size"
                  @click="selectSize('L', product, $event)"
                  :disabled="product.lg_size_stock < 1"
                  :class="{
                    'bg-grey-darken-2': product.lg_size_stock < 1,
                    'd-none':
                      product.series == 'RO:9001' ||
                      product.series == 'RO:9002',
                  }"
                >
                  <p style="pointer-events: none">L</p>
                </button>
                <button
                  class="size col-3 mb-3 size-col"
                  id="size"
                  @click="selectSize('XL', product, $event)"
                  :disabled="product.xl_size_stock < 1"
                  :class="{
                    'bg-grey-darken-2': product.xl_size_stock < 1,
                    'd-none':
                      product.series == 'RO:9001' ||
                      product.series == 'RO:9002',
                  }"
                >
                  <p style="pointer-events: none">XL</p>
                </button>
                <button
                  class="size col-3 mb-3 size-col"
                  id="size"
                  @click="selectSize('XXL', product, $event)"
                  :disabled="product.xxl_size_stock < 1"
                  :class="{
                    'bg-grey-darken-2': product.xxl_size_stock < 1,
                    'd-none':
                      product.series == 'RO:9001' ||
                      product.series == 'RO:9002',
                  }"
                >
                  <p style="pointer-events: none">XXL</p>
                </button>
                <button
                  class="size col-3 mb-3 size-col d-none"
                  id="size"
                  @click="selectSize('3XL', product, $eventct)"
                  :disabled="product.xxxl_size_stock < 1"
                  :class="{
                    'bg-grey-darken-2': product.xxxl_size_stock < 1,
                    'd-block':
                      product.series == 'RO:9001' ||
                      product.series == 'RO:9002',
                  }"
                >
                  <p style="pointer-events: none">3XL</p>
                </button>
                <button
                  class="size col-3 mb-3 size-col d-none"
                  id="size"
                  @click="selectSize('4XL', product, $eventct)"
                  :disabled="product.xxxxl_size_stock < 1"
                  :class="{
                    'bg-grey-darken-2': product.xxxxl_size_stock < 1,
                    'd-block':
                      product.series == 'RO:9001' ||
                      product.series == 'RO:9002',
                  }"
                >
                  <p style="pointer-events: none">4XL</p>
                </button>
              </div>
              <!-- <div class="card-button-group mt-3">
                <div
                  class="btn add-btn mb-3"
                  @click="addToCart(product)"
                  :disabled="product.m_size_stock < 1"
                >
                  Add to Bag
                </div>
                <div class="btn wish-btn">Add to WishList</div>
              </div> -->
            </div>
            <div class="card-button-group mt-5">
              <div class="btn add-btn mb-3" @click="addToCart(product)">
                Add to Bag
              </div>
              <!-- <div class="btn wish-btn">Add to WishList</div> -->
            </div>
            <div class="detail-size">
              <div class="size-detail">
                <div
                  class="d-flex justify-content-between align-items-center detail-p"
                  @click="size_chart = !size_chart"
                >
                  <p>Size & Fits</p>
                  <span class="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </div>
                <div class="size-fits-content" v-if="size_chart">
                  <img
                    src="../../assets/size_chart.png"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
              <div class="review">
                <div
                  class="d-flex justify-content-between align-items-center review-border"
                >
                  <p>Review</p>
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal-2"
                    class="review-button btn d-flex align-items-center justify-content-between"
                  >
                    <p>Write a Review</p>
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
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
              >
                <div class="card-img mb-2 border-img">
                  <img :src="product.main_image" class="img-fluid" alt="" />
                </div>
              </router-link>

              <div class="p-color text-center mb-2">
                <p>Color: {{ product.name }}</p>
              </div>
              <div class="card-content text-start">
                <p class="code">Product-code: {{ product.series }}</p>
                <p>{{ product.product_info }}</p>
                <p>Price: {{ product.price }} MMK</p>
                <!-- <p v-if="selectedSize">
                  Selected Size: {{ selectedSize.size }}
                </p> -->
              </div>
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
import getSingleProduct from "@/composable/getSingleProduct";
import getRandomProducts from "@/composable/getRandomProducts";
import Swal from "sweetalert2";
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
    const zoomLevel = 2; // Zoom level for magnification\
    const rating = ref(0);
    const nickName = ref("");
    const email = ref("");
    const comment = ref("");
    const cartItems = computed(() => store.getters["cartItems"]);

    let { product, error, load } = getSingleProduct();
    let { randomProducts, err, loadRandom } = getRandomProducts();

    const sumbitComment = () => {
      if (
        nickName.value == undefined &&
        rating.value == 0 &&
        email.value == undefined &&
        comment.value == undefined
      ) {
        alert("Add some value");
      } else {
        console.log(nickName.value);
        console.log(comment.value);
        console.log(email.value);
        console.log(rating.value);
      }
    };

    const size_chart = ref(false);
    const sizeGuide = ref(false);
    const selectedSize = ref(null || "Please select a size");
    const mainImage = ref();
    const miniImages = ref();
    const getImage = () => {
      miniImages.value = product.value.images;
      mainImage.value = product.value.main_image;
    };

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

    const addToCart = (product) => {
      if (!selectedSize.value) {
        Swal.fire({
          title: "Warning",
          text: "Please Select Size !!",
          icon: "warning",
          confirmButtonText: "Ok",
        });
        return;
      }
      const productToAdd = {
        id: product.id,
        code: product.series,
        color: product.name,
        price: product.price,
        pics: product.product_info,
        img: product.main_image,
        quantity: quantity.value,
        size: selectedSize.value,
      };

      const existingItem = cartItems.value.find(
        (item) =>
          item.code === productToAdd.code &&
          item.size === productToAdd.size &&
          item.color === productToAdd.color
      );

      if (existingItem) {
        Swal.fire({
          title: "Warning",
          text: "Already added to the cart",
          icon: "warning",
          confirmButtonText: "Ok",
        });
        return;
      } else {
        store.dispatch("addToCart", productToAdd);
      }
    };

    const selectSize = (size, product, event) => {
      document.querySelectorAll(".size-col").forEach((btn) => {
        btn.classList.remove("selected-size");
      });

      event.target.closest("button").classList.add("selected-size");
      selectedSize.value = size;
    };

    watch(props, async () => {
      await load(props.id);
      getImage();
      loadRandom();
      window.scroll(0, 0);
    });

    onMounted(async () => {
      await load(productId.value);
      loadRandom();
      getImage();
      window.scroll(0, 0);
    });

    return {
      sizeGuide,
      productId,
      selectSize,
      selectedSize,
      product,
      productId,
      randomProducts,
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
      size_chart,
      rating,
      nickName,
      email,
      comment,
      sumbitComment,
    };
  },
};
</script>

<style scoped>
.detail {
  margin: 150px 0px;
  color: var(--font-color);
}

.modal-dialog {
  max-width: 500px !important;
  width: 100%;
}

.card-img img {
  border: 1px solid #f2f2f2 !important;
}

.button-group {
  justify-content: end;
  margin: 10px 0px 20px;
}

.selected-size {
  background-color: red !important;
  color: #fff !important;
}

.comment-btn {
  width: 150px;
  margin: 0px 10px 0px 0px;
  padding: 10px 0px;
  border: 1px solid #111;
}

.sumbit-btn {
  background: red;
  color: #fff;
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
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  margin: 0px 30px 0px 0px;
  padding: 0px 50px 0px 0px;
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
  border: 1px solid black;
}

.add-btn {
  background: #111111;
  color: #fff;
}

.wish-btn {
  background: #f2f2f2;
}

.add-btn:hover {
  background: #b7b7b7;
  color: #fff;
  border-color: #b7b7b7;
}

.wish-btn:hover {
  background: #b7b7b7;
  color: #fff;
  border-color: #b7b7b7;
}

.review-button {
  width: 160px;
  border: 1px solid #111;
  padding: 12px 10px;
  background: #111;
  color: #fff;
}

.review-button:hover {
  background: #b7b7b7;
  color: #fff;
  border-color: #b7b7b7;
}

.detail-size {
  margin-top: 30px;
}

.size-detail,
.review {
  padding: 0px 145px 0px 0px;
}

.review-border {
  border-top: 1px solid #111;
  border-bottom: 1px solid #111;
  padding: 12px 5px;
}

.detail-p {
  border-top: 1px solid var(--border-color);
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
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  padding: 12px 5px;
}

.size-p .material-symbols-outlined {
  cursor: pointer;
}

.delivery-option {
  border: 1px solid var(--border-color);
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

.size-col {
  width: 80px;
  border: 1px solid var(--border-color);
  margin: 20px 20px 0px 0px;
  border-radius: 6px;
}

.size-col p {
  font-weight: bold;
}

.size-col:hover {
  background: red;
  color: #fff;
}

@media (max-width: 1280px) {
  .modal-dialog {
    max-width: 800px !important;
  }
  .detail-card-col {
    width: 25%;
  }
  .size-detail,
  .review {
    padding: 0px 20px 0px 0px;
  }
}

@media (max-width: 860px) {
  .detail {
    margin: 50px auto;
  }

  .size-guide {
    padding: 0px 80px 0px 0px;
  }

  .left-photo,
  .right-content {
    width: 100%;
    margin: 30px auto;
  }
  .detail-card-col {
    width: 50%;
  }

  .main-content {
    margin: 0px auto;
  }

  .right-content {
    padding-left: 100px;
  }

  .size-detail,
  .review {
    padding-right: 70px;
  }

  .add-btn {
    width: 470px;
  }
}

@media (max-width: 600px) {
  .modal-dialog {
    max-width: auto;
    padding: 0px 15px 0px 0px;
  }

  .right-content {
    padding-left: 0px;
  }

  .size-list {
    margin: 0px auto;
  }

  .size-card {
    padding: 0px;
  }

  .review {
    padding: 0px;
  }

  .size-col {
    width: 70px;
  }

  .add-btn,
  .wish-btn {
    width: 320px;
  }
  .mini-photo {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .mini-photo img {
    width: 55px;
    margin: 0px 5px 0px 5px;
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

  .size-card {
    margin: 0px 10px 0px 0px;
  }
  .size-list {
    justify-content: center !important;
    align-content: center;
    display: block;
    margin: 0px auto;
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
