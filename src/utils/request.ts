import axios, { AxiosResponse } from 'axios';
import { Platform } from 'react-native';
import deviceInfo from 'react-native-device-info';
import store from '@/store';
import CommonConfig from './config';
import { Toast } from '@ant-design/react-native';
import { getToken } from './storage';

const responseLog = (res: AxiosResponse<any>) => {
  const randomColor = `rgba(${Math.round(Math.random() * 255)},${Math.round(
    Math.random() * 255,
  )},${Math.round(Math.random() * 255)})`;

  console.log(
    '%c┍------------------------------------------------------------------┑',
    `color:${randomColor};`,
  );
  console.log('| 请求地址：', res.request._url);
  console.log('| 请求方式：', res.config.method);
  console.log('| 请求头：', res.config.headers);
  console.log('| 请求时间：', res.headers.date);
  console.log('| 请求参数：', res.config);
  console.log('| 返回数据：', res.data);
  console.log(
    '%c┕------------------------------------------------------------------┙',
    `color:${randomColor};`,
  );
};

const instance = axios.create({
  baseURL: CommonConfig.BASE_URL,
  timeout: 1000 * 5,
  withCredentials: true,
  headers: {
    platform: Platform.OS,
    version: deviceInfo.getVersion(),
  },
});
instance.defaults.headers['Content-Type'] = 'application/json';

// Add a request interceptor
instance.interceptors.request.use(
  async function(config) {
    const { headers } = config;
    headers.token = await getToken();
    return config;
  },
  function(error) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function(response) {
    response && responseLog(response); // release to remove
    if (response && response.status === 200) {
      const { data, code, message, hasError } = response.data;
      if (code === 0) {
        return data;
      }
      if (code === 2001) {
        store.dispatch({ type: 'user/logout' });
        Toast.info(message);
        return Promise.reject('用户未登录');
      }
      if (hasError) {
        Toast.info(message);
        return data;
      }
      return data;
    }
    return response.data;
  },
  function(error) {
    console.warn('error', error);
    if (error.code === 'ECONNABORTED') {
      return Promise.reject({ msg: '网络超时' });
    }
    switch (error.response.status) {
      case 401:
        return Promise.reject({ msg: '用户未登录' });
      case 404:
        return Promise.reject({ msg: '请求接口异常 404 not found' });
      case 400:
      case 500:
        return Promise.reject({ msg: '服务端异常' });
      case 502:
        return Promise.reject({ msg: '服务器异常' });
      default:
        return Promise.reject(error.response);
    }
  },
);

export default instance;
