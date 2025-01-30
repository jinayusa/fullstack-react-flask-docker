from flask import Flask, jsonify
import requests
from flask_cors import CORS  # Import CORS to handle Cross-Origin Resource Sharing

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains by default to allow cross-origin requests

# Fetch country data from the Rest Countries API
@app.route('/api/countries', methods=['GET'])
def get_countries():
    try:
        # Make a GET request to the external Rest Countries API
        response = requests.get('https://restcountries.com/v3.1/all')
        countries_data = response.json()  # Parse the JSON response

        # Extract relevant information from the API response (name, latitude, longitude)
        countries = []
        for country in countries_data:
            country_info = {
                'name': country.get('name', {}).get('common'),  # Get the common name of the country
                'lat': country.get('latlng', [])[0] if len(country.get('latlng', [])) > 0 else None,  # Get latitude, if available
                'lng': country.get('latlng', [])[1] if len(country.get('latlng', [])) > 1 else None  # Get longitude, if available
            }
            countries.append(country_info)  # Append the country data to the list

        return jsonify(countries)  # Return the list of countries as a JSON response
    except Exception as e:
        return jsonify({"error": str(e)}), 500  # Handle errors and return a 500 error with the message

# Run the Flask application on host '0.0.0.0' and port 5001 for external access
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
