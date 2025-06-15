import { create } from "zustand";
import axiosInstance from "../lib/axios";
import { signupApi, loginApi, logoutApi } from "../api/auth";

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  files: [],

  signup: async (formData) => {
    set({ loading: true });
    try {
      const response = await signupApi(formData);
      if (response.status) {
        set({
          user: response.data.user,
          isAuthenticated: true,
          loading: false,
        });
      } else {
        set({ error: "Signup failed", loading: false });
      }
    } catch (error) {
      set({ error: error.message });
    }
  },

  login: async (credentials) => {
    set({ loading: true });
    try {
      const response = await loginApi(credentials);
      if (response.status) {
        set({
          user: response.data.user,
          isAuthenticated: true,
          loading: false,
        });
      } else {
        set({ error: "Login failed", loading: false });
      }
    } catch (error) {
      set({ error: error.message });
    }
  },

  logout: async () => {
    set({ loading: true });
    try {
      const response = await logoutApi();
      if (response.status) {
        set({
          user: null,
          isAuthenticated: false,
          loading: false,
        });
      } else {
        set({ error: "Logout failed", loading: false });
      }
    } catch (error) {
      set({ error: error.message });
    }
  },

  getMe: async () => {
    set({ loading: true });
    try {
      const res = await axiosInstance.get("/user/me");
      set({
        user: res.data.user,
        isAuthenticated: true,
        loading: false,
      });
    } catch (error) {
      set({
        error: error.message,
        loading: false,
        isAuthenticated: false,
      });
    }
  },

  getFile: async (token) => {
    set({ loading: true });
    try {
      const response = await axiosInstance.get("/user/files", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ files: response.data.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useAuthStore;
