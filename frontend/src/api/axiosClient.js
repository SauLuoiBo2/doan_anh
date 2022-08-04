import axios from "axios";
// import querySting from "query-string";
import { API } from "./apiLink";

const axiosClient = axios.create({
  baseURL: API.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  //   paramsSerializer: (params) => querySting.stringify(params),
});

axiosClient.interceptors.request.use(
  async (config) => {
    // Handle token here ...

    //   if (getLocalToken()) {
    //     config.headers.common["Authorization"] = `Bearer ${getLocalToken()}`;
    //   }

    config.headers["Access-Control-Allow-Origin"] = "true";
    // config.headers["Access-Control-Allow-Methods"] =
    //   "GET, PUT, POST, DELETE, OPTIONS";
    //   const token = getLocalAccessToken();
    //   if (token) {
    //     config.headers["Authorization"] = `Bearer ${token}`;
    //   }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  async (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;
