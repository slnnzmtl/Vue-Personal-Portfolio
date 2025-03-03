#!/bin/bash

# Exit on any error
set -e

echo "🚀 Starting application update process..."

# Source SSH credentials
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/slnnzmtl-git

# Navigate to project directory (adjust if needed)
cd ~/slnnzmtl.xyz

# Check if --config flag is provided
if [ "$1" == "--config" ]; then
    echo "📥 Pulling latest changes from master branch..."
    git pull origin master
    if [ $? -ne 0 ]; then
        echo "❌ Git pull failed"
        exit 1
    fi

    echo "🛑 Stopping containers..."
    docker compose down

    clear

    echo "🏗️ Building and starting production container..."
    docker compose up -d prod --build
else
    echo "❌ Please provide --config flag"
    exit 1
fi

echo "✅ Update completed successfully!"

# Check if container is running
if docker ps | grep -q "slnnzmtl-xyz-prod"; then
    echo "🟢 Application container is running"
else
    echo "🔴 Application container failed to start"
    exit 1
fi
