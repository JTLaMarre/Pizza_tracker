// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
let Sequelize = require("sequelize");

let sequelize;

// Creates mySQL connection using Sequelize

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
}
else {
    sequelize = new Sequelize("pizza_tracker_db", "root", "rootroot", {
        host: "localhost",
        port: 3306,
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    })
}

// Exports the connection for other files to use
module.exports = sequelize;