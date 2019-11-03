const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const dbConnection = require("./client/src/Component/database");
const dbConnection = require("connect-mongo")(session);
const passport = require("./client/src/Component/passport");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

// Route requires
const user = require("./client/src/Component/routes/user");

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Session
app.use(session({
  // random string to make the hash that is generated secure
  secret: "stop frolicking",
  store: new MongoStore({ mongooseConnection: dbConnection }),
  resave: false,
  saveUninitialized: false
}))

// passport
app.use(passport.initialize());
// call the deserializeUser
app.use(passport.session());

// routes
app.use("/user", user);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port http://localhost:${PORT}!`);
});
