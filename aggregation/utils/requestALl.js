import axios from "axios";
import useStore from "../store/index";
// 创建axios实例
const request = axios.create({
  // baseURL: "http://aiiiin-api-aicottage:9007",
  baseURL: process.env.NEXT_PUBLIC_ALL_URL,
  withCredentials: false,
  timeout: 10 * 3000,
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const { token } = useStore.getState();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers["X-Api-Client"] = `Web`;
    config.headers["CTL_VERSION"] = `1.0`;
    config.headers["CTL_CLIENT"] = `WEB`;
    config.headers["CTL_DEVID"] = "74992a6736657f114e36e3fe1925786e";
    config.headers["CTL_CHANNEL"] = `NATURE`;
    config.headers["CTL_APP"] = `AICOTTAGE`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.log(error, "error");
    // 对响应错误做点什么
    // Message({
    //   showClose: true,
    //   message: error.response.data.Message || error.message || error.Message,
    //   type: "error",
    // });
    return error.response;
  }
);

export default request;
