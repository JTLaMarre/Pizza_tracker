const db = require("../models");
const passport = require("../config/passport")
const {Op} = require("sequelize")

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
            employee_id: req.employee.employee_id,
            first_name: req.employee.first_name,
            last_name: req.employee.last_name
        })
    }
})

app.post("/api/pizza", function(req, res) {
    db.Pizza.create({
        crust_type: req.body.crust_type,
        sauce_type: req.body.sauce_type,
        cheese_type: req.body.cheese_type,
        topping1: req.body.topping1,
        topping2: req.body.topping2,
        phone_number: req.body.phone_number
    }).then((newPizza) => {
        console.log(newPizza)
        res.status(500).json(newPizza)
    }).catch((err) =>{
        res.status(401).json(err)
    })
});

app.get("/api/pizza/active", function(req, res) {
    db.Pizza.findAll({
        attributes: ["id"],
        where: {
            delivery_status: {
                [Op.ne]: "complete"
            }
        }
    }).then(pizzas => {
        res.json(pizzas)
    })
});

app.get("/api/pizza/:id", function(req, res) {
    db.Pizza.findOne({
        where: {
            id: req.params.id
        }
    }).then(pizzaData => {
        res.json(pizzaData)
    })
});


}