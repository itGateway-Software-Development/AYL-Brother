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
                    type="text"
                    v-model="form.userName"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <p class="mb-2">Enter your eamil</p>
                <div class="input-group mb-3">
                  <input
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
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import api from "@/service/api";
export default {
  setup() {
    const router = useRouter();
    const selectedRoute = ref("/");
    const TOTAL_AVAILABLE_POINTS_KEY = "totalAvailablePoints";

    // const userName = ref("");
    // const password = ref("");
    // const cfpassword = ref("");
    // const email = ref("");
    // const birthday = ref("");
    // const address = ref("");

    const form = ref({
      userName: "",
      password: "",
      cfpassword: "",
      email: "",
      birthday: "",
      address: "",
    });

    const submit = async (e) => {
      e.preventDefault();
      let formDataToSend = new FormData();
      formDataToSend.append("name", form.value.userName);
      formDataToSend.append("email", form.value.email);
      formDataToSend.append("password", form.value.password);
      formDataToSend.append("password_confirmation", form.value.cfpassword);
      formDataToSend.append("birthday", form.value.birthday);
      formDataToSend.append("address", form.value.address);
      let response = await axios.post(api.register, formDataToSend);

      let token = response.data.response.token;
      let user = response.data.response.user;
      let point = response.data.response.point;
      localStorage.setItem(TOTAL_AVAILABLE_POINTS_KEY, point);

      localStorage.setItem("Token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/");
    };

    const changeRoute = () => {
      router.push(selectedRoute.value);
    };

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
