const http = require('http');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./apiRoutes');

const PORT = 3000;

// In-memory mock storage for tasks
let taskList = [
  { id: 'task_1', title: 'Setup React Project', completed: true },
  { id: 'task_2', title: 'Identify REST APIs for Assignment 7', completed: false }
];

const server = http.createServer((req, res) => {
  const { url, method } = req;

  // Serve documentation viewer HTML
  if (url === '/' || url === '/home') {
    const htmlPath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(htmlPath, (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading documentation interface');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
  } 
  // API Route: Get all tasks
  else if (url === '/api/tasks' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'success', count: taskList.length, data: taskList }));
  } 
  // API Route: Get API Metadata
  else if (url === '/api/routes' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'success', endpoints: apiRoutes }));
  } 
  // 404 Route
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'error', message: 'API Endpoint not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`API Documentation server running at http://localhost:${PORT}`);
});