import axiosInstance from './apiInstance';

export const getUsers = async (id) => {
  try {
    const response = await axiosInstance.get(`/user/getUsers/${id}`)
    return response.data;
  } catch (error) {
    console.log(error, "error")
    throw error?.response?.data?.message
  }
};