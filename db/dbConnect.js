if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(
  MONGO_URI,() => console.log("The (mon)goose is on the loose!")
);

