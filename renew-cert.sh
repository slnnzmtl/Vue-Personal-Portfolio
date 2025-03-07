#!/bin/bash

# Create required directories if they don't exist
mkdir -p ./certbot/www
mkdir -p ./certbot/conf
mkdir -p ./nginx/conf

# Renew the certificate
docker-compose run --rm certbot renew

# Reload nginx to apply new certificates
docker-compose exec prod nginx -s reload

echo "Certificate renewal process completed" 