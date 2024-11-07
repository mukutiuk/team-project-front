import { BookStateFetch } from '../features/BookSlice';
import {
  FecthLoginState,
  FetchFirstREgistartion,
  ProfilePutData,
} from '../features/ProfileSlice';
import { FetchText } from '../features/TextUsSlice';

/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = 'http://localhost:8082/api';

function wait(delay: number) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';
function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json',
    };
  }

  return wait(100)
    .then(() => fetch(BASE_URL + url, options))
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

function requestWithToken(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null,
) {
  const token = localStorage.getItem('token');

  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json',
    };
  }

  if (token) {
    options.headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
  }

  return fetch(BASE_URL + url, options).then(response => {
    if (!response.ok) {
      throw new Error();
    }

    const result = response.json();

    return result;
  });
}

export const client = {
  get: <T>(url: string) => request<T>(url, 'GET'),
  getWithToken: (url: string) => requestWithToken(url, 'GET'),

  post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
  delete: <T>(url: string) => request<T>(url, 'DELETE'),
  put: (url: string, data: any) => requestWithToken(url, 'PUT', data),
};

export const getProduct = () => {
  return client.get('/devices');
};

export const deleteZipCode = (zipCode: string) => {
  return client.delete(`/admin/zipcodes/${zipCode}`);
};

export const getZipCode = () => {
  return client.get('/admin/zipcodes');
};

export const addZipCode = (zipCode: string) => {
  return client.post('/admin/zipcodes', { zipCode });
};

export const postTextUs = (text: FetchText) => {
  return client.post('/contact', text);
};

export const getDetailProduct = (id: number) => {
  return client.get(`/devices/${id}`);
};

export const postBook = (value: BookStateFetch) => {
  return client.post('/orders', value);
};

export const postFirstRegistartion = (value: FetchFirstREgistartion) => {
  return client.post('/auth/registration', value);
};

export const postLogin = (value: FecthLoginState) => {
  return client.post('/auth/login', value);
};

export const putData = (value: ProfilePutData) => {
  return client.put('/profile', value);
};

export const getDataUser = () => {
  return client.getWithToken(`/profile`);
};
