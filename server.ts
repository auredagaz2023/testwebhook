const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON payloads
app.use(bodyParser.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
  const payload = req.body;
  console.log('Received payload:', payload);

  // Extract the secret code (if present)
  const secretCode = payload?.secretCode ?? ''; // Adjust based on the actual payload structure

  // Respond to the challenge platform
  res.status(200).json({ message: 'Payload received', secretCode });
});

// Start the server
app.listen(port, () => {
  console.log(`Webhook server is running on http://localhost:${port}`);
});