import React from 'react';
import Highcharts from 'highcharts'; // Import the Highcharts library for charting
import HighchartsReact from 'highcharts-react-official'; // Import the official Highcharts React wrapper

const ChartComponent = () => {
  // Define the chart options, including chart type, title, and data
  const options = {
    chart: {
      type: 'line' // Set the chart type to 'line'
    },
    title: {
      text: 'Sample Chart' // Set the chart title
    },
    series: [{
      data: [1, 2, 3, 4, 5] // Sample data for the line chart
    }]
  };

  return (
    <div>
      {/* Render the HighchartsReact component, passing the Highcharts instance and chart options */}
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ChartComponent; // Export the ChartComponent for use in other parts of the app
