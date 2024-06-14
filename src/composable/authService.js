import axios from "axios";

const URL = "https://admin.romanticunderwear.com/api/v1/";

class AuthService {
  async login(user) {
    const response = await axios.post(URL + "login", {
      email: user.email,
      password: user.password,
    });

    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }
  logout() {
    localStorage.removeItem("user");
  }

  async register(user) {
    const response = await axios.post(URL + "register", {
      name: user.username,
      email: user.email,
      password: user.password,
      password_confirmation: user.password,
      birthday: user.birthday,
      address: user.address,
    });
    return response.data;
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
