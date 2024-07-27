import axios from 'axios';
import qs from 'qs';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: {
    serialize: (params) => qs.stringify(params, { arrayFormat: 'brackets' }),
  },
});

export default axiosInstance;
