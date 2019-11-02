// Connect to Mongo database
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// local database url
const url = "mongdb://localhost:27017/user_login";

mongoose.connect(url).then(
    () => {
        // connecting to mongoose
        console.log("Connected to mongo");
    },
    error => {
        console.log("Error occur while connecting to Mongo:");
        console.log(error)
    }
);

module.exports = mongoose.connection;