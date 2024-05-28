<template>
  <div>
    <div class="nav1">
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
              <router-link to="/product" class="nav-link mb-text"
                ><v-list-item><p>Product</p></v-list-item></router-link
              >

              <router-link to="/" class="nav-link mb-text"
                ><v-list-item><p>Promotion</p></v-list-item></router-link
              >
              <router-link to="/" class="nav-link mb-text"
                ><v-list-item><p>Our Story</p></v-list-item></router-link
              >
              <v-list-item link
                ><span class="material-symbols-outlined">
                  account_circle
                </span></v-list-item
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
            <li class="p-2">
              <span class="material-symbols-outlined"> search </span>
            </li>
            <li class="p-2">
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
      <div class="d-flex justify-content-between align-items-center">
        <div class="nav-text d-flex">
          <router-link to="/" class="pe-5 nav-link"><p>Home</p></router-link>
          <router-link to="/product" class="pe-5 nav-link"
            ><p>Product</p></router-link
          >

          <router-link to="#" class="pe-5 nav-link"
            ><p>Promotion</p></router-link
          >
          <router-link to="#" class="pe-5 nav-link"
            ><p>Our Story</p></router-link
          >
        </div>
        <div class="nav-img">
          <router-link to="/"
            ><img
              src="../assets/romantic-logo.png"
              alt="logo"
              class="img-fluid"
          /></router-link>
        </div>
        <div class="d-flex nav-icon">
          <router-link to="#" class="nav-link pe-4"
            ><span class="material-symbols-outlined">
              search
            </span></router-link
          >
          <router-link to="#" class="nav-link pe-4"
            ><span class="material-symbols-outlined">
              account_circle
            </span></router-link
          >
          <router-link to="#" class="nav-link pe-4"
            ><span class="material-symbols-outlined">
              favorite
            </span></router-link
          >
          <router-link to="/cart" class="nav-link pe-4"
            ><span class="material-symbols-outlined"> shopping_bag </span>
            <span v-if="cartItemCount > 0" class="cart-count">{{
              cartItemCount
            }}</span></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { mapGetters, mapMutations, useStore } from "vuex";

export default {
  setup() {
    const drawer = ref(false);

    const store = useStore();
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

    return { drawer, cartItemCount };
  },
};
</script>

<style>
.nav1 {
  padding: 5px;
  height: 50px;
  display: none;
}

.cart-count {
  position: absolute;
  right: 55px;
  top: 2px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 12px;
}

.nav2 {
  width: 100%;
  height: 65px;
  cursor: pointer;
  background-color: #fff;
  position: fixed;
  padding: 5px 55px;
  top: 0;
  left: 0;
  transition: bacground-color 0.4s ease-in-out;
  z-index: 9999;
}

.nav2.scrolled {
  background-color: #111111;
  opacity: 0.98;
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
  width: 120px;
  margin-left: 70px;
}

.logo-img-nav {
  width: 120px;
  padding: 0;
  margin: 0;
}

.nav-img {
  width: 120px;
  margin-right: 350px;
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

@media (max-width: 1200px) {
  .nav1 {
    display: block;
    padding: 0px 15px;
  }
  .nav2 {
    display: none;
  }
  .v-navigation-drawer {
    width: 500px !important;
  }

  .cart-count {
    right: 5px;
    padding: 5px 10px;
  }
}

@media (max-width: 500px) {
  .nav1 {
    display: block;
    padding: 0px;
  }
  .nav2 {
    display: none;
  }
  .v-navigation-drawer {
    width: 320px !important;
  }
  .logo-img {
    margin-left: 40px;
  }

  .cart-count {
    right: 0px;
    padding: 3px 5px;
  }
}
</style>
