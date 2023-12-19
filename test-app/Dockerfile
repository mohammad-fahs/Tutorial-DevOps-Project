# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the local source files to the working directory
COPY . .

# Run the Mocha test script when the container launches
CMD ["npx", "mocha", "api.test.js"]
