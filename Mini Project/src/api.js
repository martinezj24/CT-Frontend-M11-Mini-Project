import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const createCustomer = (data) => api.post('/customers', data);
export const getCustomer = (id) => api.get(`/customers/${id}`);
export const updateCustomer = (id, data) => api.put(`/customers/${id}`, data);
export const deleteCustomer = (id) => api.delete(`/customers/${id}`);

export const createProduct = (data) => api.post('/products', data);
export const getProduct = (id) => api.get(`/products/${id}`);
export const updateProduct = (id, data) => api.put(`/products/${id}`, data);
export const deleteProduct = (id) => api.delete(`/products/${id}`);

export const placeOrder = (data) => api.post('/orders', data);
export const getOrder = (id) => api.get(`/orders/${id}`);
export const getOrderStatus = (id) => api.get(`/orders/${id}/status`);

export default api;
