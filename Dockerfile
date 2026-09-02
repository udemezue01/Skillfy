# Use Node.js 18 as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock for dependency installation
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Nuxt.js application
RUN yarn build

# Expose the default Nuxt.js port
EXPOSE 3000

# Specify the command to start the app
CMD ["yarn", "dev"]
