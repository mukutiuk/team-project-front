/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = 'http://localhost:8082/api';

function wait(delay: number) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';
function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.mode = 'no-cors';
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
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

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
};

export const getProduct = () => {
  return client.get('/devices');
};

export const getZipCode = () => {
  return client.get('/admin/zipcodes');
};

export const addZipCode = (value: number) => {
  return client.post('/admin/zipcodes', value);
};
