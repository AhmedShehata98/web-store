import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC__API_BASE_URL_PROD
    : process.env.NEXT_PUBLIC__API_BASE_URL_DEV;

export const ENDPOINTS = {
  auth: {
    login: '/api/auth/login',
    signup: '/api/auth/signup',
    requestResetPassword: '/api/auth/request-reset-password',
    resetPassword: '/api/auth/reset-password',
    logout: '/api/auth/logout',
  },
  user: {
    profile: '/api/users/profile',
  },
  application: {
    all: '/api/application/all',
    root: '/api/application',
  },
  categories: {
    all: '/api/category/all',
    root: '/api/category',
  },
  upload: {
    images: '/api/upload/images',
  },
};

export const WEB_STORE = axios.create({
  baseURL,
  withCredentials: true,
});
