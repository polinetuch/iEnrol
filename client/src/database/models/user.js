const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

// Define userSchema
const userSchema = new Schema({
    username: {
        type: String,
        unique: false,
        require: false
    },
    password: {
        type: String,
        unique: false,
        required: false
    }
});