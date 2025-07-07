#!/bin/bash

cd /root/containers/slnnzmtl-xyz || {
    echo "❌ Failed to change to project directory"
    exit 1
}

echo "🔄 Starting Docker Compose rebuild process..."

echo "📦 Stopping and removing containers..."
docker compose down

echo "🔨 Building images without cache..."
docker compose build --no-cache

echo "🚀 Starting containers in detached mode..."
docker compose up -d

echo "✅ Docker Compose rebuild completed successfully!"
