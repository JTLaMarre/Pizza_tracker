module.exports = function(sequelize, DataTypes) {
    const Pizza = sequelize.define("Pizza", {
        id: {
            type: DataTypes.INTEGER,
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
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        cooking_employee: {
            type: DataTypes.INTEGER,
            references: {
                model: "employees",
                key: 'id'
            }
        },
        delivery_employee: {
            type: DataTypes.INTEGER,
            references: {
                model: "employees",
                key: 'id'
            }
        },
        phone_number: {
            type: DataTypes.STRING
        }
    })
    
    return Pizza;
}