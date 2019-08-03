const configGraphql = require('../config/graphql');

module.exports = function(app) {
  configGraphql.connectToServer(app);
};
