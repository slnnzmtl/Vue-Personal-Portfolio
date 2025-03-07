#!/bin/bash

# Exit on any error
set -e

echo "🔒 Starting SSL certificate generation..."

# Create required directories
mkdir -p ./certbot/www/.well-known/acme-challenge
mkdir -p ./certbot/conf

# Stop any running containers to free up port 80
echo "🛑 Stopping any running containers to free up port 80..."
docker compose down

# Get the current directory
CURRENT_DIR=$(pwd)

echo "📁 Using directory: $CURRENT_DIR"

# Run certbot with standalone mode
echo "🔑 Running certbot in standalone mode..."
docker run --rm -p 80:80 -v $CURRENT_DIR/certbot/conf:/etc/letsencrypt -v $CURRENT_DIR/certbot/www:/var/www/certbot certbot/certbot certonly --standalone --email slonanezametil@example.com --agree-tos --no-eff-email --force-renewal -d slnnzmtl.xyz

# Check if certificate generation was successful
if [ -d "./certbot/conf/live/slnnzmtl.xyz" ]; then
    echo "✅ Certificate generation successful!"
    
    # Restart the production container
    echo "🔄 Restarting production container..."
    docker compose up -d prod
    sleep 10
    
    # Reload Nginx configuration
    echo "🔄 Reloading Nginx configuration..."
    docker compose exec prod nginx -s reload
else
    echo "❌ Certificate generation failed."
    echo "Please check the logs above for details."
    
    # Restart the production container anyway
    echo "🔄 Restarting production container..."
    docker compose up -d prod
    
    exit 1
fi

echo "🔒 SSL certificate generation completed successfully!" 