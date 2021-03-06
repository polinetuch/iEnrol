const mongo = require('mongoose');
const Schema = mongo.Schema;
mongo.promise = Promise;

// Define collection and schema for student enrollment
const Enrollment = new Schema ({
	name: { type: String },
	age: { type: Number },
	gender: { type: String },
	mother: { type: String },
	father: { type: String },
	mother: { type: String },
	contact: { type: Number },
	address: { type: String },
	messages: { type: Array },
	userId: { type: Schema.Types.ObjectId, ref: 'User' },
    }, 

    {collection: "enrollment"}
);

module.exports = mongo.model("enrollment", Enrollment);
