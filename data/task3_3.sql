-- TODO Task 3

DROP DATABASE IF EXISTS orders;

CREATE DATABASE orders;

USE orders;

CREATE TABLE orders (
    order_id varchar(26),
    name varchar(128) NOT NULL,
    address varchar(255) NOT NULL,
    priority boolean,
    comments text,
    cart json,

    PRIMARY KEY (order_id)

);

GRANT all privileges ON orders.* TO fred@'%';

flush privileges;

