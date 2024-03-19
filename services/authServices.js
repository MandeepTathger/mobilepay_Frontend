import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'http://localhost:3000/api/auth'; 

export const login = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, data);
    if(response.data.token){
      await AsyncStorage.setItem('token', response.data.token)
    }
    return response.data;
  } catch (error) {
    throw error?.response?.data?.message
  }
};