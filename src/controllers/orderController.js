const Order = require('../models/orderModel');

const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

exports.getAllOrders = (req, res, next) => {
  Order.getAll((err, results) => {
    if (err) return next(err);
    const formattedResults = results.map(order => ({
      ...order,
      order_date: formatDate(order.order_date)
    }));
    res.json(formattedResults);
  });
};

exports.getOrderById = (req, res, next) => {
  const id = req.params.id;
  Order.getById(id, (err, results) => {
    if (err) return next(err);
    if (results.length === 0) return res.status(404).json({ message: 'Order not found' });
    res.json(results[0]);
  });
};

exports.createOrder = (req, res, next) => {
  Order.create(req.body, (err, results) => {
    if (err) return next(err);
    res.status(201).json({ message: 'Order created successfully!' });
  });
};

exports.updateOrder = (req, res, next) => {
  const id = req.params.id;
  Order.update(id, req.body, (err, results) => {
    if (err) return next(err);
    res.json({ message: 'Order updated successfully!' });
  });
};

exports.deleteOrder = (req, res, next) => {
  const id = req.params.id;
  Order.delete(id, (err, results) => {
    if (err) return next(err);
    res.json({ message: 'Order deleted successfully!'});
  });
}

exports.getStats = (req, res, next) => {
  Order.stats((err, results) => {
    if (err) return next(err);
    res.json(results[0]);
  });
};

