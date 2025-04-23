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
mkdir -p ./certbot/www/.well-known/acme-challenge
mkdir -p ./certbot/conf

# Check if SSL certificates exist
if [ ! -d "./certbot/conf/live/slnnzmtl.xyz" ]; then
    echo "🔒 SSL certificates not found. Generating new certificates..."
    
    # Generate certificates using standalone mode
    echo "🔑 Running certbot in standalone mode..."
    docker run --rm -p 80:80 -v $(pwd)/certbot/conf:/etc/letsencrypt -v $(pwd)/certbot/www:/var/www/certbot certbot/certbot certonly --standalone --email slonanezametil@example.com --agree-tos --no-eff-email --force-renewal -d slnnzmtl.xyz
    
    # Check if certificate generation was successful
    if [ ! -d "./certbot/conf/live/slnnzmtl.xyz" ]; then
        echo "❌ Certificate generation failed."
        echo "Please check the logs above for details."
    else
        echo "✅ Certificate generation successful!"
    fi
else
    echo "🔄 Checking if SSL certificates need renewal..."
    
    # Stop the container to free up port 80 for standalone renewal
    echo "🔄 Stopping containers for certificate renewal..."
    docker compose down
    
    # Attempt to renew certificates in standalone mode
    docker run --rm -p 80:80 -v $(pwd)/certbot/conf:/etc/letsencrypt -v $(pwd)/certbot/www:/var/www/certbot certbot/certbot renew --standalone
    
    echo "✅ Certificate renewal check completed."
fi

echo "🚧 Starting maintenance mode..."
# Start the maintenance container
docker compose up -d maintenance

echo "🏗️ Building production container in the background..."
# Build the production container
docker compose build prod

echo "🔄 Switching from maintenance to production..."
# Stop the maintenance container and start the production container
docker compose down maintenance
docker compose up -d prod

# Wait for the container to be fully up
echo "⏳ Waiting for the container to be fully up..."
sleep 15

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