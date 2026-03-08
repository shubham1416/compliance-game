#!/bin/bash
# Optional: Startup script for Azure App Service
# This can be used if you need custom startup logic

# Set default port if not set
export PORT=${PORT:-8080}

# Set default backend URL
export BACKEND_URL=${BACKEND_URL:-http://localhost:8000}

echo "====================================="
echo "Compliance Game - Node.js Server"
echo "====================================="
echo "Port: $PORT"
echo "Backend: $BACKEND_URL"
echo "Environment: $NODE_ENV"
echo "====================================="

# Start the server
exec npm start
