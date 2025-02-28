# Build stage
FROM node:20-alpine as build-stage

# Set proper working directory
WORKDIR /app

# Install necessary build dependencies
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package*.json ./

# Remove existing package-lock.json and install dependencies
RUN rm -f package-lock.json && npm install

# Copy project files
COPY . .

# Set environment variables
ENV VITE_HOST=0.0.0.0
ENV NODE_ENV=production

# Build the app with adjusted memory allocation
ENV NODE_OPTIONS="--max-old-space-size=512"

# Build the app
RUN npm run build --verbose --no-cache

# Production stage
FROM nginx:stable-alpine as production-stage

# Copy the built files
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy our nginx configuration
COPY nginx.prod.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 