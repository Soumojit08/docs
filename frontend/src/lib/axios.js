import axios from "axios";

const baseURL =
  import.meta.env.VITE_MODE === "development"
    ? import.meta.env.VITE_LOCAL
    : import.meta.env.VITE_PROD;

const axiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export default axiosInstance;
