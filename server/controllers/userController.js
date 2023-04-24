// note: these are middleware

// temporary import: don't have info on database yet
const db = require('../models/mixMasterModel');

const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const userController = {};

// create user in database
userController.createUser = (req, res, next) => {
  // get username and password from form input submission
  const { username, password, firstname } = req.body;
  // if username or password fields not filled in, return error to express global error handler
  if (!username || !password) {
    return next({
      log: 'Error occurred in userController.createUser',
      message: 'Error',
    });
  }
  // check if username already taken
  const query = `SELECT * FROM users
    WHERE username = '${username}'`;

  db.query(query).then((data) => {
    // if username exists, return error to express global error handler
    if (data.rows.length) {
      return next({
        log:
          'Error occurred in userController.createUser: ' +
          JSON.stringify(new Error('username already exists in database')),
        message: 'Error: username already exists',
      });
    }
    // if username doesn't exist, bcrypt password and insert account into user table in SQL database
    console.log('reached hash');
    bcrypt.hash(password, SALT_WORK_FACTOR).then((hash) => {
      console.log(hash);
      const values = [username, hash, firstname];
      const query = `INSERT INTO users (username, password, firstname)
            VALUES ($1, $2, $3)`;

      db.query(query, values).then((data) => {
        console.log('added to database');
        res.locals.result = data.rows[0];
        next();
      });
    });
  });
};

// verify user info upon login
// userController.verifyUser = (req, res, next) => {

// };

module.exports = userController;
