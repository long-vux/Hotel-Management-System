import axios from 'axios';

// Base API URLs
const BASE_URL = 'http://localhost:5214/api';
const ACCOUNT_URL = `${BASE_URL}/account`;

// Account-related API functions
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${ACCOUNT_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${ACCOUNT_URL}/login`, loginData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Room-related API function
export const getRooms = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/Room`);
    console.log('Room data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching room data:', error);
  }
};

// Customer-related API function
export const getCustomer = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/customer`);
    return response.data;
  } catch (error) {
    console.error('Error fetching customer data:', error);
  }
};
