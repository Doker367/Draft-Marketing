#!/bin/bash

# ==================================
# Draft Marketing - Production Deploy Script
# ==================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="draft-marketing"
CONTAINER_NAME="draft-marketing-web"
BASE_PATH="/DraftMarketing"
NETWORK_NAME="web_proxy_network"

echo -e "${GREEN}======================================${NC}"
echo -e "${GREEN}Draft Marketing - Production Deploy${NC}"
echo -e "${GREEN}======================================${NC}\n"

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo -e "${RED}Error: Docker is not running${NC}"
    exit 1
fi

# Check if network exists, create if not
if ! docker network inspect $NETWORK_NAME > /dev/null 2>&1; then
    echo -e "${YELLOW}Creating external network: $NETWORK_NAME${NC}"
    docker network create $NETWORK_NAME
fi

# Stop and remove existing container
echo -e "${YELLOW}Stopping existing container...${NC}"
docker stop $CONTAINER_NAME 2>/dev/null || true
docker rm $CONTAINER_NAME 2>/dev/null || true

# Build the image
echo -e "${YELLOW}Building Docker image...${NC}"
docker build -t $PROJECT_NAME:latest --build-arg BASE_PATH=$BASE_PATH .

# Start the container
echo -e "${YELLOW}Starting container...${NC}"
docker run -d \
  --name $CONTAINER_NAME \
  --network $NETWORK_NAME \
  --restart unless-stopped \
  --memory="512m" \
  --cpus="1.0" \
  -p 80:80 \
  $PROJECT_NAME:latest

# Wait for container to be healthy
echo -e "${YELLOW}Waiting for container to be healthy...${NC}"
sleep 10

# Check health
if docker ps | grep -q $CONTAINER_NAME; then
    echo -e "${GREEN}✓ Container is running${NC}"
    
    # Show container info
    echo -e "\n${GREEN}Container Information:${NC}"
    docker ps --filter "name=$CONTAINER_NAME" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
    
    # Show logs
    echo -e "\n${YELLOW}Recent logs:${NC}"
    docker logs --tail 20 $CONTAINER_NAME
    
    echo -e "\n${GREEN}======================================${NC}"
    echo -e "${GREEN}Deployment completed successfully!${NC}"
    echo -e "${GREEN}======================================${NC}"
    echo -e "\n${YELLOW}Access the application at:${NC}"
    echo -e "${GREEN}http://192.168.100.132/DraftMarketing${NC}\n"
else
    echo -e "${RED}✗ Container failed to start${NC}"
    echo -e "${YELLOW}Checking logs...${NC}"
    docker logs $CONTAINER_NAME
    exit 1
fi
