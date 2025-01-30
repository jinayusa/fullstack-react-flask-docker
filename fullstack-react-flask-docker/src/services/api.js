import axios from 'axios';

// Define the base URL for the API endpoint
const API_URL = 'http://localhost:5001/api/data';

// Function to fetch data from the API asynchronously
export const fetchData = async () => {
  try {
    // Send a GET request to the API and store the response
    const response = await axios.get(API_URL);
    return response.data; // Return the data received from the API
  } catch (error) {
    // Log any errors that occur during the data fetch
    console.error('Error fetching data:', error);
  }
};
