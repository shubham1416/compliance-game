# Azure Deployment Guide - Compliance Game

## Problem Fixed
The Node.js runtime was looking for `index.js` but it didn't exist. You now have:
1. ✅ `index.js` - Express server that serves the frontend and proxies API requests to the Python backend
2. ✅ Updated `package.json` with Express and required dependencies
3. ✅ `web.config` - IIS configuration for Azure App Service
4. ✅ `.deployment` - Azure deployment configuration

## Architecture

```
Azure App Service (Node.js)
  ↓
index.js (Express Server - Port 8080)
  ├─ Serves: /frontend/* (static files)
  ├─ Serves: /admin/* (static files)
  └─ Proxies: /api/* → Python FastAPI Backend
```

## Deployment Steps

### Step 1: Set Environment Variables in Azure Portal

In **Configuration > Application settings**, add:

| Key | Value | Description |
|-----|-------|-------------|
| `NODE_ENV` | `production` | Node environment |
| `BACKEND_URL` | `http://localhost:8000` | Python backend URL (if running locally) |
| `PORT` | `8080` | Node.js server port |

**For separate Python deployment**, use:
- `BACKEND_URL`: `https://your-python-app.azurewebsites.net`

### Step 2: Deploy via Git/GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Azure

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Azure Web App
        uses: azure/webapps-deploy@v2
        with:
          app-name: 'your-app-name'
          publish-profile: ${{ secrets.AZURE_PUBLISH_PROFILE }}
          package: '.'
```

### Step 3: Ensure Python Backend is Running

The Python backend needs to be running on port 8000 (or set in `BACKEND_URL`).

**Option A: Run on same App Service**
- Need a custom startup script that runs both

**Option B: Separate App Service for Python** (Recommended)
- Deploy Python app separately with Gunicorn
- Update `BACKEND_URL` to point to Python app

## Troubleshooting

### Issue: "Cannot find module" errors
- Run `npm install` locally
- Ensure `node_modules.tar.gz` is NOT committed to git
- Let Azure build it fresh

### Issue: Frontend not loading
- Check that `frontend/index.html` exists
- Verify static files are being served correctly

### Issue: API calls failing
- Ensure `BACKEND_URL` is set correctly
- Check CORS settings in Python backend
- Verify backend is accessible from Node.js server

## Local Testing

```bash
# Install dependencies
npm install

# Set backend URL
export BACKEND_URL=http://localhost:8000

# Start Node.js server
npm start
```

Server will run on http://localhost:8080

## Files Created
- `index.js` - Express server entry point
- `web.config` - IIS/Azure configuration
- `.deployment` - Azure deployment config
- Updated `package.json` - Added Express dependency

## Next Steps
1. Push changes to Azure
2. Monitor logs: **Deployment Center > Logs** or **App Service > Log Stream**
3. Test: Visit `https://your-app.azurewebsites.net`
4. Configure Python backend if running separately
