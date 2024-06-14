import { ref } from "vue";

import authService from "./authService";

const user = ref(authService.getCurrentUser());
const isAuthenticated = ref(!!user.value);

export default function useAuth() {
  const login = async (userData) => {
    try {
      const response = await authService.login(userData);
      user.value = response;
      isAuthenticated.value = true;
      return response;
    } catch (error) {
      isAuthenticated.value = false;
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    user.value = null;
    isAuthenticated.value = false;
  };

  const register = async (userData) => {
    try {
      const response = await authService.register(userData);
      return response;
    } catch (error) {
      throw error;
    }
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
    register,
  };
}
