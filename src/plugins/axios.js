import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

instance.interceptors.response.use((config) => {
  return config.data;
});

export const get = (url, params) =>
  instance.get(url, {
    params,
  });

export const post = (url, params) => instance.post(url, params);
