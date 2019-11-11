const express = require('express');
const enrollmentRoute = express.Router();
const Enrollment = require('../database/models/enrollmentSchema');

// Define a get data route
enrollmentRoute.route("/api/get-data").get(function(req, res) {
    Enrollment.find(function(err, data) {
        if (err) {
            console.log("Error in getting data" + data);
        } else {
            res.json(data + "data received");
            console.log("data received" + data)
        }
    });
});

// Define an add route to add new student
enrollmentRoute.route("/api/add").post(function (req, res) {
    let enrollment = new Enrollment(req.body);
    enrollment.save().then(enrollment => {
        res.status(200).join({enrollment: "New student is successfully added!"});
    })
    .catch(err => {
        res.status(400).send("Unable to add new student")
    });
});

// Define an edit route to edit student's data
enrollmentRoute.route("/api/edit/:id").get(function(req, res) {
    let id = req.params.id;
    Enrollment.findById(id, function(error, data) {
        res.json(data);
    });
});

// Define an update route to update data
enrollmentRoute.route("/api/update/:id").post(function(req, res) {
    Enrollment.findById(req.params.id, function(err, response) {
        if (!response) {
            res.status(404).send("Cannot find data");
        } else {
            response.first_name = req.body.first_name;
            response.last_name = req.body.last_name;
            response.age = req.body.age;
            response.gender = req.body.gender;
            response.mother = req.body.mother;
            response.father = req.body.father;
            response.contact = req.body.contact;
            response.address = req.body.address;

            response.save().then(enrollment => {
                res.json("Update is sucessfully!");
            });
        };
    });

    enrollmentRoute.route("/api/delete/:id").get(function (req, res) {
        Enrollment.findByIdAndRemove({_id: req.params.id}, function(err, response) {
            if (err) {
                res.json(err);
            } else {
                res.json("Successfully deleted");
            }
        });
    });
});

module.exports = enrollmentRoute;
