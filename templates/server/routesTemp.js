const config = require('../config/config');
const { apiLimiter } = require('../server/apiLimiter');

module.exports = function(app) {
  app.use(config.app.mainRoute + '/example', apiLimiter);
  app.use(config.app.mainRoute + '/example', require('../restapi/routes/example'));
};
