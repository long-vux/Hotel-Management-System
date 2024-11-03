import axios from 'axios'

const API_URL_ACCOUNT = 'http://localhost:5214/api/account'
const API_URL = 'http://localhost:5214/api'

export const registerUser = async userData => {
  try {
    const response = await axios.post(`${API_URL_ACCOUNT}/register`, userData)
    return response.data
  } catch (error) {
    throw error.response.data
  }
}

export const loginUser = async loginData => {
  try {
    const response = await axios.post(`${API_URL_ACCOUNT}/login`, loginData)
    return response.data
  } catch (error) {
    throw error.response.data
  }
}




export async function getRooms() {
  try {
    const response = await axios.get('http://localhost:5214/api/Room'); // Use axios.get for a GET request
    console.log('Room data:', response.data);
  } catch (error) {
    console.error("Error fetching room data:", error); // Improved error message
  }
}
