#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to show usage
show_usage() {
    echo -e "${YELLOW}Usage: $0 [prod|dev]${NC}"
    echo -e "  prod: Start production containers only"
    echo -e "  dev:  Start development containers only"
    echo -e "  If no argument is provided, all containers will be started"
}

# Function to start containers
start_containers() {
    local profile=$1
    local command="docker-compose"
    
    if [ -n "$profile" ]; then
        command="$command --profile $profile"
    fi
    
    echo -e "${GREEN}Starting containers${NC} ${YELLOW}${profile:+"($profile)"}${NC}..."
    $command up -d

    # Check if containers are running
    if $command ps | grep -q "Up"; then
        echo -e "${GREEN}Containers started successfully!${NC}"
    else
        echo -e "${RED}Error: Containers failed to start properly${NC}"
        $command logs
        exit 1
    fi
}

# Parse command line argument
PROFILE=""
if [ $# -gt 0 ]; then
    case "$1" in
        "prod"|"dev")
            PROFILE=$1
            ;;
        "-h"|"--help")
            show_usage
            exit 0
            ;;
        *)
            echo -e "${RED}Invalid argument: $1${NC}"
            show_usage
            exit 1
            ;;
    esac
fi

echo -e "${GREEN}Starting Docker management script...${NC}"

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
# Get the project root directory (parent of bash directory)
PROJECT_DIR="$( cd "$SCRIPT_DIR/.." &> /dev/null && pwd )"

# Navigate to project directory
cd "$PROJECT_DIR" || {
    echo -e "${RED}Failed to navigate to project directory: $PROJECT_DIR${NC}"
    exit 1
}

# Check if nginx-proxy network exists
if ! docker network ls | grep -q nginx-proxy; then
    echo -e "${GREEN}Creating nginx-proxy network...${NC}"
    docker network create nginx-proxy
else
    echo -e "${GREEN}nginx-proxy network already exists${NC}"
fi

# Stop any running containers
echo -e "${GREEN}Stopping running containers...${NC}"
if [ -n "$PROFILE" ]; then
    docker-compose --profile "$PROFILE" down
else
    docker-compose down
fi

# Remove old containers (optional)
echo -e "${GREEN}Removing old containers...${NC}"
docker container prune -f

# Start containers
start_containers "$PROFILE"

echo -e "${GREEN}Script completed successfully!${NC}" 