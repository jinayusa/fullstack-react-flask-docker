# Use the official Python 3.8 slim image as the base image
FROM python:3.8-slim

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the requirements.txt file into the working directory
COPY requirements.txt .

# Install the Python dependencies from the requirements.txt file
RUN pip install -r requirements.txt

# Copy all other files from the current directory into the working directory
COPY . .

# Expose port 5001 to allow communication with the outside world
EXPOSE 5001

# Set the default command to run the app using Python
CMD ["python", "app.py"]
