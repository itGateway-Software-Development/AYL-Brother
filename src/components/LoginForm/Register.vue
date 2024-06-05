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
            <div class="input-form text-start mb-5">
              <p class="mb-2">Enter your email</p>
              <div class="input-group mb-3">
                <input
                  type="text"
                  v-model="email"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <p class="mb-2">Create New Password</p>
              <div class="input-group mb-3">
                <input
                  type="text"
                  v-model="password"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <p class="mb-2">Confirm your Password</p>
              <div class="input-group mb-3">
                <input
                  type="text"
                  v-model="cfpassword"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <p class="mb-2">Enter your Name</p>
              <div class="input-group mb-3">
                <input
                  type="text"
                  v-model="userName"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <p class="mb-2">Enter your Birthday</p>
              <div class="input-group mb-3">
                <input
                  type="date"
                  v-model="birthday"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <p class="mb-2">Enter your Address</p>
              <div class="form-floating">
                <textarea
                  class="form-control"
                  v-model="address"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style="height: 100px"
                ></textarea>
                <label for="floatingTextarea2">Address</label>
              </div>
            </div>
            <div class="login-btn-group">
              <div class="btn login-btn">Register Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const selectedRoute = ref("/");

    const userName = ref("");
    const password = ref("");
    const cfpassword = ref("");
    const email = ref("");
    const birthday = ref("");
    const address = ref("");

    const changeRoute = () => {
      router.push(selectedRoute.value);
    };

    return {
      selectedRoute,
      changeRoute,
      userName,
      password,
      cfpassword,
      email,
      birthday,
      address,
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
