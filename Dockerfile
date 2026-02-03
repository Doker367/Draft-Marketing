# ==================================
# STAGE 1: Build
# ==================================
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY client/package*.json ./

# Install all dependencies (including devDependencies needed for build)
RUN npm ci && npm cache clean --force

# Copy source code
COPY client/ ./

# Build the application
# Base path will be set via build arg
ARG BASE_PATH=/larcad
ENV VITE_BASE_PATH=${BASE_PATH}

RUN npm run build

# ==================================
# STAGE 2: Production
# ==================================
FROM nginx:alpine

# Remove default nginx config
RUN rm -rf /usr/share/nginx/html/*

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80/health || exit 1

# Expose port (internal only, no external exposure)
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
