// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var session = require("express-session");

// Requiring passport as we've configured it and requiring models for syncing
// =============================================================
var passport = require("./config/passport");
var db = require("./models");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8088;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
// =============================================================
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
// =============================================================
app.use(session({ secret: process.env.SESSION_SECRET || "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
// =============================================================
require("./controlers/html_routes.js")(app);
require("./controlers/api_routes.js")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});