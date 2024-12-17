import axios, {type AxiosInstance} from 'axios';
import queryString from 'query-string';
import Toast from 'react-native-toast-message';
import {toString} from 'ultils';

let isAccessTokenExpiredFlag = false;
// const BASEURL = 'https://livelet-api-dev.adamo.tech/api/'; //dev
const BASEURL = 'https://livelet-api.adamo.tech/api/'; //stage
// const BASEURL = 'https://livelet-api-v2-dev.adamo.tech/api';

export const axiosClient = (baseURL: string = BASEURL): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseURL,
    // timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      isApp: 'true',
    },
    // adapter: ["http", "https"],
    paramsSerializer: params => queryString.stringify(params),
  });

  instance.interceptors.request.use(
    async function (config) {
      // config.headers['Accept-Language'] = ['en, cz'];
      // config.headers.locale = 'en';
      console.log('------------------');
      console.log('REQUEST', config.method?.toUpperCase());
      console.log('REQUEST URL', config.url);
      console.log('REQUEST PARAMS', config.params);
      console.log('REQUEST DATA', config.data);
      console.log('------------------');
      return {...config};
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    response => {
      if (response && response?.data) {
        return response.data;
      }
      return response;
    },
    function (error: any) {
      if (error?.response?.status === 401 && !isAccessTokenExpiredFlag) {
        isAccessTokenExpiredFlag = true;
      }
      console.log('error Axios', error);
      const showAlert = error.config?.headers?.showAlert;
      if (showAlert !== false) {
        Toast.show({
          type: 'error',
          //some thing wrong, please try again in japanese
          text1: 'Error!!',
          text2: toString(
            error.response?.data?.message,
            'Something went wrong, please try again',
          ),
        });
      }
      return Promise.reject(error);
    },
  );

  return instance;
};

export const ApiClient = axiosClient();
