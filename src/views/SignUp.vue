<template>
  <div class="login-signup">
    <Login></Login>
    <Register></Register>
  </div>
</template>

<script>
import Register from "../components/LoginForm/Register";
import Login from "../components/LoginForm/Login";

export default {
  components: {
    Register,
    Login,
  },
};
</script>

<style>
.login-signup {
  margin: 100px 0px;
  width: 100%;
  height: 100%;
}
</style>
