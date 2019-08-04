const rateLimit = require('express-rate-limit');
const config = require('../config/config');

module.exports = {
  /** set rate limit */
  apiLimiter: rateLimit({
    /** 5 minutes after rate limit reach */
    windowMs: config.app.rateLimitSuspendTime * 60 * 1000,
    /** max hit per IP */
    max: config.app.rateLimitMaxHitPerIP,
  }),
};
