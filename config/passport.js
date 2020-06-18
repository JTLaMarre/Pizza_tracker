var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/login and password
passport.use(new LocalStrategy(

  {
    usernameField: "employee_id"
  },

  function(employee_id, password, done) {
    // When a user tries to sign in this code runs
    console.log(employee_id)

    db.Employee.findOne({
      where: {
        employee_id: employee_id
      }
    }).then(function(dbEmployee) {
      // If there's no user with the given login
      if (!dbEmployee || !dbEmployee.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect username or password."
        });
      }
      // If none of the above, return the user
      console.log('user logged in', dbEmployee)
      return done(null, dbEmployee);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(employee, cb) {
  cb(null, employee);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
