const db = require("../models");
const passport = require("../config/passport")

module.exports = function(app) {


app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.employee)
})

app.post("/api/signup", function(req, res) {
  console.log(req.body)
    db.Employee.create({
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name
    })
    .then((createdEmployee) => {
        console.log(createdEmployee)
        res.status(307).json("/api/login");
    })
    .catch((err) => {
        console.log(err)
        res.status(401).json(err);
    });
});

app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
})

app.get("/api/employee_data", function(req, res) {
    if (!req.employee) {
        res.json({});
    } else {
        res.json({
            id: req.employee.id,
            first_name: req.employee.first_name,
            last_name: req.employee.last_name
        })
    }
})
}