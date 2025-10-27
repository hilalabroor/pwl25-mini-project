DROP DATABASE IF EXISTS pwl25_db;
CREATE DATABASE pwl25_db;
USE pwl25_db;

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(100),
  product_name VARCHAR(100),
  unit_price INT,
  quantity INT,
  total_price INT,
  order_date DATE
);

INSERT INTO orders (customer_name, product_name, unit_price, quantity, total_price, order_date)
VALUES
('Abdi', 'Kopi Arabica', 40000, 2, 80000, '2025-01-10'),
('Izzat', 'Kopi Robusta', 35000, 1, 35000, '2025-02-10');
