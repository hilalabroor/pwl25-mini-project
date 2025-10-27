const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(logger);
app.use('/api/orders', orderRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
