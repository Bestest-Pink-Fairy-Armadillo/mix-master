const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

console.log('loginRouter');

router.post('/signup', userController.createUser, (req, res) =>
  res.status(200).json(res.locals.token)
);

router.post('/login', userController.verifyUser, (req, res) =>
  res.status(200).json(res.locals.result)
);


module.exports = router;
