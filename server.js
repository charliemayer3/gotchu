const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require('./passport');
const session = require('express-session');
const router = require('./auth');
const MongoStore = require('connect-mongo')(session);
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(express.static("client/build"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
	console.log(req.path);
	next();
})

// Add routes, both API and view
app.use(routes); 

mongoose.Promise = global.Promise
let MONGO_URL

mongoose.connect("mongodb://heroku_nfz1ln3n:d1gds9nj8o07pa70rhl36lla7g@ds119476.mlab.com:19476/heroku_nfz1ln3n");
var dbConnection = mongoose.connection

app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
)

// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser
app.use('/auth', require('./auth'))


// ========= HEROKU BUILD =========
// If no API routes are hit, send the React app
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
