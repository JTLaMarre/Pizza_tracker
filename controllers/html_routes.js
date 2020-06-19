// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
const db = require("../models");
const {Op} = require("sequelize")

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render("index")
  });

  app.get("/tracker", function(req, res) {
    res.render('Tracker');
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a employee who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/employee/pizza_status", isAuthenticated, function(req, res) {
    if (!req.user){
     return res.redirect('/employee/login')
    }
    
    db.Pizza.findAll({
      attributes: ["id"],
      where: {
          status: {
              [Op.lt]: 5
          }
      }
    }).then(function (response) {
      console.log(response)
      res.render('pizzaManage', { pizza: response })
    }).catch((err) => {
      console.log("This is an error")
        console.log(err)
        res.status(401).json(err);
    })
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
    res.render('newEmployee');
  })

};
