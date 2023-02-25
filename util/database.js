const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {

  MongoClient.connect(
    'mongodb://root:root@localhost:27017/',
    { useNewUrlParser: true },
  ).then(result => {
    console.log('Connected!');
    callback(result);
  }).catch(err => {
    console.log(err);
  })
}

module.exports = mongoConnect;
