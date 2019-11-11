const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise;

// Define collection and schema for student enrollment
const Enrollment = new Schema ({
	first_name: { type: String },
	last_name: { type: String },
	age: { type: Number },
	gender: { type: String },
	mother: { type: String },
	father: { type: String },
	mother: { type: String },
	contact: { type: Number },
	address: { type: String }
    }, 

    {collection: "enrollment"}
);

module.exports = mongoose.model("Enrollment", Enrollment);
