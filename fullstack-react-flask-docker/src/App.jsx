import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapComponent from './components/MapComponent';
import ChartComponent from './components/ChartComponent';
import Header from './components/Header';

const App = () => (
  // The Router component is used to manage routing within the application
  <Router>
    {/* Render the Header component globally across all routes */}
    <Header />
    
    {/* Define the available routes in the application */}
    <Routes>
      {/* Route for the map page */}
      <Route path="/map" element={<MapComponent />} />
      
      {/* Route for the chart page */}
      <Route path="/chart" element={<ChartComponent />} />
    </Routes>
  </Router>
);

export default App; // The default export allows this component to be imported elsewhere
