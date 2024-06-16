<template>
  <div>
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
              <router-link to="/" class="nav-link mb-text"
                ><v-list-item><p>Home</p></v-list-item></router-link
              >
              <div class="d-flex align-items-center justify-content-between">
                <router-link to="/product" class="nav-link mb-text"
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
                <li class="mobile-dropdown-item">
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <router-link to="/products/bamboo/0" class="nav-link"
                      ><p>Bamboo Series</p>
                    </router-link>
                    <span
                      class="material-symbols-outlined pe-10"
                      type="button"
                      @click="bamboo = !bamboo"
                    >
                      keyboard_arrow_down
                    </span>
                  </div>
                  <ul class="mobile-sub-dropdown" v-if="bamboo">
                    <li class="mobile-sub-item">
                      <router-link to="/products/bamboo/8028" class="nav-link"
                        >RO: 8028</router-link
                      >
                    </li>
                    <li class="mobile-sub-item">
                      <router-link to="/products/bamboo/8027" class="nav-link"
                        >RO: 8027</router-link
                      >
                    </li>
                    <li class="mobile-sub-item">
                      <router-link to="/products/bamboo/8018" class="nav-link"
                        >RO: 8018</router-link
                      >
                    </li>
                    <li class="mobile-sub-item">
                      <router-link to="/products/bamboo/8017" class="nav-link"
                        >RO: 8017</router-link
                      >
                    </li>
                    <li class="mobile-sub-item">
                      <router-link to="/products/bamboo/8003" class="nav-link"
                        >RO: 8003</router-link
                      >
                    </li>
                    <li class="mobile-sub-item">
                      <router-link to="/products/bamboo/8004" class="nav-link"
                        >RO: 8004</router-link
                      >
                    </li>
                    <li class="mobile-sub-item">
                      <router-link to="/products/bamboo/9001" class="nav-link"
                        >RO: 9001</router-link
                      >
                    </li>
                    <li class="mobile-sub-item">
                      <router-link to="/products/bamboo/9002" class="nav-link"
                        >RO: 9002</router-link
                      >
                    </li>
                  </ul>
                </li>
                <hr />
                <li class="mobile-dropdown-item">
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <router-link to="/products/spandex/0" class="nav-link"
                      ><p>Spandex Series</p>
                    </router-link>
                    <span
                      class="material-symbols-outlined pe-10"
                      type="button"
                      @click="spandex = !spandex"
                    >
                      keyboard_arrow_down
                    </span>
                  </div>
                  <ul class="mobile-sub-dropdown" v-if="spandex">
                    <li class="mobile-sub-item">
                      <router-link to="/products/spandex/5002" class="nav-link"
                        >RO: 5002</router-link
                      >
                    </li>
                    <li class="mobile-sub-item">
                      <router-link to="/products/spandex/5003" class="nav-link"
                        >RO: 5003</router-link
                      >
                    </li>
                    <li class="mobile-sub-item">
                      <router-link to="/products/spandex/5012" class="nav-link"
                        >RO: 5012</router-link
                      >
                    </li>
                  </ul>
                </li>
                <hr />
                <li class="mobile-dropdown-item">
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <router-link to="/products/lycra/0" class="nav-link"
                      ><p>Lycra Modal Series</p>
                    </router-link>
                    <span
                      class="material-symbols-outlined pe-10"
                      type="button"
                      @click="modal = !modal"
                    >
                      keyboard_arrow_down
                    </span>
                  </div>
                  <ul class="mobile-sub-dropdown" v-if="modal">
                    <li class="mobile-sub-item">
                      <router-link to="/products/lycra/8076" class="nav-link"
                        >RO: 8076</router-link
                      >
                    </li>
                    <li class="mobile-sub-item">
                      <router-link to="/products/lycra/8077" class="nav-link"
                        >RO: 8077</router-link
                      >
                    </li>
                  </ul>
                </li>
                <hr />
              </ul>

              <router-link to="/" class="nav-link mb-text"
                ><v-list-item><p>Promotion</p></v-list-item></router-link
              >
              <router-link to="/" class="nav-link mb-text"
                ><v-list-item><p>Our Story</p></v-list-item></router-link
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
              <v-list-item link v-else
                ><router-link class="nav-link" to="/login"
                  ><span class="material-symbols-outlined">
                    account_circle
                  </span></router-link
                ></v-list-item
              >

              <v-list-item link
                ><span class="material-symbols-outlined">
                  favorite
                </span></v-list-item
              >
            </v-navigation-drawer>
          </div>
        </div>
        <div class="logo-img">
          <img src="../assets/romantic-logo.png" alt="" class="img-fluid" />
        </div>
        <div class="icon-group">
          <ul class="d-flex">
            <li class="">
              <span class="material-symbols-outlined"> search </span>
            </li>
            <li class="">
              <router-link to="/cart" class="nav-link">
                <span class="material-symbols-outlined"> shopping_bag </span>
                <span v-if="cartItemCount > 0" class="cart-count">{{
                  cartItemCount
                }}</span></router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="nav2" id="nav2">
      <div class="upper-nav container content-wrapper">
        <div class="d-flex justify-content-between align-items-center">
          <div class="logo-img">
            <router-link to="/">
              <img src="../assets/romantic-logo.png" class="img-fluid" alt=""
            /></router-link>
          </div>
          <div class="upper-nav-icon">
            <div class="icon-group d-flex justify-content-around">
              <span class="material-symbols-outlined"> language </span>
              <div v-if="userLogin" class="px-3">
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
                        class="dropdown-item d-flex align-items-center img-text"
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
                        to="/"
                        ><span class="material-symbols-outlined"> person </span>
                        <p>My Profile</p>
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        class="dropdown-item d-flex align-items-center icon-text nav-link"
                        to="/"
                        ><span class="material-symbols-outlined">
                          settings
                        </span>
                        <p>Settings</p></router-link
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
                        <p>Logout</p>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <router-link to="/login" class="nav-link btn" v-else
                ><span class="material-symbols-outlined">
                  person
                </span></router-link
              >

              <span class="material-symbols-outlined"> favorite </span>
              <router-link to="/cart" class="nav-link"
                ><span class="material-symbols-outlined"> shopping_bag </span>
                <span v-if="cartItemCount > 0" class="cart-count">{{
                  cartItemCount
                }}</span></router-link
              >
            </div>
          </div>
        </div>
      </div>

      <div class="lower-nav container content-wrapper">
        <div class="d-flex justify-content-between align-items-center">
          <div class="nav-text-content">
            <div class="d-flex justify-content-around text-group">
              <ul class="d-flex justify-content-around text-group">
                <li>
                  <router-link to="/" class="nav-link">
                    <p>Home</p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/product" class="nav-link">
                    <p class="nav-p">Product</p>
                    <ul class="dropdowns">
                      <li class="dropdown-items">
                        <router-link
                          to="/products/bamboo/0"
                          class="dropdown-link"
                          >Bamboo Fiber</router-link
                        >
                        <ul class="dropdown-submenu">
                          <li class="dropdown-submenu-item">
                            <router-link
                              to="/products/bamboo/8028"
                              class="dropdown-link"
                              >RO: 8028</router-link
                            >
                          </li>
                          <li class="dropdown-submenu-item">
                            <router-link
                              to="/products/bamboo/8027"
                              class="dropdown-link"
                              >RO: 8027</router-link
                            >
                          </li>
                          <li class="dropdown-submenu-item">
                            <router-link
                              to="/products/bamboo/8018"
                              class="dropdown-link"
                              >RO: 8018</router-link
                            >
                          </li>
                          <li class="dropdown-submenu-item">
                            <router-link
                              to="/products/bamboo/8017"
                              class="dropdown-link"
                              >RO: 8017</router-link
                            >
                          </li>
                          <li class="dropdown-submenu-item">
                            <router-link
                              to="/products/bamboo/8003"
                              class="dropdown-link"
                              >RO: 8003</router-link
                            >
                          </li>
                          <li class="dropdown-submenu-item">
                            <router-link
                              to="/products/bamboo/8004"
                              class="dropdown-link"
                              >RO: 8004</router-link
                            >
                          </li>
                          <li class="dropdown-submenu-item">
                            <router-link
                              to="/products/bamboo/9001"
                              class="dropdown-link"
                              >RO: 9001</router-link
                            >
                          </li>
                          <li class="dropdown-submenu-item">
                            <router-link
                              to="/products/bamboo/9002"
                              class="dropdown-link"
                              >RO: 9002</router-link
                            >
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown-items">
                        <router-link
                          to="/products/spandex/0"
                          class="dropdown-link"
                        >
                          Spandex Series</router-link
                        >
                        <ul class="dropdown-submenu">
                          <li class="dropdown-submenu-item">
                            <router-link
                              to="/products/spandex/5002"
                              class="dropdown-link"
                              >RO: 5002</router-link
                            >
                          </li>
                          <li class="dropdown-submenu-item">
                            <router-link
                              to="/products/spandex/5003"
                              class="dropdown-link"
                              >RO: 5003</router-link
                            >
                          </li>
                          <li class="dropdown-submenu-item">
                            <router-link
                              to="/products/spandex/5012"
                              class="dropdown-link"
                              >RO: 5012</router-link
                            >
                          </li>
                          <li class="dropdown-submenu-item">
                            <router-link
                              to="/products/spandex/5013"
                              class="dropdown-link"
                              >RO: 5013</router-link
                            >
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown-items">
                        <router-link
                          to="/products/lycra/0"
                          class="dropdown-link"
                          >Lycra Modal Series</router-link
                        >
                        <ul class="dropdown-submenu">
                          <li class="dropdown-submenu-item">
                            <router-link
                              to="/products/lycra/8076"
                              class="dropdown-link"
                              >RO: 8076</router-link
                            >
                          </li>
                          <li class="dropdown-submenu-item">
                            <router-link
                              to="/products/lycra/8077"
                              class="dropdown-link"
                              >RO: 8077</router-link
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </router-link>
                </li>
                <li>
                  <router-link to="/" class="nav-link">
                    <p>Promotion</p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/" class="nav-link">
                    <p>Our Story</p>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="nav-search">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <span class="material-symbols-outlined input-group-text">
                search
              </span>
            </div>
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

export default {
  setup() {
    const store = useStore();
    const route = useRoute();

    const drawer = ref(false);
    const mobileDropdown = ref(false);
    const bamboo = ref(false);
    const modal = ref(false);
    const spandex = ref(false);
    const isHovered = ref(false);
    const userAccount = ref(false);
    const userLogin = ref();
    const user = ref();

    const logout = () => {
      localStorage.removeItem("user");
      localStorage.removeItem("Token");
      localStorage.removeItem("totalAvailablePoints");
      localStorage.removeItem("isLogin");
      router.push("/login");
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

    onMounted(() => {});

    watch(route, () => {
      userLogin.value = JSON.parse(localStorage.getItem("isLogin"));
      user.value = JSON.parse(localStorage.getItem("user"));
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
    };
  },
};
</script>

<style>
.nav1 {
  padding: 5px;
  height: 50px;
  display: none;
}

.icon-group .material-symbols-outlined {
  padding: 0px 15px;
  font-size: 28px;
}

.nav-text-content .text-group p {
  padding: 0px 20px;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 400;
}

.nav-search .form-control {
  border-radius: 50px;
}

.nav-search .input-group-text {
  border-radius: 50px;
  color: #111111;
  background: #fff;
  border-left: 0px;
}

.cart-count {
  position: absolute;
  right: 5%;
  top: 5px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 12px;
}

.nav2 {
  width: 100%;
  height: max-content;
  cursor: pointer;
  background-color: #fff;
  position: fixed;
  padding: 5px 55px;
  padding-bottom: 10px;
  top: 0;
  left: 0;
  transition: bacground-color 0.4s ease-in-out;
  border-bottom: 0.5px solid #f2f2f2;
  z-index: 9999;
}

.nav2.scrolled {
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
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
  color: #111111;
  transition: color 0.4 ease-in-out;
}

.nav2.scrolled .nav-text {
  color: #fff;
}

.nav2 .nav-icon .material-symbols-outlined {
  font-size: 26px;
  color: #111111;
  transition: color 0.4 ease-in-out;
}

.nav2.scrolled .nav-icon .material-symbols-outlined {
  color: #fff;
}

.logo-img {
  width: 150px;
  margin-left: 10px;
}

.logo-img-nav {
  width: 120px;
  padding: 0;
  margin: 0;
}

.nav-img {
  width: 120px;
  margin-right: 160px;
}

.nav-link:hover {
  color: red;
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
  left: 22.5%;
  top: 100%;
  background: #fff;
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 1;
  border: 1px solid lightgray;
  border-radius: 2px;
  transition: 0.5s ease-out;
}

.dropdown-submenu {
  visibility: hidden;
  position: absolute;
  left: 100%;
  top: 0;
  background: #fff;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border: 1px solid lightgray;
}

.dropdown-items,
.dropdown-submenu-item {
  position: relative;
  z-index: 1;
  text-align: start;
  border-bottom: 0.1px solid #111111;
  font-size: 14px;
}

.dropdown-link,
.dropdown-submenu-link {
  color: #111111;
  padding: 1rem;
  text-decoration: none;
  display: block;
  width: 180px;
  padding: auto 20px;
  z-index: 1;
}

.dropdown-link:hover,
.dropdown-submenu-link:hover {
  background-color: #f2f2f2;
  color: red;
}

.nav-link:hover > .dropdowns,
.dropdown-items:hover > .dropdown-submenu {
  visibility: visible;
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

.img-text img {
  margin-right: 20px;
  width: 50px;
}

.img-text h5 {
  margin-top: 10px;
}

.icon-text {
  height: 50px;
}

.dropdown-menu {
  width: 180px;
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
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 5;
}

.icon-text p {
  font-size: 16px;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.icon-text .material-symbols-outlined {
  font-size: 26px;
}

.mb-img-text p {
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-style: normal;
}

@media (max-width: 1920px) {
  .cart-count {
    right: 16.3%;
  }
}

@media (max-width: 1600px) {
  .cart-count {
    right: 9.5%;
  }
  .dropdowns {
    left: 17.5%;
  }
}

@media (max-width: 1400px) {
  .dropdowns {
    left: 14%;
  }
}

@media (max-width: 1200px) {
  /* .nav1 {
    display: block;
    padding: 0px 15px;
  }
  .nav2 {
    display: none;
  } */
  .dropdowns {
    left: 16%;
  }

  .v-navigation-drawer {
    width: 500px !important;
  }

  .logo-img {
    margin-right: 40px;
  }

  .cart-count {
    right: 5.5%;
    padding: 5px 10px;
  }
}

@media (max-width: 1024px) {
  .cart-count {
    right: 6.5%;
  }

  .dropdowns {
    left: 19.5%;
  }
}

@media (max-width: 800px) {
  .nav1 {
    display: block;
  }
  .nav2 {
    display: none;
  }
  .logo-img {
    margin: 0px;
  }
  .mobile-view {
    height: max-content;
  }
}

@media (max-width: 500px) {
  .v-navigation-drawer {
    width: 320px !important;
  }
  .logo-img {
    margin-left: 40px;
  }

  .icon-group .material-symbols-outlined {
    padding: 0px 8px;
    font-size: 20px;
  }

  .cart-count {
    right: 5px;
    top: 15px;
    padding: 2px 5px;
  }
}
</style>
