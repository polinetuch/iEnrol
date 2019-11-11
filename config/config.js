const mongo = require('mongoose');

const db = 
mongo.connect("mongodb:////192.168.1.71:27017/enrollment", function(err, response) {
    if (err) {
        console.log("Failed to connect to MongoDB" + db);
    }
    else {
        console.log(console.log("MongoDB is successfully connected" + db, " + ", response))
    }
});

module.exports = db;