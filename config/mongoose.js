const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;

mongoose.connect(`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.oqpiyev.mongodb.net/`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
