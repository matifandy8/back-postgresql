-- create database

CREATE DATABASE jwtpern;

-- set extension

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_role VARCHAR(255) NOT NULL
);

CREATE TABLE jobs(
    job_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    job_description  VARCHAR(255) NOT NULL,
    job_location  VARCHAR(255) NOT NULL,
    job_full_time VARCHAR(255) NOT NULL
);

-- insert fake jobs

INSERT INTO jobs (job_description, job_location, job_full_time) VALUES ('React Js', 'Montevideo', 'full time');