/**
 * Compliance Game - Node.js Entry Point
 * Serves the frontend and proxies API requests to the Python FastAPI backend
 */

const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 8080;
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000';

console.log(`Starting Compliance Game server on port ${PORT}`);
console.log(`Backend URL: ${BACKEND_URL}`);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

// Admin dashboard
app.use('/admin', express.static(path.join(__dirname, 'admin-dashboard')));

// API proxy - forward all /api requests to the Python backend
app.use('/api', createProxyMiddleware({
  target: BACKEND_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Remove /api prefix before sending to backend
  },
  onError: (err, req, res) => {
    console.error('Proxy error:', err);
    res.status(503).json({
      error: 'Backend service unavailable',
      details: err.message
    });
  }
}));

// Serve frontend index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'production' ? undefined : err.message
  });
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`✓ Server listening on port ${PORT}`);
  console.log(`✓ Frontend: http://localhost:${PORT}`);
  console.log(`✓ Admin: http://localhost:${PORT}/admin`);
  console.log(`✓ API proxy: http://localhost:${PORT}/api -> ${BACKEND_URL}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});
