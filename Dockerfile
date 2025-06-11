FROM node:20-alpine as build-stage

WORKDIR /app

# Consider if all these are strictly necessary for your project's dependencies
RUN apk add --no-cache python3 make g++

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.25-alpine as production-stage

# Create a non-root user and group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy built assets
COPY --from=build-stage /app/dist/ /usr/share/nginx/html/

# Copy custom nginx configurations
COPY nginx.main.conf /etc/nginx/nginx.conf
COPY nginx.prod.conf /etc/nginx/conf.d/default.conf

# Ensure nginx logs go to stdout/stderr
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log

# Create Nginx runtime directory and then change ownership
RUN mkdir -p /run/nginx && \
    chown -R appuser:appgroup /usr/share/nginx/html /var/log/nginx /var/cache/nginx /run/nginx && \
    chmod -R 755 /usr/share/nginx/html /var/log/nginx /var/cache/nginx /run/nginx

# Switch to the non-root user
USER appuser

# Expose port 80 (standard HTTP port)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]