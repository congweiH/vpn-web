import axios from 'axios';

const axiosInstance = axios.create({});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (request) => {
    // 再发送请求之前做些什么
    return request;
  },
  (error) => {
    // 处理错误请求
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    // 处理响应数据之前做些什么
    return response;
  },
  (error) => {
    // 处理响应错误
    return Promise.reject(error);
  }
);

export default axiosInstance;
