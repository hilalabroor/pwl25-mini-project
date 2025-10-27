const db = require('../config/db');

const Order = {
  getAll: (callback) => {
    db.query('SELECT * FROM orders ORDER BY order_date DESC', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM orders WHERE id = ?', [id], callback);
  },

  create: (data, callback) => {
    const sql = `
      INSERT INTO orders (customer_name, product_name, unit_price, quantity, total_price, order_date)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const total = data.unit_price * data.quantity;
    db.query(sql, [data.customer_name, data.product_name, data.unit_price, data.quantity, total, data.order_date], callback);
  },

  update: (id, data, callback) => {
    const total = data.unit_price * data.quantity;
    const sql = `
      UPDATE orders 
      SET customer_name=?, product_name=?, unit_price=?, quantity=?, total_price=?, order_date=? 
      WHERE id=?`;
    db.query(sql, [data.customer_name, data.product_name, data.unit_price, data.quantity, total, data.order_date, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM orders WHERE id = ?', [id], callback)
  },


  stats: (callback) => {
    const sql = `SELECT COUNT(*) AS total_orders, SUM(total_price) AS total_revenue, AVG(total_price) AS avg_order FROM orders`;
    db.query(sql, callback);
  }


};

module.exports = Order;
