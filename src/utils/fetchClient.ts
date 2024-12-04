import { BookStateFetch } from '../features/BookSlice';
import {
  ChangeOrder,
  FecthLoginState,
  FetchFirstREgistartion,
  ProfilePutData,
} from '../features/ProfileSlice';
import { FetchText } from '../features/TextUsSlice';

/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = 'http://51.21.0.161/api';

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

  return fetch(BASE_URL + url, options).then(response => {
    if (!response.ok) {
      throw new Error();
    }

    const result = response.json();

    return result;
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

    return response.json();
  });
}

export const client = {
  get: <T>(url: string) => request<T>(url, 'GET'),
  getWithToken: (url: string) => requestWithToken(url, 'GET'),
  postWithToken: (url: string, data: any) =>
    requestWithToken(url, 'POST', data),

  post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
  delete: <T>(url: string) => request<T>(url, 'DELETE'),
  put: (url: string, data: any) => requestWithToken(url, 'PUT', data),
  patch: (url: string, data: any) => requestWithToken(url, 'PATCH', data),
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
  return client.postWithToken('/orders', value);
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

export const getOrdersForAdmin = () => {
  return client.getWithToken(`/orders/active`);
};

export const changeStatus = ({ id, value }: ChangeOrder) => {
  return client.patch(`/orders/${id}/status`, { status: value });
};

export const changeDescriptionProblem = ({ id, value }: ChangeOrder) => {
  return client.patch(`/orders/${id}/description`, { description: value });
};

export const getOwnOrders = () => {
  return client.getWithToken(`/orders/my`);
};

export const getSearchOrders = (value: string) => {
  return client.getWithToken(`/orders/search?query=${value}`);
};

export const getNotActiveOrders = () => {
  return client.getWithToken(`/orders/not-active`);
};

export const getActiveOrders = (page: number) => {
  return client.getWithToken(`/orders/active?size=4&page=${page}`);
};
