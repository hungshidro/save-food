import {AxiosRequestConfig} from 'axios';
import {ApiClient} from './axiosInstance';
import {IAppResponse} from 'interfaces';

export const AxiosService = {
  post: async <TRespone = any, TRequest = any, DN extends string = 'data'>(
    url: string,
    body?: TRequest,
    config?: AxiosRequestConfig<TRequest>,
  ): Promise<IAppResponse<TRespone, DN>> => {
    return await ApiClient.post(url, body, config);
  },
  put: async <TRespone = any, TRequest = any>(
    url: string,
    body?: TRequest,
    config?: AxiosRequestConfig<TRequest>,
  ): Promise<IAppResponse<TRespone>> => {
    return await ApiClient.put(url, body, config);
  },
  patch: async <TRespone, TRequest = any>(
    url: string,
    body?: TRequest,
    config?: AxiosRequestConfig<TRequest>,
  ): Promise<IAppResponse<TRespone>> => {
    return await ApiClient.patch(url, body, config);
  },
  delete: async <TRespone = any, TRequest = any>(
    url: string,
    config?: AxiosRequestConfig<TRequest>,
  ): Promise<IAppResponse<TRespone>> => {
    return await ApiClient.delete(url, config);
  },
  get: async <TRespone = any, TRequest = any>(
    url: string,
    config?: AxiosRequestConfig<TRequest>,
  ): Promise<IAppResponse<TRespone>> => {
    return await ApiClient.get(url, config);
  },
  request: async <TRespone = any, TRequest = any>(
    url: string,
    config?: AxiosRequestConfig<TRequest>,
  ): Promise<IAppResponse<TRespone>> => {
    return await ApiClient.request({
      url,
      ...config,
    });
  },
};
