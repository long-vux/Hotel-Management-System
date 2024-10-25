import axios from 'axios';

const API_URL = 'http://localhost:5214/api/account';

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data; 
    } catch (error) {
        throw error.response.data;
    }
};

export const loginUser = async (loginData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, loginData);
        return response.data; 
    } catch (error) {
        throw error.response.data;
    }
};
