import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/api'; // Import the fetchData function to retrieve data from API

const DataFetcher = () => {
  // State hook to store fetched data
  const [data, setData] = useState(null);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Define an asynchronous function to fetch data
    const getData = async () => {
      const result = await fetchData();  // Fetch data using the imported fetchData function
      setData(result);  // Update the state with the fetched data
    };
    getData(); // Call the getData function when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once (on mount)

  return <div>{data ? data.message : 'Loading...'}</div>; // Display the data or a loading message
};

export default DataFetcher; // Export the DataFetcher component for use in other parts of the app
