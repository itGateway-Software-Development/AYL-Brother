<template>
  <div class="profile">
    <div class="content-wrapper">
      <div class="mobile-toggle">
        <div class="d-flex justify-content-between align-items-center">
          <h5>Information</h5>
          <div class="mobile">
            <div class="app-bar d-flex">
              <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
                variant="text"
                class="app-bar"
              >
                <span class="material-symbols-outlined"> page_info </span>
              </v-app-bar-nav-icon>
              <v-navigation-drawer
                v-model="drawer"
                :location="$vuetify.display.mobile ? 'bottom' : undefined"
                temporary
              >
                <!-- <v-list-item
                  ><div class="filter-header">
                    <div class="d-flex justify-content-between mb-5">
                      <h4 class="fw-bold mt-3">Information</h4>
                      <v-app-bar-nav-icon
                        @click.stop="drawer = !drawer"
                        variant="text"
                      >
                        <span class="material-symbols-outlined">
                          close
                        </span></v-app-bar-nav-icon
                      >
                    </div>
                  </div></v-list-item
                > -->
                <v-list lines="one" v-if="user" class="text-start">
                  <div class="d-flex justify-content-between mb-5">
                    <v-list-item
                      :title="`${user.name}`"
                      :prepend-avatar="`https://ui-avatars.com/api/?background=ff0000&color=fff&name=${user.name}`"
                    ></v-list-item>
                    <v-app-bar-nav-icon
                      @click.stop="drawer = !drawer"
                      variant="text"
                    >
                      <span class="material-symbols-outlined">
                        close
                      </span></v-app-bar-nav-icon
                    >
                  </div>

                  <v-divider></v-divider>
                  <v-list-item
                    class="acc-link"
                    color="primary"
                    :class="{ active: tab == 'info' }"
                    @click="tab = 'info'"
                    ><p>Account Information</p></v-list-item
                  >
                  <!-- <v-list-item
              class="acc-link"
              color="primary"
              :class="{ active: tab == 'order' }"
              @click="tab = 'order'"
              ><p>My Orders</p></v-list-item
            > -->
                  <v-list-item
                    class="acc-link"
                    color="primary"
                    :class="{ active: tab == 'history' }"
                    @click="tab = 'history'"
                    ><p>Orders History</p></v-list-item
                  >
                  <v-list-item
                    class="acc-link"
                    color="primary"
                    :class="{ active: tab == 'points' }"
                    @click="tab = 'points'"
                    ><p>My Points</p></v-list-item
                  >
                  <v-list-item
                    class="acc-link"
                    color="primary"
                    @click="logout()"
                    ><p>Logout</p></v-list-item
                  >
                </v-list>
              </v-navigation-drawer>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="nav-list desktop">
          <v-list lines="one" v-if="user" class="text-start">
            <v-list-item
              :title="`${user.name}`"
              :prepend-avatar="`https://ui-avatars.com/api/?background=ff0000&color=fff&name=${user.name}`"
            ></v-list-item>
            <v-divider></v-divider>
            <v-list-item
              class="acc-link"
              color="primary"
              :class="{ active: tab == 'info' }"
              @click="tab = 'info'"
              ><p>Account Information</p></v-list-item
            >
            <!-- <v-list-item
              class="acc-link"
              color="primary"
              :class="{ active: tab == 'order' }"
              @click="tab = 'order'"
              ><p>My Orders</p></v-list-item
            > -->
            <v-list-item
              class="acc-link"
              color="primary"
              :class="{ active: tab == 'history' }"
              @click="tab = 'history'"
              ><p>Orders History</p></v-list-item
            >
            <v-list-item
              class="acc-link"
              color="primary"
              :class="{ active: tab == 'points' }"
              @click="tab = 'points'"
              ><p>My Points</p></v-list-item
            >
            <v-list-item class="acc-link" color="primary" @click="logout()"
              ><p>Logout</p></v-list-item
            >
          </v-list>
        </div>

        <div class="detail" v-if="tab == 'info'">
          <div class="detail-header d-flex"><h3>Account Information</h3></div>
          <v-divider></v-divider>

          <div class="detail-body">
            <div class="d-flex align-items-center body-content text-start">
              <p class="body-text">Name: <span>*</span></p>
              <div class="input-field">
                <v-text-field
                  label="Your Name"
                  type="text"
                  placeholder="Change your name"
                  variant="plain"
                  required
                  v-model="name"
                ></v-text-field>
              </div>
            </div>
            <v-divider></v-divider>
            <div class="d-flex align-items-center body-content text-start">
              <p class="body-text">Email: <span>*</span></p>
              <div class="input-field">
                <v-text-field
                  label="Email"
                  type="email"
                  placeholder="Change your Email"
                  variant="plain"
                  required
                  v-model="email"
                ></v-text-field>
              </div>
            </div>
            <v-divider></v-divider>
            <div class="d-flex align-items-center body-content text-start">
              <p class="body-text">Password: <span>*</span></p>
              <div class="input-field">
                <v-text-field
                  label="Your Password"
                  type="password"
                  placeholder="Change your Password"
                  variant="plain"
                  required
                  v-model="password"
                ></v-text-field>
              </div>
            </div>
            <v-divider></v-divider>
            <div class="d-flex align-items-center body-content text-start">
              <p class="body-text">Phone Number: <span>*</span></p>
              <div class="input-field">
                <v-text-field
                  label="Phone Number"
                  type="number"
                  placeholder="Change your Phone Number"
                  variant="plain"
                  required
                  v-model="phoneNumber"
                ></v-text-field>
              </div>
            </div>
            <v-divider></v-divider>
            <div class="d-flex align-items-center body-content text-start">
              <p class="body-text">Address: <span>*</span></p>
              <div class="input-field">
                <v-text-field
                  label="Address"
                  type="text"
                  placeholder="Change your Address"
                  variant="plain"
                  required
                  v-model="address"
                ></v-text-field>
              </div>
            </div>
            <v-divider></v-divider>
          </div>
          <div class="detail-button mt-5 d-none">
            <button class="btn detail-btn">Edit</button>
          </div>
        </div>

        <div class="detail" v-if="tab == 'history'">
          <MyOrder></MyOrder>
        </div>
        <div class="detail" v-if="tab == 'points'">
          <MyPoint></MyPoint>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyOrder from "../components/MyOrder";
import MyPoint from "../components/MyPoint";
import { ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    MyOrder,
    MyPoint,
  },
  setup() {
    const router = useRouter();
    const userLogin = ref();
    const user = ref();
    const tab = ref("info");
    const name = ref("");
    const phoneNumber = ref("");
    const password = ref("");
    const email = ref("");
    const address = ref("");
    const drawer = ref(false);

    const logout = () => {
      localStorage.removeItem("user");
      localStorage.removeItem("Token");
      localStorage.removeItem("totalAvailablePoints");
      localStorage.removeItem("isLogin");
      localStorage.removeItem("pointHistory");
      localStorage.removeItem("orderHistroy");
      router.push("/login");
    };

    // watch(route, () => {
    //   userLogin.value = JSON.parse(localStorage.getItem("isLogin"));
    //   user.value = JSON.parse(localStorage.getItem("user"));
    // });

    onMounted(() => {
      user.value = JSON.parse(localStorage.getItem("user"));
    });

    watch(user, () => {
      if (user.value) {
        name.value = user.value.name;
        phoneNumber.value = user.value.phone;
        address.value = user.value.address;
        email.value = user.value.email;
        password.value = user.value.password;
      } else if (!user.value) {
        name.value = "";
        phoneNumber.value = "";
        address.value = "";
        email.value = "";
        password.value = "";
      }
    });

    return {
      user,
      userLogin,
      tab,
      logout,
      name,
      password,
      email,
      address,
      phoneNumber,
      drawer,
    };
  },
};
</script>

<style scoped>
.profile {
  margin: 150px 0px;
}

.mobile-toggle {
  display: none;
}

.nav-list {
  width: 300px;
  height: 100%;
  border-right: 1px solid #b7b7b7;
}

.v-list {
  background: #f2f2f2 !important;
}

.detail {
  width: 100%;
  height: 100%;
  padding: 30px;
  color: var(--font-color);
}

.acc-link {
  cursor: pointer;
  border: 0.5px solid #b7b7b7 !important;
  padding: 20px !important;
}

.v-divider {
  margin-bottom: 0px;
}

.acc-link.active {
  background: #111111 !important;
  color: #fff !important;
  border: 1px solid red !important;
}

.body-content {
  align-content: center;
  text-align: center;
  align-items: center;
  margin: 15px 0px;
  padding: 0px 20px;
}

.body-text {
  margin-top: -5px;
  width: 400px;
}

.body-text span {
  color: red;
}

.input-field {
  width: 100%;
}

.detail-button {
  justify-content: start;
  display: flex;
}

.detail-btn {
  position: relative;
  width: 150px;
  height: auto;
  margin-top: 10px;
  padding: 5px 40px;
  border: 1px solid red;
  border-radius: 6px;
  color: #111;
  background: red;
  z-index: 1;
  transition: 1s;
}

.detail-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 6px;
  z-index: -1;
  transform-origin: left;
  transition: transform 1s ease;
  transform: scaleX(1);
}

.detail-btn:hover {
  background: red;
  color: #fff;
}

.detail-btn:hover::before {
  transform-origin: right;
  transition: transform 0.5s ease;
  transform: scaleX(0);
}

.detail-btn:hover {
  color: #fff;
  background: red;
}

@media (max-width: 800px) {
  .content-wrapper {
    padding: 0px 1%;
  }
  .profile {
    margin: 80px 0px;
  }

  .desktop {
    display: none;
  }
  .v-navigation-drawer {
    width: 1200px !important;
    height: 1200px !important;
    overflow: scroll;
  }

  .detail {
    padding: 10px;
  }

  .mobile-toggle {
    display: block;
    padding: 10px;
  }
  .v-list {
    background: none !important;
  }
}
</style>
