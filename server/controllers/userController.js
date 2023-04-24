// note: these are middleware

// temporary import: don't have info on database yet
const db = require('../models/SQLModel');

const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const userController = {};

// create user in database
userController.createUser = async (req, res, next) => {
  // get username and password from form input submission
  const { username, password, firstname } = req.body;
  // if username or password fields not filled in
  // return error to express global error handler
  if (!username || !password) {
    return next({
      log: 'Error occurred in userController.createUser',
      message: 'Error: missing username or password',
    });
  }
  // check if username already taken
  const values = [username];
  const query = `SELECT * FROM users
    WHERE username = $1`;

  const rows = await db.query(query, values);
  // console.log('rows: ', rows);
  // if username exists, return error to express global error handler
  if (rows.rows.length) {
    // console.log('data: ', rows.rows);
    return next({
      log:
        'Error occurred in userController.createUser: ' +
        JSON.stringify(new Error('username already exists in database')),
      message: 'Error: username already exists',
    });
  }
  // if username doesn't exist, bcrypt password and insert account into user table in SQL database
  const hash = await bcrypt.hash(password, SALT_WORK_FACTOR);
  // console.log('hash: ', hash);
  const hashValues = [username, hash, firstname];
  const hashQuery = `INSERT INTO users (username, password, firstname)
        VALUES ($1, $2, $3)`;

  const data = await db.query(hashQuery, hashValues)
  // console.log('added to database');
  res.locals.result = data.rows[0];
  next();
};


// verify user info upon login
userController.verifyUser = async (req, res, next) => {
  // obtain username and password from request body from frontend login post request
  const { username, password } = req.body;
  // find user in database
  const values = [username];
  const query = `SELECT * from users
    WHERE username = $1`;
  const rows = await db.query(query, values);
  // if username is not found (user doesn't exist), redirect to signup page (throw error for now)
  if (!rows.rows.length) {
    return next({
      log: 'Error occurred in userController.verifyUser',
      message: 'Error: username not found'
    });
  }
  // compare submitted password with hashed password stored in database
  const hashedPassword = rows.rows[0].password;
  const result = await bcrypt.compare(password, hashedPassword);
  try {
    // if they don't match redirect to signup page (throw error for now)
    if (!result) {
      return next({
        log: 'Error in userController.verifyUser',
        message: 'Error: invalid password'
      });
    };
    // if they match, store something in res.locals for postman result and proceed to next middleware
    res.locals.result = 'success';
    next();
  }
  catch(err) {
    next({
      log: 'Error in userController.verifyUser',
      message: 'Error: bcrypt issue'
    });
  }
};

module.exports = userController;
