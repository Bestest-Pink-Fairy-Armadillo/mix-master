const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;

// parse incoming requests with JSON payloads- automatically parse the JSON data in the request body and make it available in req.body
app.use(express.json());
// parse incoming requests with URL-encoded payloads - utomatically parse the URL-encoded data in the request body and make it available in req.body
// extended: true option allows for parsing nested objects and arrays in the URL-encoded data
app.use(express.urlencoded({ extended: true }));

// handle requests to static files
app.use(express.static(path.resolve(__dirname, '../src')));

//
// app.get('/user'), mixController;

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
