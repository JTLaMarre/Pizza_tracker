DROP DATABASE IF EXISTS pizza_tracker_db;

CREATE DATABASE pizza_tracker_db;

USE pizza_tracker_db;

CREATE TABLE pizzas (
    id INTEGER NOT NULL AUTO_INCREMENT;
    crust_type VARCHAR(255) DEFAULT ("REGULAR");
    sause_type VARCHAR(255) DEFAULT ("REGULAR");
    cheese_type VARCHAR(255) DEFAULT ("REGULAR");
    topping1 VARCHAR(255) DEFAULT ("NONE");
    topping2 VARCHAR(255) DEFAULT ("NONE");
    started_status VARCHAR(255) DEFAULT ("incomplete");
    started_employee INTEGER;
    oven_status VARCHAR(255) DEFAULT ("incomplete");
    oven_employee INTEGER;
    box_status VARCHAR(255) DEFAULT ("incomplete");
    box_employee INTEGER;
    delivery_status VARCHAR(255) DEFAULT ("incomplete");
    delivery_employee INTEGER;
    PRIMARY KEY (id);
);

CREATE TABLE employees (
    id INTEGER NOT NULL;
    first_name VARCHAR(255);
    last_name VARCHAR(255);
    password VARCHAR(255);
    PRIMARY KEY (id);
)