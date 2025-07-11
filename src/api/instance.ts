import axios from "axios";

const API_BASEURL = "https://localhost:8080";

const baseConfig = {
   withCredentials: true,
};

const axiosInstance = axios.create({
   baseURL: API_BASEURL,
   ...baseConfig,
});

export default axiosInstance;
