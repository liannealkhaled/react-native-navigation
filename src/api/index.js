import axios from "axios";
const BASE_URL = "https://react-native-mini-project-items.eapi.joincoded.com";
const instance = axios.create({
  baseURL: BASE_URL,
});

// instance.interceptors.request.use((config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   });
export { BASE_URL };
export default instance;
