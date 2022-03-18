import axios from 'axios';

import AppConfig from '../utils/config';

const instance = axios.create({
  baseURL: AppConfig.baseUri
});

export function getData<T>(url: string) {
  return instance.get(url).then(function (response: { data: T }) {
    return response.data;
  });
}

export function postData<D, T>(url: string, data: D): Promise<T> {
  return instance.post(`${url}`, data).then(function (response: { data: T }) {
    return response.data;
  });
}

export default instance;
