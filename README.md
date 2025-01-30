# React Flask Docker App

This is a full-stack application that uses **React** for the frontend and **Flask** for the backend, all packaged with **Docker** for easy deployment. The app demonstrates a simple integration of frontend and backend, where the React app makes API calls to the Flask backend. Docker is used to containerize both the frontend and backend services, making it easier to deploy and run the entire application in isolated environments.

## Features

- **Frontend**: Built with React.js, providing an interactive UI.
- **Backend**: A simple RESTful API built with Flask to serve data to the frontend.
- **Dockerized**: Both frontend and backend are Dockerized for easy deployment and development.
- **Cross-Origin Requests**: CORS is enabled in Flask for smooth communication between frontend and backend.

## Technologies Used

- **Frontend**: React.js, Axios (for API calls), React Router (for navigation)
- **Backend**: Flask, Python, Flask-CORS (for enabling cross-origin requests)
- **Database**: None (This project does not include a database; it serves static data via API endpoints)
- **Containerization**: Docker, Docker Compose

## Getting Started

Follow the steps below to get your local development environment set up.

### Prerequisites

Make sure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/react-flask-docker-app.git
cd react-flask-docker-app
