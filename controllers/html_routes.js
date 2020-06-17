// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
<<<<<<< HEAD:controlers/html_routes.js
    res.render('index');
=======
    res.render("index")
>>>>>>> f45db3d1ba2230bf0c895f6a0dde7a3988a848db:controllers/html_routes.js
  });

  app.get("/tracker", function(req, res) {
    res.render('tracker');
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a employee who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/employee/pizza_status", isAuthenticated, function(req, res) {
    if (!req.employee){
      res.redirect('/')
    }
    res.render('pizzaManage')
  });

  app.get("/employee/login", function(req, res) {
    // If the employee already has an account send them to the pizza management page
    if (req.employee) {
      res.redirect("/employee/pizza_status");
    }
    res.render('login');
  });

  app.get("/employee/signup", function(req, res) {
    if (req.employee) {
        res.redirect("/employee/pizza_status");
    }
    res.render('signup');
  })

};
