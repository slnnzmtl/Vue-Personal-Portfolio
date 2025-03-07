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
    echo "🔒 SSL certificates not found. Will generate after container is up..."
    NEED_CERTS=true
else
    echo "🔄 SSL certificates found. Will check for renewal after container is up..."
    NEED_CERTS=false
fi

echo "🏗️ Building and starting production container..."
# Build and start the production container
docker compose up -d prod --build

# Wait for the container to be fully up
echo "⏳ Waiting for the container to be fully up..."
sleep 15

# Create a test file in the ACME challenge directory
echo "Creating test file in ACME challenge directory..."
echo "test-content" > ./certbot/www/.well-known/acme-challenge/test-file

# Test if the ACME challenge path is accessible
echo "🔍 Testing ACME challenge path accessibility..."
curl -s http://slnnzmtl.xyz/.well-known/acme-challenge/test-file > /dev/null
CURL_STATUS=$?

if [ "$NEED_CERTS" = true ]; then
    if [ $CURL_STATUS -eq 0 ]; then
        echo "✅ ACME challenge path is accessible. Generating certificates..."
        # Stop the container to free up port 80
        docker compose down prod
        sleep 5
        
        # Generate certificates using standalone mode
        docker run --rm -p 80:80 -v ./certbot/conf:/etc/letsencrypt -v ./certbot/www:/var/www/certbot certbot/certbot certonly --standalone --email slonanezametil@example.com --agree-tos --no-eff-email --force-renewal -d slnnzmtl.xyz
        
        # Restart the container
        docker compose up -d prod
        sleep 10
    else
        echo "❌ ACME challenge path is not accessible. Cannot generate certificates."
        echo "Please check your domain DNS settings and ensure port 80 is accessible."
    fi
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