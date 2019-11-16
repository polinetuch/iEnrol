const express = require('express');
const router = express.Router();
const User = require('../database/models/User');
const passport = require('../passport');

router.post('/', (req, res) => {
    console.log('user signup');

    const { username, password, isAdmin } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password,
                isAdmin: false
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
});


router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        const isAdmin = req.user.username ==='pollyuch'? true : false;

        var userInfo = {
            username: req.user.username, 
            isAdmin: isAdmin,
            uid: req.user._id 
        };
        res.send(userInfo);
    }
);

router.get("/", (req, res, next) => {
    console.log("===== user!!======")
    const user = req.user
    const {username} = user
    if (username === 'pollyuch') {
        user['isAdmin'] = true
    } else {
        user['isAdmin'] = false 
    }
  
    if (user) {
        res.json({ user:user })
    } else {
        res.json({ user: null })
    }
});

router.post("/logout", (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: "logging out" })
    } else {
        res.send({ msg: "no user to log out" })
    }
});

router.get("/", function(req, res, next) {
    res.render("index");
});

module.exports = router;