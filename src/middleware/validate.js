module.exports = (req, res, next) => {
  const { customer_name, product_name, unit_price, quantity, order_date } = req.body;

  if (!customer_name || !product_name || !unit_price || !quantity || !order_date) {
    return res.status(400).json({ error: 'Semua field wajib diisi!' });
  }

  if (isNaN(unit_price) || isNaN(quantity)) {
    return res.status(400).json({ error: 'unit_price dan quantity harus berupa angka!' });
  }

  if (unit_price <= 0 || quantity <= 0) {
    return res.status(400).json({ error: 'unit_price dan quantity harus lebih dari 0!' });
  }

  next();
};
