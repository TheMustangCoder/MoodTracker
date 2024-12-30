const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../front-end')));

// Default route (serving the main page)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../front-end/pages/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});