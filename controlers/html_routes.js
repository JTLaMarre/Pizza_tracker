// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/buildPizza.html"));
  });

  app.get("/tracker", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/Tracker.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a employee who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/employee/pizza_status", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/employeePizzaManagement.html"));
  });

  app.get("/employee/login", function(req, res) {
    // If the employee already has an account send them to the pizza management page
    if (req.employee) {
      res.redirect("/employee/pizza_status");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/employee/signup", function(req, res) {
    if (req.employee) {
        res.redirect("/employee/pizza_status");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"))
  })

};
