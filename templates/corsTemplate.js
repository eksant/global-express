const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

module.exports = app => {
  app.use(cors());
  app.use(bodyParser.json({ limit: '30mb', extended: true }));
  app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
  app.use(helmet());
};
