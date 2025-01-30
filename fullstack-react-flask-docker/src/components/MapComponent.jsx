import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import styles from './style.module.css'; // Import the CSS module for custom styles

const MapComponent = () => {
  // State hooks for managing country data and filtered location
  const [countries, setCountries] = useState([]);
  const [filteredLocation, setFilteredLocation] = useState(null);

  // Fetch country data from the backend on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/countries');
        setCountries(response.data); // Set countries state with fetched data
      } catch (error) {
        console.error('Error fetching countries data:', error); // Log errors if any
      }
    };
    fetchCountries(); // Invoke fetchCountries function to get data
  }, []);

  // State for the search query entered by the user
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search input change and filter country based on query
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update search query state
    // Find country matching the search query
    const result = countries.find(
      (location) =>
        location.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredLocation(result); // Set filtered location based on search result
  };

  // MapView component to adjust map view when filteredLocation is set
  const MapView = () => {
    const map = useMap(); // Access the map instance
    if (filteredLocation) {
      // Update the map center to the filtered location's coordinates
      map.setView([filteredLocation.lat, filteredLocation.lng], 5);
    }
    return null; // This component doesn't render anything
  };

  return (
    <div>

      {/* Search Bar */}
      <div className={styles['search-container']}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange} // Update search query on input change
          placeholder="Search for a country"
          className={styles['search-bar']} // Apply custom styles
        />
        {/* Font Awesome Search Icon */}
        <i className={`fa fa-search ${styles['search-bar-icon']}`}></i>
      </div>

      {/* Map Container with customized options */}
      <MapContainer
        center={[51.505, -0.09]} // Default center position (London)
        zoom={3} // Initial zoom level set to 3 for global view
        minZoom={2} // Prevent zooming out beyond global map view
        maxZoom={10} // Set a limit for zooming in
        style={{ height: "100vh", width: "100%" }} // Full viewport height and width
        maxBounds={[
          [90, -180], // Top-left corner (latitude, longitude)
          [-90, 180]  // Bottom-right corner (latitude, longitude)
        ]}
        maxBoundsViscosity={1.0} // Ensure strict adherence to map boundaries
      >
        {/* OpenStreetMap Tile Layer */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* Include MapView component to adjust the view based on search */}
        <MapView />
      </MapContainer>
    </div>
  );
};

export default MapComponent; // Export component for usage in other parts of the app
