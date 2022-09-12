const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://45.5.36.142:27017';
const DB_NAME = 'cadastros';

const connection = () => MongoClient
  .connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => conn.db(DB_NAME))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

module.exports = connection;
