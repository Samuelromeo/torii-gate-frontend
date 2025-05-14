import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://torii-gate-samuel.onrender.com/api",
});
