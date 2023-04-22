// temporary import: don't have info on database yet
const db = require('../models/models');

const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const userController = {};

userController.createUser = (req, res, next) => {
  // get username and password from form input submission
  const { username, password } = req.body;
  // if username or password fields not filled in, return error to express global error handler
  if (!username || !password) {
    return next({
      'Error occurred in userController.createUser: must include username AND password',

    })
  }
  // check if username already taken
  const query = `SELECT * FROM user
    WHERE username = ${username}`;

  db.query(query)
    .then(data => {
      // if username exists, return error to express global error handler
      if (data) {
        return next({
          log: 'Error occurred in userController.createUser: ' + JSON.stringify(new Error('username already exists in database')),
          message: 'Error: username already exists'
        })
      }
      // if username doesn't exist, bcrypt password and insert account into user table in SQL database
    })

};