#!/bin/bash

$stage = ${1}

cd /root/containers/slnnzmtl-xyz || {
    echo "❌ Failed to change to project directory"
    exit 1
}

$docker_compose_file = "docker-compose.yml" 

if [ "$stage" == "dev" ]; then
    $docker_compose_file = "docker-compose.dev.yml"
fi

echo "🔄 Starting Docker Compose rebuild process..."

echo "📦 Stopping and removing containers..."
docker compose -f $docker_compose_file down

echo "🔨 Building images without cache..."
docker compose -f $docker_compose_file build --no-cache

echo "🚀 Starting containers in detached mode..."
docker compose -f $docker_compose_file up -d

echo "✅ Docker Compose rebuild completed successfully!"
