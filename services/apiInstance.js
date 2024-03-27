import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

// Create Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: BASE_URL
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    async function (config) {
    // Get the token from wherever you store it (e.g., AsyncStorage)
    const user = await AsyncStorage.getItem('user') 
    const token = JSON.parse(user).token// Replace with actual token retrieval method

    // If token exists, set the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Export the customized Axios instance
export default axiosInstance;