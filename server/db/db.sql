CREATE DATABASE IF NOT EXISTS budget;

USE budget;

CREATE TABLE income (
	id INT(11) NOT NULL AUTO_INCREMENT,
	concept VARCHAR(45) DEFAULT NULL,
    amount INT(11) NOT NULL,
    date VARCHAR(20) NOT NULL,
    type VARCHAR(45) NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE expenses (
	id INT(11) NOT NULL AUTO_INCREMENT,
	concept VARCHAR(45) DEFAULT NULL,
    amount INT(11) NOT NULL,
    date VARCHAR(20) NOT NULL,
    type VARCHAR(45) NOT NULL,
    PRIMARY KEY(id)
);

DESCRIBE income;
DESCRIBE expenses;