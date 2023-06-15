CREATE DATABASE IF NOT EXISTS recipes;
USE recipes;

FLUSH PRIVILEGES;
CREATE USER 'DiffusionUser'@'localhost' IDENTIFIED BY 'DiffusionPassword';
GRANT ALL PRIVILEGES ON recipes.* TO 'DiffusionUser'@'%';
