import axiosInstance from "../lib/axios";

export const signupApi = async (formData) => {
  return axiosInstance.post("/auth/signup", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const loginApi = async (credentials) => {
  return axiosInstance.post("/auth/login", credentials);
};

export const logoutApi = async () => {
  return axiosInstance.post("/auth/logout");
};

export const getUserImages = async (token) => {
  return axiosInstance.get("/user/images", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};