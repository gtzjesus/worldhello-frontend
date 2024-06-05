import axios from 'axios';

// Backend API for server && database
const API_URL = 'http://localhost:3000/clients';

// Get all clients
export const getAllClients = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching clients:', error);
    throw error;
  }
};
