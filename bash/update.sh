#!/bin/bash

# Exit on any error
set -e

echo "🚀 Starting application update process..."

# Source SSH credentials
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/slnnzmtl-git

# Navigate to project directory (adjust if needed)
cd ~/slnnzmtl.xyz

# Check if --rebuild flag is provided
if [ "$1" != "--rebuild" ]; then
    echo "📥 Pulling latest changes from master branch..."
    git pull origin master
    if [ $? -ne 0 ]; then
        echo "❌ Git pull failed"
        exit 1
    fi
else
    echo "🔄 Skipping git pull, rebuilding only..."
fi

echo "🧹 Cleaning up Docker resources..."
# Remove unused containers, networks, images
docker system prune -f

# Stop and remove existing containers
docker compose down

echo "🔄 Setting up nginx-proxy network..."
# Check if nginx-proxy network exists, create if it doesn't
if ! docker network ls | grep -q "nginx-proxy"; then
    docker network create nginx-proxy
fi

# Create required directories for SSL certificates if they don't exist
echo "📁 Ensuring SSL certificate directories exist..."
mkdir -p ./certbot/www
mkdir -p ./certbot/conf
mkdir -p ./nginx/conf

echo "🏗️ Building and starting production container..."
# Build and start the production container
docker compose up -d prod --build

# Check if SSL certificates exist
if [ ! -d "./certbot/conf/live/slnnzmtl.xyz" ]; then
    echo "🔒 SSL certificates not found. Generating new certificates..."
    # Generate new certificates
    docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot --email slonanezametil@example.com --agree-tos --no-eff-email --force-renewal -d slnnzmtl.xyz
else
    echo "🔄 Checking if SSL certificates need renewal..."
    # Attempt to renew certificates
    docker compose run --rm certbot renew
fi

# Reload nginx to apply any certificate changes
echo "🔄 Reloading Nginx configuration..."
docker compose exec prod nginx -s reload

echo "✅ Update completed successfully!"

# Check if container is running
if docker ps | grep -q "slnnzmtl-xyz-prod"; then
    echo "🟢 Application container is running"
else
    echo "🔴 Application container failed to start"
    exit 1
fi 