const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
var cors = require('cors')
const session = require('express-session');
const dbConnection = require('./database');
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');
const app = express();

const enrollmentRoute = require('./routes/enrollmentRoute');
const user = require('./routes/user');
// Setting up port and require data for 
const PORT = process.env.PORT || 3001;


// MIDDLEWARE
app.use(cors())
app.use(morgan('dev'));
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(bodyParser.json());

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// Routes
app.use("/user", user);
app.use("/enrollment", enrollmentRoute);

// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
});
