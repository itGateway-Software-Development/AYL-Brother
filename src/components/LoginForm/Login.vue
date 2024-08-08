<template>
  <div class="login-form">
    <div class="container content-wrapper login">
      <div class="form-heading">
        <div class="form-login">
          <div class="form-logo p-2">
            <img src="../../assets/romantic-logo.png" alt="" />
          </div>
          <div class="form-heading"><h4>Welcome</h4></div>
          <hr />
          <div class="group-form">
            <div class="check-form">
              <div class="form-check align-items-center">
                <input
                  class="form-check-input"
                  type="radio"
                  name="route"
                  value="/login"
                  checked
                  v-model="selectedRoute"
                  @change="changeRoute"
                />
                <label class="radiobutton_label"> I'm Already Member </label>
              </div>
              <div class="form-check align-items-center">
                <input
                  class="form-check-input"
                  type="radio"
                  name="route"
                  value="/register"
                  v-model="selectedRoute"
                  @change="changeRoute"
                />
                <label class="radiobutton_label"> I'm New to Romantic </label>
              </div>
            </div>
            <form @submit="sumbit">
              <div class="input-form text-start mb-5">
                <p class="mb-2">Email</p>
                <div class="input-group mb-3">
                  <input
                    required
                    type="text"
                    v-model="form.email"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <p class="mb-2">Password</p>
                <div class="input-group mb-3">
                  <input
                    required
                    type="password"
                    v-model="form.password"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
              </div>
              <div class="login-btn-group">
                <button class="btn login-btn">Login</button>
              </div>
            </form>
            <div class="f-pass mt-5 text-start">
              <p>Forget Password?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watch } from "vue";
import {
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
  useRoute,
  useRouter,
} from "vue-router";
import axios from "axios";
import api from "@/service/api";
import { useStore } from "vuex";
import Swal from "sweetalert2";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const selectedRoute = ref("/");
    const currentRoute = useRoute();
    const previousRoute = ref(null);

    const isUser = ref(true);

    const chageUserLogin = () => {
      store.dispatch("changeisLogin", isUser.value);
    };

    const changeRoute = () => {
      router.push(selectedRoute.value);
    };

    let usePreviousRoute = () => {
      if (previousRoute.value == "/cart") {
        router.push("/cart");
      } else if (previousRoute.value == "/cart/checkout") {
        router.push("/cart/checkout");
      } else {
        router.push("/");
      }
    };

    let form = ref({
      email: "",
      password: "",
    });

    let sumbit = async (e) => {
      e.preventDefault();
      let formDataToSend = new FormData();
      formDataToSend.append("email", form.value.email);
      formDataToSend.append("password", form.value.password);
      try {
        let response = await axios.post(api.login, formDataToSend);
        console.log(response);
        if (response.status == 201) {
          localStorage.setItem(
            "user",
            JSON.stringify(response.data.response.user)
          );
          localStorage.setItem(
            "Token",
            JSON.stringify(response.data.response.token)
          );
          let point = response.data.response.point;
          store.dispatch("saveAvaliabePoints", point);
          localStorage.setItem(
            "pointHistory",
            JSON.stringify(response.data.response.point_history)
          );
          localStorage.setItem(
            "orderHistroy",
            JSON.stringify(response.data.response.order)
          );

          localStorage.setItem("isLogin", JSON.stringify(true));

          usePreviousRoute();
          // router.push(redirect);
        }
      } catch (error) {
        if (error.response && error.response.status) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong Username & Password!",
          });
        } else {
          console.log(error);
        }
      }
    };

    // watch(route, () => {
    //   const history = router.options.history.state.back;
    //   if (history) {
    //     previousRoute.value = history;
    //     console.log(previousRoute.value);
    //   }
    //   console.log("hello");
    // });

    onMounted(() => {
      const history = router.options.history.state.back;
      if (history) {
        previousRoute.value = history;
      }
      // onBeforeRouteUpdate((to, from) => {
      //   previousRoute.value = from;
      //   console.log(previousRoute.value);
      // });

      // onBeforeRouteLeave((to, from) => {
      //   previousRoute.value = from;
      //   console.log(previousRoute.value);
      // });
    });

    return {
      selectedRoute,
      changeRoute,
      form,
      sumbit,
      previousRoute,
    };
  },
};
</script>

<style>
.login-form {
  margin: 150px 0px;
  color: var(--font-color);
}

.form-login {
  width: 500px;
  margin: 0px auto;
}

.form-logo img {
  width: 150px;
}

.form-heading h4 {
  font-family: "Kanit", sans-serif;
  font-weight: 100;
  font-style: normal;
  color: var(--font-color);
}

.check-form {
  margin-bottom: 30px;
}

.group-form {
  justify-content: center;
  margin: 0px 50px;
}

.form-check {
  display: flex;
  justify-content: start;
  text-align: start;
  margin: 15px 0px;
  flex-wrap: wrap;
  -webkit-box-align: center;
}

.form-check-label {
  text-align: center;
}

.form-check-input {
  width: 25px;
  height: 25px;
  margin-right: 16px;
}

.radiobutton_label {
  max-width: calc(100% -54px);
  font-size: 16px;
  font-family: "Kanit", sans-serif;
  font-weight: 500;
  font-style: normal;
  margin-top: 3px;
}

.form-check-input:checked {
  background-color: red;
  border-color: red;
}

.input-form .input-group {
  width: 400px;
  height: 50px;
  border: 1px solid #111;
  border-radius: 5px;
}

.login-btn-group {
  margin-top: 30px;
}

.login-btn {
  position: relative;
  width: 400px;
  height: 40px;
  margin-top: 10px;
  padding: 5px 40px;
  border: 1px solid red;
  border-radius: 6px;
  color: #ffffff;
  background: red;
  z-index: 1;
  transition: 1s;
}

.login-btn:hover {
  background: red;
  color: #fff;
}

.f-pass {
  text-decoration: underline;
}

@media (max-width: 800px) {
  .login-form {
    margin: 50px auto;
  }

  .form-logo {
    display: none;
  }
}

@media (max-width: 500px) {
  .input-form .input-group {
    width: 300px;
  }
  .login-btn {
    width: 300px;
  }

  .form-login {
    width: 390px;
  }
  .group-form {
    margin: 0px 15px;
    padding: 0px 30px;
  }
}

@media (max-width: 375px) {
  .input-form .input-group {
    width: 300px;
  }
  .login-btn {
    width: 300px;
  }

  .form-login {
    width: 375px;
  }

  .group-form {
    margin: 0px 10px;
    padding: 0px 20px;
  }
}
</style>
