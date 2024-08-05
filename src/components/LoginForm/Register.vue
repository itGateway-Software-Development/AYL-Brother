<template>
  <div class="login-form">
    <div class="container content-wrapper login">
      <div class="form-heading">
        <div class="form-login">
          <div class="form-logo p-2">
            <img src="../../assets/romantic-logo.png" alt="" />
          </div>
          <div class="form-heading"><h4>Register Now</h4></div>
          <hr />
          <div class="group-form">
            <div class="check-form">
              <div class="form-check align-items-center">
                <input
                  class="form-check-input"
                  type="radio"
                  name="route"
                  value="/login"
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
                  checked
                  v-model="selectedRoute"
                  @change="changeRoute"
                />
                <label class="radiobutton_label"> I'm New to Romantic </label>
              </div>
            </div>
            <form @submit="submit">
              <div class="input-form text-start mb-5">
                <p class="mb-2">Enter your name</p>
                <div class="input-group mb-3">
                  <input
                    required
                    type="text"
                    v-model="form.userName"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <p class="mb-2">Enter your Phone Number</p>
                <div class="input-group mb-3">
                  <input
                    required
                    type="number"
                    v-model="form.phoneNumber"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <p class="mb-2">Enter your eamil</p>
                <div class="input-group mb-3">
                  <input
                    required
                    type="email"
                    v-model="form.email"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <p class="mb-2">Enter new password</p>
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
                <p
                  class="text-danger mb-3"
                  v-if="form.password.length < 6 && form.password.length > 0"
                >
                  You must enter at least 6 chracters
                </p>
                <p class="mb-2">Confirm your password</p>
                <div class="input-group mb-3">
                  <input
                    required
                    type="password"
                    v-model="form.cfpassword"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <p
                  class="text-danger mb-3"
                  v-if="form.password != form.cfpassword"
                >
                  Your password is unmatched
                </p>
                <p class="mb-2">Enter your Birthday</p>
                <div class="input-group mb-3">
                  <input
                    required
                    type="date"
                    v-model="form.birthday"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <p class="mb-2">Enter your Address</p>
                <div class="form-floating">
                  <textarea
                    required
                    class="form-control"
                    v-model="form.address"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style="height: 100px"
                  ></textarea>
                  <label for="floatingTextarea2">Address</label>
                </div>
              </div>
              <div class="login-btn-group">
                <button class="btn login-btn">Register Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import api from "@/service/api";
import Swal from "sweetalert2";
export default {
  setup() {
    const router = useRouter();
    const selectedRoute = ref("/");
    const TOTAL_AVAILABLE_POINTS_KEY = "totalAvailablePoints";
    const previousRoute = ref(null);

    // const userName = ref("");
    // const password = ref("");
    // const cfpassword = ref("");
    // const email = ref("");
    // const birthday = ref("");
    // const address = ref("");

    const form = ref({
      userName: "",
      phoneNumber: "",
      password: "",
      cfpassword: "",
      email: "",
      birthday: "",
      address: "",
    });

    let usePreviousRoute = () => {
      if (previousRoute.value == "/cart") {
        router.push("/cart");
      } else if (previousRoute.value == "/cart/checkout") {
        router.push("/cart/checkout");
      } else {
        router.push("/");
      }
    };

    const submit = async (e) => {
      e.preventDefault();
      let formDataToSend = new FormData();
      formDataToSend.append("name", form.value.userName);
      formDataToSend.append("phone", form.value.phoneNumber);
      formDataToSend.append("email", form.value.email);
      formDataToSend.append("password", form.value.password);
      formDataToSend.append("password_confirmation", form.value.cfpassword);
      formDataToSend.append("birthday", form.value.birthday);
      formDataToSend.append("address", form.value.address);
      try {
        let response = await axios.post(api.register, formDataToSend);
        if (response.status == 201) {
          let token = response.data.response.token;
          let user = response.data.response.user;
          let point = response.data.response.point;
          localStorage.setItem(TOTAL_AVAILABLE_POINTS_KEY, point);

          localStorage.setItem("Token", JSON.stringify(token));
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("isLogin", JSON.stringify(true));
          usePreviousRoute();
          Swal.fire({
            title: "Register Done",
            text: "You have finish registration and get 500 points for new user",
            icon: "success",
          });
        }
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Unauthorized",
          text: err.message,
        });
      }
    };

    const changeRoute = () => {
      router.push(selectedRoute.value);
    };

    onMounted(() => {
      const history = router.options.history.state.back;
      if (history) {
        previousRoute.value = history;
      }
    });
    return {
      selectedRoute,
      changeRoute,

      form,

      submit,
    };
  },
};
</script>

<style>
.login-form {
  margin-top: 150px;
}

.form-logo img {
  width: 150px;
}

.form-floating .form-control {
  border: 1px solid #111;
  border-radius: 5px;
}
</style>
