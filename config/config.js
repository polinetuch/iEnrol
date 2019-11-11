const mongo = require('mongoose');

const db = 
mongo.connect("mongodb:////192.168.1.71:27017/enrollment", function(err, response) {
    if (err) {
        console.log("failed to connect" + db);
    }
    else {
        console.log(console.log("Connected to mongo" + db, " + ", response))
    }
});

module.exports = db;