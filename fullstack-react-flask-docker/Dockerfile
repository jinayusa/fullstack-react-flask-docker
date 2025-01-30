# Use the official Node.js 16 image as the base image for the application
FROM node:16

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install the dependencies listed in package.json using npm
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Expose the port 3000 (default for React apps) to allow communication with the host
EXPOSE 3000

# Build the React app for production (optimizes assets)
RUN npm run build

# Set the command to start the React app after the build is complete
CMD ["npm", "start"]
