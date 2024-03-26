import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser } from '../slices/userSlice';

const BASE_URL = 'http://localhost:3000/api/auth'; 

export const login = async (data, dispatch) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, data);
    if(response.data.token){
      await AsyncStorage.setItem('user', JSON.stringify(response.data))
      await dispatch(setUser(response.data))
    }
    return response.data;
  } catch (error) {
    throw error?.response?.data?.message
  }
};