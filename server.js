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
const app = express();
const PORT = process.env.PORT || 8088;

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

// express handle bars setup 
// =============================================================
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./controllers/html_routes.js")(app);
require("./controllers/api_routes.js")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync({force: false}).then(function() {
    app.listen(PORT, function() {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});