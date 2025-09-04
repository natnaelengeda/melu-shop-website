
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  timeout: 15000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

instance.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

instance.interceptors.response.use(null, async (error) => {
  const id = localStorage.getItem("id");

  if (error.response?.status === 401) {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/refresh`, {
        id: id
      }, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });
      return axios(error.config);
    } catch (_) {
      // console.log("Error", error);
      // console.log("Refresh Token Error");
      // window.location.href = "/auth/login";
    }
  } else {
    return Promise.reject(error);
  }
})

export default instance;