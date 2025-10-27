const fs = require('fs');
const path = require('path');

module.exports = (req, res, next) => {
  const log = `${new Date().toISOString()} ${req.method} ${req.originalUrl}\n`;
  fs.appendFileSync(path.join(__dirname, '../../request.log'), log);
  console.log(log.trim());
  next();
};
