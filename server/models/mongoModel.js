const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MONGO_URI =
  'mongodb+srv://pink-fairy:armadillo123@pink-fairy-armadillo.k8cdlyi.mongodb.net/test';

// connect to mongoose
mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'pink-fairy-armadillo',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

// drink schema to layout the format in which drink recipes are stored
// drink is an object with three properties:
// ingredients is an array of strings
// instructions and name are both strings

const drinkSchema = new Schema({
  ingredients: [{ type: String }],
  instructions: { type: String },
  name: { type: String },
});

// user schema to link userId to favorites list
// favorites list is an array containing drinks

const userSchema = new Schema({
  userId: { type: Number, required: true },
  favorites: [{ type: drinkSchema }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
