//Main module
const express = require('express'); // server
const cors = require('cors') // cors
const app = express(); // server
const compression = require("compression"); // compression
const AWS = require('aws-sdk');

const cors_options = {
  origin: [
    "http://localhost:3000"
  ],
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(cors_options));

/*
const validKey = 'cex';
const keymapping = (req, res, next) => {
  const requestKey = req.get('key');
  if (!requestKey || requestKey !== validKey) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
  // Key is valid, proceed to the next middleware or route handler
};
*/

app.listen(8181, () => {
    console.log(`server is listening at localhost:8181`);
});


