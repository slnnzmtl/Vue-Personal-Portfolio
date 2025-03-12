FROM nginx:stable-alpine

# Copy the maintenance page
COPY index.html /usr/share/nginx/html/index.html

# Copy a simple nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 