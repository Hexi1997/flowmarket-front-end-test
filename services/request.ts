import axios from 'axios';

import AppConfig from '../utils/config';

const instance = axios.create({
  baseURL: AppConfig.baseUri,
  headers: {
    'Content-Type': 'application/json'
  }
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

export function putData<D, T>(url: string, data: D): Promise<T> {
  return instance.put(`${url}`, data).then(function (response: { data: T }) {
    return response.data;
  });
}

export function patchData<D, T>(url: string, data: D): Promise<T> {
  return instance.patch(`${url}`, data).then(function (response: { data: T }) {
    return response.data;
  });
}

export function getDataList<D, T>(url: string, params: D) {
  return instance.get(url, { params }).then(function (response: { data: T }) {
    return response.data;
  });
}

export function deleteData<T>(url: string) {
  return instance.delete(url).then(function (response: { data: T }) {
    return response.data;
  });
}

export default instance;
