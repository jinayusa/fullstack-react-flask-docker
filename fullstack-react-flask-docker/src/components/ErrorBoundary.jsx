import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    // Initialize state to track if an error has occurred
    this.state = { hasError: false };
  }

  // Lifecycle method to derive state from an error
  static getDerivedStateFromError() {
    // Set the state to indicate that an error has occurred
    return { hasError: true };
  }

  // Lifecycle method to log error details for debugging
  componentDidCatch(error, info) {
    console.log(error, info); // Logs error and additional information for debugging
  }

  render() {
    // If an error has occurred, display a fallback UI
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>; // Simple error message
    }
    // Otherwise, render the children components normally
    return this.props.children;
  }
}

export default ErrorBoundary; // Export the ErrorBoundary component to wrap other components
