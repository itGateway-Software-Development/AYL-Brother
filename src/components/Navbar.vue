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
              <v-list-item
                ><div class="logo-img-nav">
                  <img
                    src="../assets/romantic-logo.png"
                    alt=""
                    class="img-fluid"
                  /></div
              ></v-list-item>
              <v-divider></v-divider>
              <v-list-item link><p>New Arrival</p></v-list-item>
              <v-list-item link><p>Product</p></v-list-item>
              <v-list-item link><p>Boxer Briefs</p></v-list-item>
              <v-list-item link><p>Briefs</p></v-list-item>
              <v-list-item link><p>Promotion</p></v-list-item>
              <v-list-item link><p>Our Story</p></v-list-item>
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
              <span class="material-symbols-outlined"> shopping_bag </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="nav2">
      <div class="d-flex justify-content-between align-items-center">
        <div class="nav-text d-flex">
          <router-link to="#" class="pe-5 nav-link"
            ><p>New Arrival</p></router-link
          >
          <router-link to="#" class="pe-5 nav-link"><p>Product</p></router-link>
          <router-link to="#" class="pe-5 nav-link"
            ><p>Boxer Brief</p></router-link
          >
          <router-link to="#" class="pe-5 nav-link"><p>Brief</p></router-link>
          <router-link to="#" class="pe-5 nav-link"
            ><p>Promotion</p></router-link
          >
          <router-link to="#" class="pe-5 nav-link"
            ><p>Our Story</p></router-link
          >
        </div>
        <div class="nav-img">
          <router-link to="#"
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
          <router-link to="#" class="nav-link pe-4"
            ><span class="material-symbols-outlined">
              shopping_bag
            </span></router-link
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
    const drawer = ref(false);

    return { drawer };
  },
};
</script>

<style>
.nav1 {
  padding: 5;
  height: 50px;
  display: none;
}

.nav2 {
  width: 100%;
  height: 65px;
  cursor: pointer;
  background-color: #111111;
  position: fixed;
  padding: 5px;
  top: 0;
  left: 0;
  transition: bacground-color 0.4s ease-in-out;
  z-index: 9999;
}

.nav2.scrolled {
  background-color: #ffffff;
  opacity: 0.98;
}

#mobile-nav {
  align-content: start !important;
}
.v-divider {
  margin: 0;
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
}

.nav-text {
  padding: 5px;
  font-size: 20px;
  color: #fff;
}

.nav-icon .material-symbols-outlined {
  font-size: 26px;
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
  margin-right: 440px;
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

@media (max-width: 1200px) {
  .nav1 {
    display: block;
  }
  .nav2 {
    display: none;
  }
  .v-navigation-drawer {
    width: 500px !important;
  }
}

@media (max-width: 500px) {
  .nav1 {
    display: block;
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
}
</style>
