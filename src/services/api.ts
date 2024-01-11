const baseURL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC__API_BASE_URL_PROD
    : process.env.NEXT_PUBLIC__API_BASE_URL_DEV;
