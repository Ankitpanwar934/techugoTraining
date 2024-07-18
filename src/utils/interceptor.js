import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API = axios.create({
  baseURL: "https://fakestoreapi.com/",
  timeout: 1000,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

API.interceptors.request.use(
  async (config) => {
    let token = await AsyncStorage.getItem("token");
    config.headers.accessToken = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;