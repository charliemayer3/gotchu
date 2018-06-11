const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Gotch collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Gotchu",
  {
    useMongoClient: true
  }
);

//Seeds for the DB

// const userSeed = [
//   {
//   }
// ];

//Command to seed the DB

// db.Gotchu
//   .remove({})
//   .then(() => db.Gotchu.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.insertedIds.length + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
