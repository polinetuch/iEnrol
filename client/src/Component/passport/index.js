const passport = require("passport");
const LocalStrategy = require("./localStrategy");
const User = require("../database/user");

passport.serializeUser((user, done) => {
    console.log("*** serializeUser called, user: ");
    console.log(user);
    console.log("----------");
    done(null, { _id: user._id });
})