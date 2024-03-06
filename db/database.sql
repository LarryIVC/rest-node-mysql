CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE IF NOT EXISTS employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary int(5) DEFAULT NULL,
    PRIMARY KEY (id) 
);

DESCRIBE employee;

INSERT INTO employee (name, salary) VALUES ('John', 1000);
INSERT INTO employee (name, salary) VALUES ('Paul', 2000);
INSERT INTO employee (name, salary) VALUES ('George', 3000);
INSERT INTO employee (name, salary) VALUES ('Ringo', 4000);

INSERT INTO employee VALUES
    (5,'Larry', 5000),
    (6,'Curly', 6000),
    (7,'Moe', 7000);

