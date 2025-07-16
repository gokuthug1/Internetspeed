const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Use the CORS middleware to allow all cross-origin requests
app.use(cors({ origin: '*' }))

// Create the /upload endpoint that acts as a "black hole"
app.post('/upload', (req, res) => {
  // We don't need to save or process the data.
  // We just consume the stream and do nothing with the chunks.
  req.on('data', (chunk) => { /* Black hole */ });

  // When the upload is finished, send back a success response.
  req.on('end', () => {
    res.status(200).send('Upload complete');
  });
});

app.listen(port, () => {
  console.log(`Speed test server listening on port ${port}`);
});