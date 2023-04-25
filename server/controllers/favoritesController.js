const User = require('../models/mongoModel.js');

const favoritesController = {};

// establish a user and a blank favorites list during signup
favoritesController.createUser = (req, res, next) => {
  const userId = 1;
  User.create({ userId: userId }).then(
    (res) => {
      console.log('res: ', res);
      next();
    },
    (err) => console.log(`Error: ${err}`)
  );
};

// display favorites
// query database to show list of user's favorite drink recipes
// find by userId, return the favorites
favoritesController.getFavorites = (req, res, next) => {
  // TEST WHERE USER ID IS COMING FROM  (body? params?)
  const userID = req.params.id;
  User.findOne({ userID }, (err, user) => {
    if (err) {
      return next(err); // update to invoke global error handler
    } else {
      // add found user to response object
      res.locals.user = user;
      next();
    }
  });
};

// add recipe to favorites
favoritesController.addRecipe = (req, res, next) => {
  const userId = 1;
  User.findOneAndUpdate(
    { userId: userId },
    {
      favorites: [
        {
          ingredients: ['vodka', 'lime'],
          instructions: 'Make a drink',
          name: 'Lime vodka soda',
        },
      ],
    }
  ).then(
    (res) => {
      console.log(res);
      next();
    },
    (err) => {
      next(err);
    }
  );
};

module.exports = favoritesController;
