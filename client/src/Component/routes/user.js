const express = require("express");
const router = express.Router();
const User = require("../database/user");
const passport = require("../passport");

router.post("/", (req, res) => {
    console.log("User signup");

    const { username, password} = req.body;

    // Add validation
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log("User.js post error: ", err);
        } 
        
        else if (user) {
            res.json({
                error: `Sorry, username is unavailable: ${username}`
            })
        }

        else {
            const newUser = new User({
                username: username, 
                password: password
            });

            newUser.save((err, savedUser) => {
                if (err) return res.json(err);
                res.json(savedUser);
            })
        }
    })
});

router.post("/login", function(req, res, next) {
    console.log("routes/user.js, login, req.body: ");
    console.log(req.body);
    next();

    },
    
    passport.authenticate("local"), (req, res) => {
        console.log("Logged in successfully", req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
);

router.get("/", (req, res, next) => {
    console.log("=== user!! ===");
    console.log(req.user);

    if (req.user) {
        res.json({ user: req.user });
    }

    else {
        res.json({ user: null });
    }
});

