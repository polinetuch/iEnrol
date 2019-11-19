const express = require('express');
const enrollmentRoute = express.Router();
const Enrollment = require('../database/models/enrollmentSchema');
const mongoose = require('mongoose')

// Define a get data route
enrollmentRoute.get('/get/:id?', function(req, res) {
    // const isAdmin = req.query.admin
    const id = req.params.id;
    
    if (!id) {
        Enrollment.find(function(err, data) {
            if (err) {
                console.log("Error in getting data" + data);
            } else {
                res.json(data);
            }
        });
    }
    else {
        console.log('enrollmentRoute else testing', mongoose.Types.ObjectId(id));
        Enrollment.find({ userId: mongoose.Types.ObjectId(id) }, function (err, data) {
            if (err) {
                console.log("Error in getting data" + data);
            } else {
                res.json(data);
            }
        });
    }

});

// Define a get username data route
enrollmentRoute.route("/get-username").get(function(req, res) {
    Enrollment.findById(req.params.id, (err, data) => {
        if (err) {
            console.log("Error in getting username" + data);
        } else {
            res.json(data);
            console.log("getting username", username);
        }
    })
});

// Define an add route to add new student
enrollmentRoute.route("/add").post(function (req, res) {
    console.log('body', req.body)
    let enrollment = new Enrollment({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        mother: req.body.mother,
        father: req.body.father,
        contact: req.body.contact,
        address: req.body.address,
        userId: req.user._id
    });
    enrollment.save().then(enrollment => {
        res.status(200).json({ message: "New student is successfully added!" });
    })
    .catch(err => {
        console.error(err)
        res.status(400).send("Unable to add new student")
    });
});

// Define an edit route to edit student's data
enrollmentRoute.route("/edit/:id").get(function(req, res) {
    let id = req.params.id;
    Enrollment.findById(id, function(error, data) {
        res.json(data);
        console.log(id);
    });
});

// Define an update route to update data
enrollmentRoute.route("/update/:id").post(function(req, res) {
    Enrollment.findById(req.params.id, function(err, response) {
        if (!response) {
            res.status(404).send("Cannot find data");
        } else {
            response.name = req.body.name;
            response.age = req.body.age;
            response.gender = req.body.gender;
            response.mother = req.body.mother;
            response.father = req.body.father;
            response.contact = req.body.contact;
            response.address = req.body.address;

            response.save().then(enrollment => {
                res.json("Update is sucessfully!" + enrollment);
            });
        };
    });

});

enrollmentRoute.delete('/delete/:id?', function (req, res) {
    console.log(req.params)
    Enrollment.findByIdAndRemove({_id: req.params.id}, function(err, response) {
        if (err) {
            res.json(err);
        } else {
            res.json({_id : req.params.id});
        }
    });
});

enrollmentRoute.route("/message/:id").post(async (req, res) => {
    const enrollment = await Enrollment.findById(req.params.id).exec()
    if (!enrollment.messages) enrollment.messages = []
    enrollment.messages.push({
        message: req.body.message,
        createdAt: new Date()
    })
    enrollment.save()
    res.sendStatus(200)
})

module.exports = enrollmentRoute;
