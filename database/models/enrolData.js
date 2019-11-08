const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let enrollmentInfo = new Schema({
    student: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String, 
        required: true
    },
    mother: {
        type: String, 
        required: true
    },
    father: {
        type: String, 
        required: true
    },
    phone: {
        type: Number, 
        required: true
    },
    date: {
        type: Date, 
        default: Date.now
    }
});

// exporting the model
module.exports = mongoose.model('enrolData', enrollmentInfo);
