<template>
  <div class="navigation">
    <div class="nav1" id="nav1">
      <div
        class="mobile-view d-flex justify-content-between align-items-center"
      >
        <div class="text-start">
          <div id="mobile-nav">
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
              variant="text"
            ></v-app-bar-nav-icon>
            <v-navigation-drawer
              v-model="drawer"
              :location="$vuetify.display.mobile ? 'left' : undefined"
              temporary
            >
              <router-link to="/">
                <v-list-item
                  ><div class="logo-img-nav">
                    <img
                      src="../assets/romantic-logo.png"
                      alt=""
                      class="img-fluid"
                    /></div></v-list-item
              ></router-link>
              <v-divider></v-divider>
              <div class="d-flex align-items-center justify-content-between">
                <router-link to="/products" class="nav-link mb-text"
                  ><v-list-item><p>Product</p> </v-list-item></router-link
                >
                <span
                  class="material-symbols-outlined pe-10"
                  type="button"
                  @click="mobileDropdown = !mobileDropdown"
                >
                  keyboard_arrow_down
                </span>
              </div>
              <ul class="dropdown-mobile" v-if="mobileDropdown">
                <hr />

                <li
                  class="mobile-dropdown-items"
                  v-for="item in categories"
                  :key="item.id"
                >
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <router-link
                      :to="`/products/${item.id}`"
                      class="dropdown-link"
                      ><p>{{ item.name }}</p>
                    </router-link>
                    <span
                      class="material-symbols-outlined pe-10"
                      type="button"
                      @click="toggleDropdown(item.id)"
                    >
                      keyboard_arrow_down
                    </span>
                  </div>

                  <ul
                    class="mobile-sub-dropdown"
                    v-if="openedDropdown === item.id"
                  >
                    <li
                      class="mobile-sub-item"
                      v-for="series in item.series"
                      :key="series.id"
                    >
                      <router-link
                        :to="`/products/${item.id}/${series.id}`"
                        class="sub-dropdown-link"
                        ><p>{{ series.name }}</p></router-link
                      >
                    </li>
                  </ul>
                </li>
                <hr />
              </ul>

              <router-link to="/about-us" class="nav-link mb-text"
                ><v-list-item><p>Our Story</p></v-list-item></router-link
              >
              <router-link to="/contanct" class="nav-link mb-text"
                ><v-list-item><p>Contact Us</p></v-list-item></router-link
              >
              <v-list-item v-if="user">
                <div
                  class="dropdown-img d-flex justify-content-between align-items-center"
                  link
                >
                  <div class="d-flex align-items-center mb-img-text">
                    <img
                      type="button"
                      class="img-fluid"
                      :src="`https://ui-avatars.com/api/?background=ff0000&color=fff&name=${user.name}`"
                      alt=""
                    />
                    <p class="px-5 text-capitalize">{{ user.name }}</p>
                  </div>
                  <span
                    class="material-symbols-outlined pe-10"
                    type="button"
                    @click="userAccount = !userAccount"
                  >
                    keyboard_arrow_down
                  </span>
                </div>
                <ul class="mobile-dropdown-menu mt-2" v-if="userAccount">
                  <!-- <li>
                      <a
                        class="dropdown-item d-flex align-items-center img-text"
                        href="#"
                        ><img
                          src="https://ui-avatars.com/api/?background=ff0000&color=fff&name=SST"
                          alt=""
                        />
                        <h5>SST</h5></a
                      >
                    </li> -->

                  <li>
                    <router-link
                      class="dropdown-item d-flex align-items-center icon-text us-links"
                      to="/"
                      ><span class="material-symbols-outlined"> person </span>
                      <p class="px-3 pt-1">My Profile</p>
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      class="dropdown-item d-flex align-items-center icon-text us-links"
                      to="/"
                      ><span class="material-symbols-outlined"> settings </span>
                      <p class="px-3 pt-1">Settings</p></router-link
                    >
                  </li>

                  <li>
                    <button
                      class="dropdown-item d-flex align-items-center icon-text nav-link"
                      type="button"
                      @click="logout()"
                    >
                      <span class="material-symbols-outlined">
                        power_settings_new
                      </span>
                      <p class="px-3 pt-1">Logout</p>
                    </button>
                  </li>
                </ul>
              </v-list-item>
              <v-list-item link v-else>
                <div class="d-flex align-items-center">
                  <router-link
                    class="nav-link d-flex align-items-center"
                    to="/login"
                  >
                    <div class="icon-group d-flex align-items-center">
                      <i class="fa-regular fa-user"></i
                      ><i class="fa-solid fa-arrow-right"></i>
                    </div>
                    <p class="ms-1">Login |</p></router-link
                  ><router-link class="nav-link ms-1" to="/register"
                    ><p>Register</p></router-link
                  >
                </div></v-list-item
              >
            </v-navigation-drawer>
          </div>
        </div>
        <div class="logo-img" id="img">
          <router-link to="/"
            ><img src="../assets/romantic-logo.png" alt="" class="img-fluid"
          /></router-link>
        </div>
        <div class="icon-group">
          <ul class="d-flex align-items-center">
            <li class="ms-3">
              <div
                class="cusor-pointer"
                @click="isMobileSearch = !isMobileSearch"
              >
                <i
                  class="fa-solid fa-magnifying-glass"
                  :style="{ color: isMobileSearch ? 'red' : '' }"
                ></i>
              </div>
            </li>
            <li class="ms-3">
              <div class="d-flex align-items-center mt-1 language">
                <a class="nav-link" href="#">
                  <i class="fa-solid fa-globe"></i>
                </a>

                <ul class="dropdown-menus">
                  <li class="mb-4" @click="changeLanguage('EN')">
                    <p class="nav-link text-start">English</p>
                  </li>
                  <li @click="changeLanguage('MM')">
                    <p class="nav-link text-start">Myanmar</p>
                  </li>
                </ul>
              </div>
            </li>
            <li class="ms-3">
              <span
                class="m-0 p-0 menu-icon material-symbols-outlined cursor-pointer prevent-select dark-icon theme-icon"
                @click="changeTheme('light')"
                :class="{ 'd-none': currentTheme == 'light' }"
              >
                dark_mode
              </span>
              <span
                class="m-0 p-0 menu-icon material-symbols-outlined cursor-pointer prevent-select light-icon theme-icon"
                @click="changeTheme('dark')"
                :class="{ 'd-none': currentTheme == 'dark' }"
              >
                light_mode
              </span>
            </li>
            <li class="ms-3">
              <router-link to="/cart" class="nav-link">
                <i class="fa-solid fa-cart-shopping"></i>
                <span v-if="cartItemCount > 0" class="cart-count">{{
                  cartItemCount
                }}</span></router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- Search Ui for mobile  -->
      <div
        v-if="isMobileSearch"
        class="w-100 h-100 position-fixed border-top"
        style="background: #242142"
      >
        <div class="input-group my-2 px-1">
          <input
            type="text"
            class="form-control"
            placeholder="Search Here ..."
            aria-describedby="basic-addon2"
            @input="searchProducts"
            v-model="search_keyword"
          />
          <span
            class="input-group-text cursor-pointer"
            style="background: rgba(173, 173, 173, 0.144)"
            id="basic-addon2"
            @click="closeSearched()"
          >
            <span class="material-symbols-outlined fs-1 text-white">
              close
            </span>
          </span>
        </div>
      </div>
      <div class="search-products" v-if="searchedProducts.length > 0">
        <div class="row">
          <div
            class="col-6 col-lg-3 col-md-4 col-sm-6"
            v-for="product in searchedProducts"
            :key="product.id"
          >
            <div class="product-card card mb-5">
              <router-link
                :to="{ name: 'productDetail', params: { id: product.id } }"
              >
                <img :src="product.main_image" alt="" class="img-fluid" />
              </router-link>
              <div class="card-content mt-2 px-3 py-2">
                <div class="name text-center">
                  <p>{{ product.name }}</p>
                </div>
                <div class="content text-start">
                  <p class="code">Code: {{ product.series }}</p>
                  <p>{{ product.product_info }}</p>
                  <p>Price: {{ product.price }}MMK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="nav2" id="nav2">
      <div class="upper-nav content-wrapper">
        <div class="d-flex justify-content-between align-items-center">
          <div class="upper-content-1">
            <ul class="d-flex">
              <li class="upper-li">
                <router-link to="/products" class="nav-link">
                  <p class="nav-p">{{ $t("product") }}</p>
                  <ul class="dropdowns">
                    <li
                      class="dropdown-items"
                      v-for="item in categories"
                      :key="item.id"
                    >
                      <router-link
                        :to="`/products/${item.id}`"
                        class="dropdown-link"
                        >{{ item.name }}</router-link
                      >
                      <ul class="dropdown-submenu">
                        <li
                          class="dropdown-submenu-item"
                          v-for="series in item.series"
                          :key="series.id"
                        >
                          <router-link
                            :to="`/products/${item.id}/${series.id}`"
                            class="sub-dropdown-link"
                            >{{ series.name }}</router-link
                          >
                        </li>
                      </ul>
                    </li>
                  </ul>
                </router-link>
              </li>
              <li class="upper-li">
                <router-link class="nav-link" to="/about-us"
                  ><p>{{ $t("story") }}</p></router-link
                >
              </li>
              <li class="upper-li">
                <router-link class="nav-link" to="/contact"
                  ><p>{{ $t("contact") }}</p></router-link
                >
              </li>
            </ul>
          </div>
          <div class="logo-img" id="img" :class="{ 'img-padding': user }">
            <router-link class="nav-link" to="/">
              <img src="../assets/romantic-logo.png" alt="" class="img-fluid"
            /></router-link>
          </div>
          <div class="upper-content-2">
            <ul class="d-flex align-items-center">
              <li v-if="userLogin">
                <div class="px-3">
                  <div class="dropdown-img dropdown">
                    <img
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      class="img-fluid"
                      :src="`https://ui-avatars.com/api/?background=ff0000&color=fff&name=${user.name}`"
                      alt=""
                    />
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          class="dropdown-item d-flex align-items-center img-text-1"
                          href="#"
                          ><img
                            :src="`https://ui-avatars.com/api/?background=ff0000&color=fff&name=${user.name}`"
                            alt=""
                          />
                          <h5 class="text-capitalize">{{ user.name }}</h5></a
                        >
                      </li>
                      <li>
                        <div class="dropdown-divider"></div>
                      </li>
                      <li>
                        <router-link
                          class="dropdown-item d-flex align-items-center icon-text nav-link"
                          to="/myprofile"
                          ><span class="material-symbols-outlined">
                            person
                          </span>
                          <p class="ps-3">My Profile</p>
                        </router-link>
                      </li>
                      <li>
                        <router-link
                          class="dropdown-item d-flex align-items-center icon-text nav-link"
                          to="/myprofile"
                          ><span class="material-symbols-outlined">
                            settings
                          </span>
                          <p class="ps-3">Settings</p></router-link
                        >
                      </li>
                      <li>
                        <div class="dropdown-divider"></div>
                      </li>
                      <li>
                        <button
                          class="dropdown-item d-flex align-items-center icon-text nav-link"
                          type="button"
                          @click="logout()"
                        >
                          <span class="material-symbols-outlined">
                            power_settings_new
                          </span>
                          <p class="ps-3">Logout</p>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li class="d-flex align-items-center" v-else>
                <router-link
                  class="nav-link d-flex align-items-center main-hover"
                  to="/login"
                >
                  <div class="icon-group d-flex align-items-center">
                    <i class="fa-regular fa-user"></i
                    ><i class="fa-solid fa-arrow-right"></i>
                  </div>
                  <p class="ms-1">Login</p></router-link
                >
                <p class="ms-1">|</p>
                <router-link class="nav-link ms-1 main-hover" to="/register"
                  ><p>Register</p></router-link
                >
              </li>
              <li>
                <div class="d-flex align-items-center mt-1 language">
                  <a class="nav-link" href="#">
                    <i class="fa-solid fa-globe"></i>
                  </a>

                  <ul class="dropdown-menus">
                    <li class="mb-4" @click="changeLanguage('EN')">
                      <p class="nav-link text-start">English</p>
                    </li>
                    <li @click="changeLanguage('MM')">
                      <p class="nav-link text-start">Myanmar</p>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="lower-nav content-wrapper">
        <div class="d-flex justify-content-between align-items-center">
          <div class="upper-icon-group">
            <ul class="d-flex">
              <li>
                <a
                  class="nav-link"
                  href="https://www.facebook.com/romanticmenunderwear/?ref=embed_page"
                  target="_blank"
                  ><i class="fa-brands fa-square-facebook"></i
                ></a>
              </li>
              <li>
                <a
                  class="nav-link"
                  href="https://www.youtube.com/@RomanticUnderwear"
                  target="_blank"
                  ><i class="fa-brands fa-youtube"></i
                ></a>
              </li>
              <li>
                <a
                  class="nav-link"
                  href="https://invite.viber.com/?g2=AQAYd09n5%2BwZBVLyWr2tbl1zvdC0iLsfQJ9LHesOX8%2BM%2FUHvVhjF2jJQVaHiy5%2Fq"
                  target="_blank"
                  ><i class="fa-brands fa-viber"></i
                ></a>
              </li>
              <li>
                <a
                  class="nav-link"
                  href="https://t.me/romanticmenunderwear"
                  target="_blank"
                  ><i class="fa-brands fa-telegram"></i
                ></a>
              </li>
            </ul>
          </div>
          <div class="nav-search">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="Username"
                aria-describedby="basic-addon1"
                @input="searchProducts"
                v-model="search_keyword"
              />
              <span class="material-symbols-outlined input-group-text">
                search
              </span>
            </div>
          </div>
          <div class="search-products" v-if="searchedProducts.length > 0">
            <div class="row">
              <div
                class="col-12 col-lg-3 col-md-3 col-sm-12"
                v-for="product in searchedProducts"
                :key="product.id"
              >
                <div class="product-card card mb-5">
                  <router-link
                    :to="{ name: 'productDetail', params: { id: product.id } }"
                  >
                    <img :src="product.main_image" alt="" class="img-fluid" />
                  </router-link>
                  <div class="card-content mt-2 px-3 py-2">
                    <div class="name text-center">
                      <p>{{ product.name }}</p>
                    </div>
                    <div class="content text-start">
                      <p class="code">Code: {{ product.series }}</p>
                      <p>{{ product.product_info }}</p>
                      <p>Price: {{ product.price }}MMK</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right-group">
            <ul class="d-flex align-items-center">
              <li class="d-flex align-items-center light-dark">
                <span
                  class="m-0 p-0 menu-icon material-symbols-outlined cursor-pointer prevent-select dark-icon theme-icon"
                  @click="changeTheme('light')"
                  :class="{ 'd-none': currentTheme == 'light' }"
                >
                  dark_mode
                </span>
                <span
                  class="m-0 p-0 menu-icon material-symbols-outlined cursor-pointer prevent-select light-icon theme-icon"
                  @click="changeTheme('dark')"
                  :class="{ 'd-none': currentTheme == 'dark' }"
                >
                  light_mode
                </span>
              </li>
              <li>
                <router-link
                  class="nav-link d-flex align-items-center d-none"
                  to="/cart"
                  ><i class="fa-solid fa-heart"></i>
                </router-link>
              </li>
              <li class="cart-icon">
                <router-link
                  class="nav-link d-flex align-items-center"
                  to="/cart"
                  ><i class="fa-solid fa-cart-shopping"></i>
                  <span v-if="cartItemCount > 0" class="cart-count">{{
                    cartItemCount
                  }}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watch } from "vue";
import { mapGetters, mapMutations, useStore } from "vuex";
import router from "@/router";
import { useRoute } from "vue-router";
import getCategories from "../composable/getCategories";
import axios from "axios";
import api from "@/service/api";

export default {
  setup(props) {
    const store = useStore();
    const route = useRoute();
    const currentTheme = ref("light");
    const drawer = ref(false);
    const mobileDropdown = ref(false);
    const bamboo = ref(false);
    const modal = ref(false);
    const spandex = ref(false);
    const isHovered = ref(false);
    const userAccount = ref(false);
    const userLogin = ref();
    const user = ref();
    const check = ref(false);
    const language = ref("EN");
    const openedDropdown = ref(null);
    const search_keyword = ref("");
    const searchedProducts = ref([]);
    const isMobileSearch = ref(false);

    const closeSearched = () => {
      isMobileSearch.value = false;
      searchedProducts.value = [];
    };

    const searchProducts = async () => {
      try {
        let response = await axios.get(
          api.searchProducts + "?search=" + search_keyword.value
        );
        if (response.status === 404) {
          throw new Error("page not found");
        }

        // searchedHotels.value = response.data.hotels.map(hotel => {
        //     let img = hotel.image == null ? require('@/assets/images/default.webp') : api.image_url + hotel.image;
        //     return {...hotel, image: img };
        // });
        console.log(response.data.products);
        searchedProducts.value = response.data.products;
      } catch (err) {
        console.log(err.message);
      }
    };

    const { categories, err, getData } = getCategories();

    const logout = () => {
      localStorage.removeItem("user");
      localStorage.removeItem("Token");
      localStorage.removeItem("totalAvailablePoints");
      localStorage.removeItem("isLogin");
      localStorage.removeItem("pointHistory");
      localStorage.removeItem("orderHistroy");
      localStorage.removeItem("cart");
      router.push("/login");
    };

    let changeLanguage = (lang) => {
      language.value = lang;
      store.dispatch("getLocale", lang);
    };

    const changeTheme = (theme) => {
      currentTheme.value = theme;
    };

    const handleMouseOver = () => {
      isHovered.value = true;
    };

    const handleMouseLeave = () => {
      isHovered.value = false;
    };

    const cartItemCount = computed(() => {
      return store.getters.cartItemCount;
    });

    document.addEventListener("scroll", () => {
      const header = document.getElementById("nav2");
      if (window.scrollY > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
    document.addEventListener("scroll", () => {
      const mbHeader = document.getElementById("nav1");
      if (window.scrollY > 0) {
        mbHeader.classList.add("scrolled");
      } else {
        mbHeader.classList.remove("scrolled");
      }
    });

    const toggleDropdown = (id) => {
      if (openedDropdown.value === id) {
        openedDropdown.value = null;
      } else {
        openedDropdown.value = id;
      }
    };

    onMounted(() => {
      getData();
    });

    watch(route, () => {
      userLogin.value = JSON.parse(localStorage.getItem("isLogin"));
      user.value = JSON.parse(localStorage.getItem("user"));
      searchedProducts.value = [];
      isMobileSearch.value = false;
    });

    return {
      drawer,
      cartItemCount,
      mobileDropdown,
      bamboo,
      modal,
      spandex,
      isHovered,
      handleMouseOver,
      handleMouseLeave,
      logout,
      user,
      userAccount,
      userLogin,
      changeTheme,
      currentTheme,
      changeLanguage,
      check,
      categories,
      openedDropdown,
      toggleDropdown,
      search_keyword,
      searchProducts,
      searchedProducts,
      isMobileSearch,
      closeSearched,
    };
  },
};
</script>

<style scoped>
.navigation {
  width: auto !important;
}

.content-wrapper {
  padding: 0px 4.6%;
}

.nav1 {
  width: 100%;
  display: none;
  position: fixed;
  background-color: var(--background-color);
  transition: bacground-color 0.4s ease-in-out;
  z-index: 10;
  color: var(--font-color);
}

.nav2 {
  color: var(--font-color);
}

.nav2 p {
  font-size: 20px;
}

.nav2 .fa-solid {
  font-size: 20px;
}

.upper-content-1 .upper-li {
  margin: 0px 15px;
}

.upper-content-2 ul li {
  margin: 0px 15px;
}

.upper-icon-group ul li {
  margin: 0px 15px;
}

.upper-icon-group .fa-brands {
  font-size: 28px;
}

.upper-content-2 ul li .fa-solid {
  margin-right: 10px;
}

/* .right-group ul li {
  margin: 0px 12.5px;
} */

.cart-icon {
  margin: 0px 20px 0px 42px;
}

.icon-group .material-symbols-outlined {
  padding: 0px 15px;
  font-size: 28px;
}

.fa-arrow-right {
  font-size: 10px;
}

.nav-text-content .text-group p {
  padding: 0px 20px;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 400;
}

.main-hover:hover {
  margin-top: -10px;
}

.nav-search {
  width: 450px;
  margin-right: 140px;
}

.nav-search .form-control {
  border-radius: 50px;
  border-color: rgb(47, 82, 143);
  background: var(--background-color);
  color: var(--font-color);
}
.form-control:focus {
  box-shadow: 0px 0px;
  border-color: red;
}

.img-padding {
  margin-right: 220px !important;
}

::placeholder {
  color: var(--font-color);
  opacity: 1;
}

.nav-search .input-group-text {
  border-radius: 50px;
  border-color: rgb(47, 82, 143);
  color: var(--font-color);
  background: var(--background-color);
  border-left: 0px;
}

.cart-count {
  position: absolute;
  right: 6%;
  top: 5px;
  background-color: red;
  color: #fff;
  border-radius: 50%;
  padding: 4px 10px;
  font-size: 12px;
}

.nav2 {
  width: 100%;
  height: max-content;
  cursor: pointer;
  background-color: var(--background-color);
  position: fixed;
  padding: 5px 55px;
  padding-bottom: 10px;
  top: 0;
  left: 0;
  transition: bacground-color 0.4s ease-in-out;
  border-bottom: 0.5px solid #f2f2f2;
  z-index: 9;
}

.nav2.scrolled {
  /* background-color: #f2f2f2; */
  border-bottom: 0.5px solid #f2f2f2;
  box-shadow: 5px 5px 5px #b7b7b7;
}

.nav1.scrolled {
  border-bottom: 1px solid #f2f2f2;
  box-shadow: 5px 5px 5px #b7b7b7;
}

#mobile-nav {
  align-content: start !important;
}
.v-divider {
  margin: 0;
}

.mb-text {
  color: #111111 !important;
}

.v-navigation-drawer {
  padding: 15px;
}

.v-list-item {
  padding: 15px !important;
  font-size: 20px;
}

.material-symbols-outlined {
  font-size: 24px;
  position: relative;
}

.nav2 .nav-text {
  padding: 5px;
  font-size: 20px;
  color: var(--font-color);
  transition: color 0.4 ease-in-out;
}

.nav2.scrolled .nav-text {
  color: #fff;
}

.nav2 .nav-icon .material-symbols-outlined {
  font-size: 26px;
  color: var(--font-color);
  transition: color 0.4 ease-in-out;
}

.nav2.scrolled .nav-icon .material-symbols-outlined {
  color: #fff;
}

.logo-img {
  width: 150px;
  margin-right: 90px;
}

.logo-img-nav {
  width: 120px;
  padding: 0;
  margin: 0;
}

.fa-heart {
  margin-right: 9px;
  display: none;
}

.fa-cart-shopping {
  margin-right: 2px;
}

.nav-img {
  width: 120px;
  margin-right: 160px;
}

.nav-link:hover {
  color: red;
  transition: 0.5s;
}

.nav-link .material-symbols-outlined:hover {
  color: red;
}

.v-list-item p:hover {
  color: red;
}

.v-list-item .material-symbols-outlined:hover {
  color: red;
}

.icon-group .material-symbols-outlined:hover {
  color: red;
}

.nav-text p {
  font-size: 16px;
  font-weight: 500;
}

.dropdowns {
  display: block;
  visibility: hidden;
  position: absolute;
  left: 6%;
  top: 50%;
  background: var(--background-color);
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 1;
  border: 1px solid red;
  border-radius: 2px;
  transition: 0.3s;
  margin-left: -100px;
}

.dropdowns .dropdown-submenu {
  visibility: hidden;
  position: absolute;
  left: 100%;
  top: 0%;
  background: var(--background-color);
  list-style-type: none;
  margin-top: -0.7px;
  padding: 0;
  border: 1px solid red;
}

.dropdown-items,
.dropdown-submenu-item {
  position: relative;
  z-index: 1;
  text-align: start;
  border-bottom: 0.1px solid red;
  font-size: 14px;
}

.dropdown-link,
.sub-dropdown-link,
.dropdown-submenu-link {
  color: var(--font-color);
  padding: 1rem;
  text-decoration: none;
  display: block;
  width: 180px;
  padding: auto 0px;
  z-index: 1;
}

.dropdown-items:hover .dropdown-link {
  background: red;
  color: #fff;
}

.dropdown-link .sub-dropdown-link:hover {
  background: red;
  color: #fff;
}

.dropdown-link:hover,
.dropdown-submenu-link:hover,
.sub-dropdown-link:hover {
  background-color: red;
  color: #fff;
}

.nav-link:hover > .dropdowns,
.dropdown-items:hover > .dropdown-submenu {
  visibility: visible;
  margin-left: 0px;
}

.dropdown-mobile {
  padding: 0px 20px;
}

.mobile-dropdown-item,
.mobile-sub-item {
  margin: 10px 0px 20px 0px;
}

.mobile-dropdown-item p {
  font-size: 20px;
}

.dropdown-img img {
  width: 28px;
  border-radius: 50%;
}

.img-text-1 img {
  margin-right: 20px;
  width: 50px;
}

.img-text-1 h5 {
  margin-top: 10px;
}

.img-text-1 {
  padding: 0px;
}

.icon-text {
  height: 50px;
}

.dropdown-menu {
  width: 180px;
  margin-left: -30px !important;
}

.dropdown-img p {
  text-transform: capitalize;
}

.us-links .material-symbols-outlined {
  color: #111111;
}

.us-links p {
  color: #111111;
}

.img-text h5 {
  font-family: "Chakra Petch", sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 5;
}

.icon-text p {
  font-size: 16px;
  font-family: "Chakra Petch", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.icon-text .material-symbols-outlined {
  font-size: 26px;
}

.mb-img-text p {
  font-family: "Chakra Petch", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.cart-count {
  right: 8%;
  top: 50%;
}

.dropdown-menus {
  position: absolute;
  width: auto;
  top: 40%;
  z-index: 99;
  background: #fff;
  border: 1px solid #111111;
  border-radius: 6px;
  margin-top: 10px;
  margin-left: -20px;
  padding: 10px;
  visibility: hidden;
  transition: 0.1s ease-out;
}
.language:hover .dropdown-menus {
  visibility: visible;
}

.language p {
  color: #111111;
}

.v-list-item {
  color: var(--font-color);
}

.v-navigation-drawer {
  background: var(--background-color);
}

.v-divider {
  color: var(--border-color);
}

/* ======== search results ============ */
.search-products {
  position: absolute;

  top: 100%;
  left: 50%;
  width: 90%;
  transform: translateY(0) translateX(-50%);
  z-index: 99999;
  pointer-events: auto;
  background-color: var(--search-background);
  display: flex;
  gap: 60px;
  transition: 0.3s ease;
  padding: 30px 40px;
  max-height: 700px;
  overflow-y: scroll;
}

.code {
  font-weight: 100;
}

.card img {
  border-radius: 6px;
}

.card {
  background: transparent;
  color: var(--search-text);
  border: 0.5px solid var(--search-border);
}

@media (max-width: 1920px) {
  .dropdowns {
    left: 8%;
  }

  .cart-count {
    right: 7.5%;
  }
}

@media (max-width: 1600px) {
  .dropdowns {
    left: 8.3%;
  }
  .cart-count {
    right: 8%;
  }
}

@media (max-width: 1400px) {
  .dropdowns {
    left: 6%;
  }
  .cart-count {
    right: 5%;
  }

  .content-wrapper {
    padding: 0px 1%;
  }
}

@media (max-width: 1280px) {
  /* .nav1 {
    display: block;
    padding: 0px 15px;
  }
  .nav2 {
    display: none;
  } */

  .dropdowns {
    left: 2%;
  }

  .nav2 {
    padding: 10px 0px;
  }

  .v-navigation-drawer {
    width: 500px !important;
  }

  .logo-img {
    margin-right: 40px;
  }

  .cart-count {
    right: 1%;
    padding: 5px 10px;
  }
}

@media (max-width: 1024px) {
  .cart-count {
    right: 1%;
    top: 48%;
  }

  .logo-img {
    width: 130px;
  }

  .upper-content-2 p {
    font-size: 13px;
  }

  .dropdowns {
    left: 1%;
  }
}

@media (max-width: 860px) {
  .nav1 {
    display: block;
  }
  .nav2 {
    display: none;
  }
  .logo-img {
    margin-left: 150px;
  }
  .mobile-view {
    height: max-content;
  }
  .icon-group .fa-solid {
    font-size: 22px;
  }
  .cart-count {
    right: 0;
    top: 0;
  }
  .icon-group {
    margin-right: 10px;
  }
  .navigation {
    width: auto !important;
  }
  .dropdown-menus {
    top: 60%;
  }
  .search-products {
    margin-top: 55px;
    background-color: transparent;
    max-height: 700px;
  }
}

@media (max-width: 600px) {
  .v-navigation-drawer {
    width: 320px !important;
  }
  .logo-img {
    margin-left: 40px;
  }

  .navigation {
    width: auto !important;
  }

  .icon-group .material-symbols-outlined {
    padding: 0px 8px;
    font-size: 20px;
  }

  .fav {
    color: var(--font-color);
  }

  .cart-count {
    right: 0;
    top: 0;
    padding: 2px 8px;
  }
  .icon-group .fa-solid {
    font-size: 20px;
  }
}
</style>
