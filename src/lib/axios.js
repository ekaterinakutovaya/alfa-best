import axios from "axios";
import i18next from "i18next";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_APP_API_URL
});

const interceptor = config => {
  config.headers["Accept-Language"] = i18next.language;
  return config;
};


axiosInstance.interceptors.request.use(interceptor);


export { axiosInstance };
