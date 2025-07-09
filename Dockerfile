FROM node:20-alpine as build-stage

WORKDIR /app

RUN apk add --no-cache python3 make g++ git

RUN git clone --branch master https://github.com/slnnzmtl/Vue-Personal-Portfolio.git .

RUN npm install

RUN npm run build

FROM nginx:1.25-alpine as production-stage

# Copy built files first
COPY --from=build-stage /app/dist/ /usr/share/nginx/html/

# Copy nginx configurations
COPY nginx.main.conf /etc/nginx/nginx.conf
COPY nginx.prod.conf /etc/nginx/conf.d/default.conf

# Set up logging
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log

# Create nginx directories and set permissions
RUN mkdir -p /run/nginx /var/cache/nginx && \
    chmod -R 755 /usr/share/nginx/html && \
    chmod -R 755 /var/log/nginx && \
    chmod -R 755 /var/cache/nginx && \
    chmod -R 755 /run/nginx

# Test nginx configuration
RUN nginx -t

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]