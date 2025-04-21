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

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy the built files
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy our nginx configuration
COPY nginx.prod.conf /etc/nginx/conf.d/default.conf

# Set proper permissions
RUN chown -R appuser:appgroup /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html && \
    chown -R appuser:appgroup /var/cache/nginx && \
    chown -R appuser:appgroup /var/log/nginx && \
    chown -R appuser:appgroup /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R appuser:appgroup /var/run/nginx.pid

# Switch to non-root user
USER appuser

EXPOSE 80

# Add health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80/ || exit 1

CMD ["nginx", "-g", "daemon off;"] 