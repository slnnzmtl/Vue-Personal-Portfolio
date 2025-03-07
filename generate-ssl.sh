#!/bin/bash

# Exit on any error
set -e

echo "🔒 Starting SSL certificate generation..."

# Create required directories
mkdir -p ./certbot/www/.well-known/acme-challenge
mkdir -p ./certbot/conf

# Create a test file in the ACME challenge directory
echo "Creating test file in ACME challenge directory..."
echo "test-content" > ./certbot/www/.well-known/acme-challenge/test-file

# Check if the container is running
if ! docker ps | grep -q "slnnzmtl-xyz-prod"; then
    echo "❌ Production container is not running. Starting it..."
    docker compose up -d prod
    echo "⏳ Waiting for container to start..."
    sleep 15
fi

# Test if the ACME challenge path is accessible
echo "🔍 Testing ACME challenge path accessibility..."
echo "Attempting to access: http://slnnzmtl.xyz/.well-known/acme-challenge/test-file"
curl -v http://slnnzmtl.xyz/.well-known/acme-challenge/test-file

# Check if the test was successful
if [ $? -ne 0 ]; then
    echo "❌ ACME challenge path is not accessible. Please check your network configuration."
    echo "Possible issues:"
    echo "1. DNS not pointing to your server"
    echo "2. Port 80 is blocked"
    echo "3. Nginx configuration issue"
    exit 1
fi

echo "✅ ACME challenge path is accessible. Proceeding with certificate generation..."

# Run certbot with standalone mode first to avoid webroot issues
echo "🔑 Running certbot in standalone mode..."
docker compose down prod
sleep 5
docker run --rm -p 80:80 -v ./certbot/conf:/etc/letsencrypt -v ./certbot/www:/var/www/certbot certbot/certbot certonly --standalone --email slonanezametil@example.com --agree-tos --no-eff-email --force-renewal -d slnnzmtl.xyz

# Restart the production container
echo "🔄 Restarting production container..."
docker compose up -d prod
sleep 10

# Check if certificate generation was successful
if [ -d "./certbot/conf/live/slnnzmtl.xyz" ]; then
    echo "✅ Certificate generation successful!"
    echo "🔄 Reloading Nginx configuration..."
    docker compose exec prod nginx -s reload
else
    echo "❌ Certificate generation failed."
    echo "Please check the logs above for details."
    exit 1
fi

echo "🔒 SSL certificate generation completed successfully!" 