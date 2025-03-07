#!/bin/bash

# Exit on any error
set -e

echo "🔍 Starting SSL certificate troubleshooting..."

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

# Check DNS resolution
echo "🔍 Checking DNS resolution..."
echo "Domain IP address:"
dig +short slnnzmtl.xyz

# Check if port 80 is open
echo "🔍 Checking if port 80 is open..."
nc -zv slnnzmtl.xyz 80

# Check Nginx configuration
echo "🔍 Checking Nginx configuration..."
docker compose exec prod nginx -t

# Check Nginx logs
echo "🔍 Checking Nginx logs..."
docker compose logs prod | tail -n 50

# Check if certificates exist
echo "🔍 Checking if certificates exist..."
if [ -d "./certbot/conf/live/slnnzmtl.xyz" ]; then
    echo "✅ Certificates exist. Listing files:"
    ls -la ./certbot/conf/live/slnnzmtl.xyz/
else
    echo "❌ Certificates do not exist."
fi

# Check Docker volume mounts
echo "🔍 Checking Docker volume mounts..."
docker compose config | grep -A 10 volumes

echo "✅ Troubleshooting completed. If issues persist, check the following:"
echo "1. Ensure your domain DNS is correctly pointing to your server IP"
echo "2. Ensure port 80 is open and not blocked by any firewall"
echo "3. Check that the Nginx configuration is correct"
echo "4. Verify that the certbot volume mounts are correct in docker-compose.yml"
echo ""
echo "To generate certificates using standalone mode, run:"
echo "./generate-ssl.sh" 