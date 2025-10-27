const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController');
const validate = require('../middleware/validate');

router.get('/', controller.getAllOrders);
router.get('/:id', controller.getOrderById);
router.post('/', validate, controller.createOrder);
router.put('/:id', validate, controller.updateOrder);
router.delete('/:id', controller.deleteOrder);
router.get('/stats/data', controller.getStats);

module.exports = router;
