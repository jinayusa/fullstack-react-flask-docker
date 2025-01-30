import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the root renderer for React 18
import App from './App';

// Create a root DOM node from the element with id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(
    <App />
);
