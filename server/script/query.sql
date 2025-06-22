-- PREREQUISITES: MySQL server must be running and accessible.

CREATE DATABASE IF NOT EXISTS casino_game;

USE casino_game;

-- casino_user table
CREATE TABLE IF NOT EXISTS casino_user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uuid VARCHAR(64) NOT NULL,
    user VARCHAR(64) NOT NULL UNIQUE,
    email VARCHAR(128) NOT NULL UNIQUE,
    pass TEXT NOT NULL,
    account_type INT DEFAULT 1,
    money DECIMAL(12,2) DEFAULT 100,
    profile_pic INT DEFAULT 0,
    signup BIGINT
);

-- login_user table
CREATE TABLE IF NOT EXISTS login_user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    login_date BIGINT,
    device INT,
    ip_address VARCHAR(64),
    city VARCHAR(64),
    country VARCHAR(64),
    FOREIGN KEY (user_id) REFERENCES casino_user(id)
);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
FLUSH PRIVILEGES;