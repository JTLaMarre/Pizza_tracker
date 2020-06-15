module.exports = function(sequelize, DataTypes) {
    const Pizza = sequelize.define("Pizza", {
        id: {
            type: DataTypes.INGETER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        crust_type: {
            type: DataTypes.STRING,
            defaultValue: "Normal"
        },
        sauce_type: {
            type: DataTypes.STRING,
            defaultValue: "Normal"
        },
        cheese_type: {
            type: DataTypes.STRING,
            defaultValue: "Normal"
        },
        topping1: {
            type: DataTypes.STRING,
            defaultValue: "None"
        },
        topping2: {
            type: DataTypes.STRING,
            defaultValue: "None"
        },
        started_status: {
            type: DataTypes.STRING,
            defaultValue: "incomplete"
        },
        started_employee: {
            type: DataTypes.INTEGER
        },
        oven_status: {
            type: DataTypes.STRING,
            defaultValue: "incomplete"
        },
        oven_employee: {
            type: DataTypes.INTEGER
        },
        box_status: {
            type: DataTypes.STRING,
            defaultValue: "incomplete"
        },
        box_employee: {
            type: DataTypes.INTEGER
        },
        delivery_status: {
            type: DataTypes.STRING,
            defaultValue: "incomplete"
        },
        delivery_employee: {
            type: DataTypes.INTEGER
        },
        phone_number: {
            type: DataTypes.INTEGER
        }
    })
}