CREATE DATABASE IF NOT EXISTS symfony;
USE symfony;

CREATE TABLE IF NOT EXISTS USER (
    id INT NOT NULL,
    name VARCHAR(100) NULL,
    username VARCHAR(100) NULL,
    email VARCHAR(100) NULL,
    address_street VARCHAR(100) NULL,
    address_suite VARCHAR(100) NULL,
    address_city VARCHAR(100) NULL,
    address_zipcode VARCHAR(100) NULL,
    address_geo_lat FLOAT NULL,
    address_geo_lng FLOAT NULL,
    phone VARCHAR(100) NULL,
    website VARCHAR(100) NULL,
    company_name VARCHAR(100) NULL,
    company_catch_phrase VARCHAR(100) NULL,
    company_bs VARCHAR(100) NULL,
    PRIMARY KEY (id)
);

ALTER TABLE USER
ADD PRIMARY KEY (ID);

CREATE TABLE IF NOT EXISTS POST (
    id INT NOT NULL,
    user_id INT NULL,
    title VARCHAR(100) NULL,
    body VARCHAR(250) NULL,
    PRIMARY KEY (id)
);

ALTER TABLE POST
ADD PRIMARY KEY (ID);