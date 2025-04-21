#!/bin/bash

# Exit on any error
set -e

echo "🚀 Starting deployment process..."

# Source SSH credentials
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/slnnzmtl-git

# Navigate to project directory
cd ~/slnnzmtl.xyz

# Pull latest changes if not rebuilding
if [ "$1" != "--rebuild" ]; then
    echo "📥 Pulling latest changes from master branch..."
    git pull origin master || { echo "❌ Git pull failed"; exit 1; }
fi

# # Ensure nginx-proxy network exists
# if ! docker network ls | grep -q "nginx-proxy"; then
#     echo "🌐 Creating nginx-proxy network..."
#     docker network create nginx-proxy
# fi

# Create required directories for SSL certificates
echo "📁 Ensuring SSL certificate directories exist..."
mkdir -p ./certbot/www/.well-known/acme-challenge
mkdir -p ./certbot/conf

# Handle SSL certificates
if [ ! -d "./certbot/conf/live/slnnzmtl.xyz" ]; then
    echo "🔒 Generating new SSL certificates..."
    docker compose down
    docker run --rm -p 80:80 \
        -v $(pwd)/certbot/conf:/etc/letsencrypt \
        -v $(pwd)/certbot/www:/var/www/certbot \
        certbot/certbot certonly \
        --standalone \
        --email slnnzmtl@example.com \
        --agree-tos \
        --no-eff-email \
        --force-renewal \
        -d slnnzmtl.xyz
else
    echo "🔄 Renewing SSL certificates..."
    docker compose down
    docker run --rm -p 80:80 \
        -v $(pwd)/certbot/conf:/etc/letsencrypt \
        -v $(pwd)/certbot/www:/var/www/certbot \
        certbot/certbot renew --standalone
fi

# Wait for the container to be fully up

# Verify deployment
if docker ps | grep -q "slnnzmtl-xyz-prod"; then