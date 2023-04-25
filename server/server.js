const path = require('path');
const express = require('express');
const app = express();
const loginRouter = require('./routers/loginRouter');
const favoritesRouter = require('./routers/favoritesRouter');

const PORT = 3000;

// parse incoming requests with JSON payloads- automatically parse the JSON data in the request body and make it available in req.body
app.use(express.json());
// parse incoming requests with URL-encoded payloads - utomatically parse the URL-encoded data in the request body and make it available in req.body
// extended: true option allows for parsing nested objects and arrays in the URL-encoded data
app.use(express.urlencoded({ extended: true }));

// handle requests to static files
app.use(express.static(path.resolve(__dirname, '../src')));

// route for login-related requests
// also create mongo db entry to store any favorites
// app.use('/login', loginRouter);
app.use('/api', loginRouter);
app.use('/favorites', favoritesRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('No cocktails here :( '));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
