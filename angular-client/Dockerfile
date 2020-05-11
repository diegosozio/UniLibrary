# Create image based on the official Node 10 image from dockerhub
FROM node:10

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Get all the code needed to run the app
COPY . /app/

# Expose the port the app runs in, adding port 49153 to refresh the angular page
EXPOSE 4200 49153 

# Serve the app
CMD ["npm","start"]