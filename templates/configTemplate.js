module.exports = {
  app: {
    port: 3000,
    host: process.env.HOST || 'localhost',
    mainRoute: '/api/v1',
    modeServer: 'http',
    modeCluster: true,
    openSslKeyPath: './key.pem',
    openSslCertPath: './cert.pem',
    loggerFilePath: './logs/access.log',
    rateLimitSuspendTime: 5,
    rateLimitMaxHitPerIP: 500,
    pageLimit: 10,
  },
};
