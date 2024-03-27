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

export const createUser = async (body) => {
  try {
    const response = await axiosInstance.post(`/user/create`, body)
    return response.data;
  } catch (error) {
    console.log(error.response.data.message, "error>")
    throw error?.response?.data?.message
  }
};

export const updateUser = async (id, body) => {
  try {
    const response = await axiosInstance.put(`/user/update/${id}`, body)
    return response.data;
  } catch (error) {
    console.log(error.response.data.message, "error>")
    throw error?.response?.data?.message
  }
};