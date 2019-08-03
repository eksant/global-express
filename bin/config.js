const pkg = require('../package.json');

module.exports = {
  version: pkg.version,
  description: pkg.description,
  color: {
    green: '\x1b[32m',
    red: '\x1b[31m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
  },
};
