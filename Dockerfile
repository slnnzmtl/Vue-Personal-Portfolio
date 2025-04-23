# Build stage
FROM node:20-alpine as build-stage

# Set proper working directory
WORKDIR /app

# Install necessary build dependencies
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Set environment variables
ENV VITE_HOST=0.0.0.0
ENV NODE_ENV=production

# Build the app with adjusted memory allocation
ENV NODE_OPTIONS="--max-old-space-size=1024"

# Build the app
RUN npm run build

# Production stage
FROM nginx:1.25-alpine as production-stage

# Copy the built files
COPY --from=build-stage /app/dist/ /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"] 