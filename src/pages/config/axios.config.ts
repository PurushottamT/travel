import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 3000,
  timeoutErrorMessage: "Server is not responding",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {}
);

export default axiosInstance;
